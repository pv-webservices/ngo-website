import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
await mkdir('public/images/generated', { recursive: true });
// Extract the real ashram photographs from the client-supplied card. The crops sit
// just inside each rounded frame, are upscaled 3x with Lanczos and lightly denoised
// and sharpened to recover detail lost in the small originals.
const UPSCALE = 3;
const crops = {
  care: { left: 48, top: 276, width: 203, height: 145 },
  gathering: { left: 283, top: 277, width: 203, height: 146 },
  moments: { left: 518, top: 277, width: 199, height: 146 },
  community: { left: 745, top: 276, width: 202, height: 146 },
};
for (const [name, box] of Object.entries(crops))
  await sharp('public/shantijankalyansansathancard.webp')
    .extract(box)
    .resize(box.width * UPSCALE, box.height * UPSCALE, { kernel: 'lanczos3' })
    .median(3)
    .sharpen({ sigma: 1.4, m1: 0.6, m2: 2.2 })
    .modulate({ saturation: 1.06, brightness: 1.03 })
    .linear(1.05, -4)
    .webp({ quality: 86 })
    .toFile(`public/images/${name}.webp`);
await sharp('public/ngo-website-logo.webp')
  .resize(256, 256, { fit: 'contain', background: '#ffffff' })
  .webp({ quality: 92 })
  .toFile('public/images/logo.webp');
// Preserve the supplied QR pixels and quiet zone, with lossless output.
await sharp('public/banking detail.jpeg')
  .extract({ left: 680, top: 66, width: 267, height: 279 })
  .extend({ top: 8, bottom: 8, left: 14, right: 14, background: '#fff' })
  .png()
  .toFile('public/images/donation-qr.png');
// Testimonial portraits are cropped from the generated program images
// (run scripts/generate-images.mjs first; raw PNGs live in output/generated-raw).
const RAW = 'output/generated-raw';
const avatars = {
  'avatar-elder': [
    'hero-care',
    { left: 705, top: 95, width: 200, height: 200 },
  ],
  'avatar-child': [
    'together-festival',
    { left: 735, top: 280, width: 180, height: 180 },
  ],
  'avatar-beneficiary': [
    'medical-support',
    { left: 830, top: 185, width: 220, height: 220 },
  ],
};
for (const [name, [source, box]] of Object.entries(avatars))
  await sharp(`${RAW}/${source}.png`)
    .extract(box)
    .resize(200, 200)
    .webp({ quality: 82 })
    .toFile(`public/images/generated/${name}.webp`);
console.log('Prepared logo, enhanced ashram photographs, QR and portraits.');
