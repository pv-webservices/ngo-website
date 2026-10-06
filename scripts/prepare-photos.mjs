import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
// Converts the NGO's own photographs (media-source/) into web-ready WebP files in
// public/images/photos/. Phone-screen chrome and text overlays are cropped away, and
// individual portraits are cut out of the supplied collages. Each photo gets a full
// size (max 1600px) and a 640px card size.
const SOURCE = 'media-source/New Images & Videos/Images';
const OUT = 'public/images/photos';
const LARGE = 1600;
const SMALL = 640;
const src = (n) => `${SOURCE}/NGO Image-${n}.jpeg`;
// [source image number, crop box or null for the whole frame]
const photos = {
  'ashram-dormitory': [3, null],
  'office-celebration': [2, { left: 0, top: 125, width: 1080, height: 1517 }],
  'wound-dressing': [4, { left: 0, top: 250, width: 1004, height: 1150 }],
  'street-outreach': [5, { left: 0, top: 0, width: 828, height: 1040 }],
  'roadside-grooming': [5, { left: 0, top: 1080, width: 420, height: 500 }],
  'roadside-first-aid': [5, { left: 434, top: 1080, width: 394, height: 500 }],
  'hand-care': [6, { left: 0, top: 210, width: 738, height: 1180 }],
  'ration-distribution': [7, null],
  'shared-meal': [8, null],
  'president-with-resident': [
    9,
    { left: 460, top: 22, width: 415, height: 365 },
  ],
  'wheelchair-friends': [9, { left: 22, top: 1080, width: 410, height: 490 }],
  'resting-resident': [9, { left: 22, top: 555, width: 410, height: 490 }],
  'president-portrait': [10, { left: 0, top: 245, width: 400, height: 455 }],
  'night-rescue': [11, { left: 680, top: 225, width: 320, height: 490 }],
  'resident-with-mala': [11, { left: 615, top: 725, width: 390, height: 400 }],
  'elder-checkup': [11, { left: 232, top: 8, width: 264, height: 380 }],
  'residents-gathering': [12, null],
  'yoga-session': [14, { left: 0, top: 0, width: 1080, height: 530 }],
  'yoga-group': [14, { left: 0, top: 545, width: 530, height: 480 }],
  'yoga-elder': [14, { left: 555, top: 570, width: 250, height: 495 }],
  volunteers: [15, null],
  'new-resident': [16, { left: 975, top: 25, width: 440, height: 680 }],
  'dressing-help': [16, { left: 502, top: 25, width: 440, height: 680 }],
  'beard-grooming': [16, { left: 25, top: 735, width: 680, height: 680 }],
  'wheelchair-care': [16, { left: 735, top: 735, width: 680, height: 680 }],
  'hospital-admission': [17, null],
};
await mkdir(OUT, { recursive: true });
for (const [name, [n, box]] of Object.entries(photos)) {
  const base = () => (box ? sharp(src(n)).extract(box) : sharp(src(n)));
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
