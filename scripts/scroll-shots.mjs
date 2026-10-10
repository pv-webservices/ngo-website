import { chromium } from 'playwright';
import { createRequire } from 'node:module';
// Viewport-by-viewport screenshots of a route, tiled into one contact sheet per route.
// Usage: node scripts/scroll-shots.mjs <outDir> <width> <height> <route> [route...]
// (route "home" = /, prefix hi/ for Hindi). Reduced motion keeps every frame still.
const sharp = createRequire(import.meta.url)('sharp');
const [, , outDir, widthArg, heightArg, ...routes] = process.argv;
const width = Number(widthArg);
const height = Number(heightArg);
const COLS = width < 600 ? 6 : 3;
const SCALE = width < 600 ? 0.5 : 0.36;
const browser = await chromium.launch({ channel: 'msedge' });
const page = await browser.newPage({ viewport: { width, height } });
await page.emulateMedia({ reducedMotion: 'reduce' });
for (const route of routes) {
  const path = route === 'home' ? '' : route;
  await page.goto(`http://localhost:4322/${path ? path + '/' : ''}`, {
    waitUntil: 'networkidle',
  });
  await page.evaluate(async () => {
    await document.fonts.ready;
    document.querySelectorAll('img').forEach((i) => (i.loading = 'eager'));
  });
  await page.waitForTimeout(600);
  const total = await page.evaluate(() => document.documentElement.scrollHeight);
  const shots = [];
  for (let y = 0; y < total; y += height) {
    await page.evaluate((top) => window.scrollTo(0, top), y);
    await page.waitForTimeout(250);
    shots.push(await page.screenshot({ type: 'png' }));
  }
  const w = Math.round(width * SCALE);
  const h = Math.round(height * SCALE);
  const rows = Math.ceil(shots.length / COLS);
  const tiles = await Promise.all(
    shots.map((s) => sharp(s).resize(w, h).toBuffer()),
  );
  const name = (path || 'home').replace(/\//g, '-');
  await sharp({
    create: {
      width: COLS * w + (COLS - 1) * 8,
      height: rows * h + (rows - 1) * 8,
      channels: 3,
      background: '#444',
    },
  })
    .composite(
      tiles.map((input, i) => ({
        input,
        left: (i % COLS) * (w + 8),
        top: Math.floor(i / COLS) * (h + 8),
      })),
    )
    .jpeg({ quality: 72 })
    .toFile(`${outDir}/${name}-${width}-sheet.jpg`);
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - window.innerWidth,
  );
  console.log(name, shots.length, 'frames, overflow', overflow);
}
await browser.close();
