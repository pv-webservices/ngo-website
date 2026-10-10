import sharp from 'sharp';
import { mkdir, unlink } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
// Prepares the "ngo new" batch (10 October 2026) of the NGO's own photographs and videos.
// Originals stay untouched in media-source/New Images 2026-10b/ (outside public/).
// Overlay text, social-media headers and poster text are cropped away; nothing is retouched.
//
// Deliberately NOT published (kept in the archive only):
//   9, 10 last rites · 11 patient on a hospital stretcher · 15, 16 and eye-care.jpeg
//   identifiable patients after eye surgery · 18 resident on a drip · 13 screenshot with app
//   chrome (same room as 12) · 19 duplicate of 1 · video-3 duplicate of video-2.
const SOURCE = 'media-source/New Images 2026-10b';
const OUT = 'public/images/photos';
const LARGE = 1600;
const SMALL = 640;
const src = (n) => `${SOURCE}/ngo new images-${n}.jpeg`;

// [source image number, crop box or null for the whole frame]
const photos = {
  // Headroom above her face so the floating header never covers it.
  'hair-care': [2, { left: 0, top: 300, width: 900, height: 1299 }],
  'ashram-team-beds': [1, null],
  'office-residents': [3, null],
  'winter-fire': [4, null],
  'ashram-dormitory-evening': [5, { left: 0, top: 360, width: 900, height: 1240 }],
  'mahila-diwas-march-honour': [6, null],
  'mahila-diwas-march-group': [7, null],
  'dormitory-residents': [8, null],
  'dormitory-day': [12, null],
  'president-with-elder': [14, null],
  'eye-checkup-ashram': [17, { left: 0, top: 455, width: 1002, height: 715 }],
};

// [output name, source file, poster time in seconds]
const videos = [
  ['resident-rounds', 'ngo new video-1.mp4', 2],
  ['doctor-visit', 'ngo new video-2.mp4', 9],
];

await mkdir(OUT, { recursive: true });
await mkdir('public/images/posters', { recursive: true });

// Social-media text burnt into a frame can be blurred out: [image number, region]. Image 2 is
// left sharp on purpose: its handle and music credit sit across the face, so blurring them
// smeared her head (client feedback, 10 October 2026).
// The patch is feathered so no hard edge shows.
const blurRegions = {
};
const FEATHER = 8;
const sourceBuffer = async (n) => {
  const region = blurRegions[n];
  if (!region) return sharp(src(n)).rotate().toBuffer();
  const { width, height } = region;
  const mask = Buffer.from(
    `<svg width="${width}" height="${height}"><filter id="f"><feGaussianBlur stdDeviation="${FEATHER / 2}"/></filter><rect x="${FEATHER}" y="${FEATHER}" width="${width - 2 * FEATHER}" height="${height - 2 * FEATHER}" rx="${FEATHER}" fill="#fff" filter="url(#f)"/></svg>`,
  );
  const blurred = await sharp(src(n)).rotate().blur(18).extract(region).toBuffer();
  const patch = await sharp(blurred)
    .ensureAlpha()
    .composite([{ input: mask, blend: 'dest-in' }])
    .png()
    .toBuffer();
  return sharp(src(n))
    .rotate()
    .composite([{ input: patch, left: region.left, top: region.top }])
    .toBuffer();
};

for (const [name, [n, box]] of Object.entries(photos)) {
  const input = await sourceBuffer(n);
  const base = () => {
    const image = sharp(input);
    return box ? image.extract(box) : image;
  };
  const { width, height } = await base()
    .resize({ width: LARGE, height: LARGE, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 80 })
    .toFile(`${OUT}/${name}.webp`);
  await base()
    .resize({ width: SMALL, withoutEnlargement: true })
    .webp({ quality: 76 })
    .toFile(`${OUT}/${name}-sm.webp`);
  console.log(`${name}: ${width}x${height}`);
}

for (const [name, file, at] of process.argv.includes('--no-video') ? [] : videos) {
  const input = `${SOURCE}/${file}`;
  execFileSync('ffmpeg', [
    '-loglevel', 'error', '-y', '-i', input,
    '-c:v', 'libx264', '-crf', '28', '-preset', 'slow', '-pix_fmt', 'yuv420p',
    '-c:a', 'aac', '-ac', '1', '-b:a', '80k', '-movflags', '+faststart',
    `public/videos/${name}.mp4`,
  ]);
  execFileSync('ffmpeg', [
    '-loglevel', 'error', '-y', '-ss', String(at), '-i', input,
    '-frames:v', '1', '-q:v', '2', `public/images/posters/${name}.png`,
  ]);
  await sharp(`public/images/posters/${name}.png`)
    .webp({ quality: 78 })
    .toFile(`public/images/posters/${name}.webp`);
  await unlink(`public/images/posters/${name}.png`);
  console.log(`video ${name}`);
}
