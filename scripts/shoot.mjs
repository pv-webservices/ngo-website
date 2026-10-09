import { chromium } from 'playwright';
// Full-page screenshots of chosen routes for visual review.
// Usage: node scripts/shoot.mjs <outDir> <width> <route> [route...]   (route "" = home, prefix hi/ for Hindi)
const [, , outDir, widthArg, ...routes] = process.argv;
const width = Number(widthArg);
const origin = 'http://localhost:4322';
const browser = await chromium.launch({ channel: 'msedge' });
const page = await browser.newPage({
  viewport: { width, height: width < 600 ? 844 : 900 },
});
// MOTION=1 keeps animations on and scrolls through the page so reveals have run.
const motion = process.env.MOTION === '1';
if (!motion) await page.emulateMedia({ reducedMotion: 'reduce' });
for (const route of routes.length ? routes : ['']) {
  const path = route === 'home' ? '' : route;
  await page.goto(`${origin}/${path ? path + '/' : ''}`, {
    waitUntil: 'networkidle',
  });
  await page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all(
      Array.from(document.images).map(async (i) => {
        i.loading = 'eager';
        await i.decode().catch(() => {});
      }),
    );
  });
  if (motion) {
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += 500) {
        window.scrollTo({ top: y, behavior: 'instant' });
        await new Promise((r) => setTimeout(r, 120));
      }
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
    await page.waitForTimeout(1800);
  }
  const name = (path || 'home').replace(/\//g, '-');
  await page.screenshot({
    path: `${outDir}/${name}-${width}.jpg`,
    fullPage: true,
    type: 'jpeg',
    quality: 60,
  });
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth - window.innerWidth,
  );
  console.log(name, 'overflow', overflow);
}
await browser.close();
