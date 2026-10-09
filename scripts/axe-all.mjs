import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
import { readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
// Axe (WCAG 2.1 A/AA) and horizontal-overflow sweep of every built route at 1440px and 390px.
// Requires `npm run preview -- --port 4322`. Uses the system Edge browser.
const walk = (dir) =>
  readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory()
      ? walk(p)
      : p.endsWith('index.html')
        ? [p]
        : [];
  });
const routes = walk('dist').map(
  (p) =>
    '/' + relative('dist', p).split(sep).join('/').replace('index.html', ''),
);
const browser = await chromium.launch({ channel: 'msedge' });
let problems = 0;
for (const width of [1440, 390]) {
  const context = await browser.newContext({
    viewport: { width, height: 900 },
    reducedMotion: 'reduce',
  });
  const page = await context.newPage();
  for (const route of routes) {
    await page.goto('http://localhost:4322' + route);
    const result = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth - innerWidth,
    );
    if (result.violations.length || overflow > 0) {
      problems++;
      console.log(
        width,
        route,
        `overflow ${overflow}`,
        result.violations
          .map((v) => `${v.id}: ${v.nodes[0].target}`)
          .join(' | '),
      );
    }
  }
  await context.close();
}
console.log(
  `${routes.length} routes x 2 widths checked; pages with problems: ${problems}`,
);
await browser.close();
process.exit(problems ? 1 : 0);
