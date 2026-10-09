import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
// Prepares the October 2026 batch of the NGO's own photographs and videos.
// Originals stay untouched in media-source/New Images 2026-10/ (outside public/).
// Phone-screen chrome is cropped away; nothing is retouched beyond crop and resize.
//
// Deliberately NOT published (kept in the archive only):
//   1, 25 last rites of unclaimed bodies · 2, 23 patients on hospital stretchers/beds
//   9, 24, 41 missing-person appeals with names · 50 memorial notice · 47, 49 text-overlay
//   reels showing residents undressed · 3 bare-chested resident · 7 patient in hospital
//   5 screenshot duplicate of 6 · 10 same photograph as the 2025 president-with-resident · 17 lower-resolution duplicate of 52 · 27, 29 near-identical
//   frames of 28 · 34, 45 too blurred · 46 Instagram screenshot · 48 text across faces.
//   Videos 4, 5, 6, 8 show residents undressed or patients in hospital; 1, 2, 10, 13-17 are
//   very short, duplicate other material, or carry a bank poster already shown on the site.
const SOURCE = 'media-source/New Images 2026-10';
const OUT = 'public/images/photos';
const LARGE = 1600;
const SMALL = 640;
const src = (n) => `${SOURCE}/ngo image-${n}.jpeg`;

// [source image number, crop box or null for the whole frame]
const photos = {
  'selfie-with-resident': [4, null],
  'window-conversation': [6, null],
  'office-elders': [8, { left: 0, top: 150, width: 738, height: 1080 }],
  'women-members': [11, { left: 0, top: 525, width: 738, height: 515 }],
  'mahila-diwas-2022': [12, { left: 0, top: 582, width: 738, height: 398 }],
  'food-distribution-winter': [
    13,
    { left: 0, top: 305, width: 738, height: 955 },
  ],
  'children-class': [14, null],
  'children-education': [15, { left: 0, top: 0, width: 1080, height: 540 }],
  'women-gathering': [16, null],
  'holi-children-2023': [18, { left: 0, top: 145, width: 738, height: 1130 }],
  'kendra-women-members': [19, null],
  'volunteers-logo-wall': [20, null],
  'office-cake': [21, null],
  'kendra-building': [22, null],
  'mahila-diwas-felicitation': [26, null],
  'mahila-diwas-audience': [28, null],
  'mahila-diwas-group': [30, null],
  'mahila-diwas-honourees': [31, null],
  'holi-milan': [32, null],
  'holi-elders-office': [33, null],
  'resident-on-bed': [35, null],
  'night-blanket': [36, { left: 0, top: 225, width: 738, height: 1075 }],
  'resident-banner': [37, null],
  'elders-arched-window': [38, null],
  'distribution-office': [39, null],
  'gift-for-resident': [40, null],
  'resident-and-caregiver': [42, null],
  'resident-portrait-man': [
    43,
    { left: 0, top: 200, width: 738, height: 1080 },
  ],
  'resident-portrait-woman': [
    44,
    { left: 0, top: 200, width: 738, height: 1080 },
  ],
  'eye-camp-checkup': [51, null],
  'eye-camp-team': [52, null],
};

// [output name, source file, poster time in seconds]
const videos = [
  ['ashram-beginnings', 'ashram nashamukti kendra.mp4', 9],
  ['mother-daughter-reunion', 'ngo video-7.mp4', 3],
  ['supplies-distribution', 'ngo video-11.mp4', 2],
  ['holi-with-elders', 'ngo video-12.mp4', 4],
  ['medicine-round', 'ngo video-3.mp4', 2],
  ['warm-clothes', 'ngo video-9.mp4', 1.5],
];

await mkdir(OUT, { recursive: true });
await mkdir('public/videos', { recursive: true });
await mkdir('public/images/posters', { recursive: true });

for (const [name, [n, box]] of Object.entries(photos)) {
  const base = () => {
    const image = sharp(src(n)).rotate();
    return box ? image.extract(box) : image;
  };
  const { width, height } = await base()
    .resize({
      width: LARGE,
      height: LARGE,
      fit: 'inside',
      withoutEnlargement: true,
    })
    .webp({ quality: 80 })
    .toFile(`${OUT}/${name}.webp`);
  await base()
    .resize({ width: SMALL, withoutEnlargement: true })
    .webp({ quality: 76 })
    .toFile(`${OUT}/${name}-sm.webp`);
  console.log(`${name}: ${width}x${height}`);
}

const skipVideos = process.argv.includes('--no-video');
for (const [name, file, at] of skipVideos ? [] : videos) {
  const input = `${SOURCE}/${file}`;
  execFileSync('ffmpeg', [
    '-loglevel',
    'error',
    '-y',
    '-i',
    input,
    '-c:v',
    'libx264',
    '-crf',
    '28',
    '-preset',
    'slow',
    '-pix_fmt',
    'yuv420p',
    '-c:a',
    'aac',
    '-ac',
    '1',
    '-b:a',
    '80k',
    '-movflags',
    '+faststart',
    `public/videos/${name}.mp4`,
  ]);
  execFileSync('ffmpeg', [
    '-loglevel',
    'error',
    '-y',
    '-ss',
    String(at),
    '-i',
    input,
    '-frames:v',
    '1',
    '-q:v',
    '2',
    `public/images/posters/${name}.png`,
  ]);
  await sharp(`public/images/posters/${name}.png`)
    .webp({ quality: 78 })
    .toFile(`public/images/posters/${name}.webp`);
  await import('node:fs/promises').then((fs) =>
    fs.unlink(`public/images/posters/${name}.png`),
  );
  console.log(`video ${name}`);
}
