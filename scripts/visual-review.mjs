import sharp from 'sharp';
const routes = [
  'home',
  'about',
  'our-work',
  'old-age-home',
  'child-welfare',
  'yoga-meditation',
  'medical-support',
  'day-care',
  'our-journey',
  'activities',
  'gallery',
  'videos',
  'get-involved',
  'donate',
  'contact',
  'privacy-policy',
  'terms',
  'support-policy',
];
for (const lang of ['en', 'hi']) {
  for (const width of [1440, 390]) {
    const groupSize = width === 390 ? 9 : 18;
    const thumbWidth = width === 390 ? 280 : 350;
    const thumbHeight = width === 390 ? 606 : 244;
    for (let start = 0; start < routes.length; start += groupSize) {
      const files = routes.slice(start, start + groupSize);
      const rows = Math.ceil(files.length / 3);
      const overlays = [];
      for (let i = 0; i < files.length; i++) {
        const file = `output/playwright/${lang}-${files[i]}-${width}.webp`;
        const metadata = await sharp(file).metadata();
        const data = await sharp(file)
          .extract({
            left: 0,
            top: 0,
            width,
            height: Math.min(metadata.height, width === 390 ? 844 : 1000),
          })
          .resize(thumbWidth, thumbHeight, {
            fit: 'contain',
            background: '#fff',
          })
          .toBuffer();
        const x = (i % 3) * (thumbWidth + 15);
        const y = Math.floor(i / 3) * (thumbHeight + 34);
        overlays.push({ input: data, left: x, top: y + 24 });
        const label = Buffer.from(
          `<svg width="${thumbWidth}" height="23"><rect width="100%" height="100%" fill="#edf1f4"/><text x="8" y="16" font-family="sans-serif" font-size="12" fill="#103b5c">${lang} / ${files[i]} / ${width}px</text></svg>`,
        );
        overlays.push({ input: label, left: x, top: y });
      }
      await sharp({
        create: {
          width: 3 * (thumbWidth + 15),
          height: rows * (thumbHeight + 34),
          channels: 3,
          background: '#e0e6e8',
        },
      })
        .composite(overlays)
        .png()
        .toFile(`output/playwright/review-${lang}-${width}-${start}.png`);
    }
  }
}
console.log(
  'Generated desktop and mobile visual review sheets for both languages.',
);
