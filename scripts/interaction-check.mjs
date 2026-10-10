import { chromium } from 'playwright';
import AxeBuilder from '@axe-core/playwright';
// Exercises the redesign's interactive pieces and runs axe (WCAG 2.x A/AA) on key routes.
// Requires `npm run preview -- --port 4322`. Uses the system Edge browser.
const origin = 'http://localhost:4322';
const browser = await chromium.launch({ channel: 'msedge' });
const results = [];
const check = (name, ok, detail = '') =>
  results.push({ name, ok: Boolean(ok), detail });

// Desktop interactions
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(`${origin}/`);
// The loader covers the page briefly; interactions start once it has gone.
const loaded = (p) =>
  p.waitForSelector('#preloader', { state: 'detached', timeout: 8000 });
await loaded(page);
const hero = page.locator('[data-hero]');
const activeSlide = () =>
  page.$$eval('[data-slide]', (slides) =>
    slides.findIndex((el) => el.classList.contains('is-active')),
  );
await page.mouse.move(5, 5);
await page.waitForTimeout(6600);
check('hero slideshow advances', (await activeSlide()) === 1);
await page.click('.hero-dot[data-goto="3"]');
await page.mouse.move(5, 5);
check(
  'hero dot shows that photograph',
  (await activeSlide()) === 3 &&
    (await page.getAttribute('.hero-dot[data-goto="3"]', 'aria-current')) ===
      'true',
);
await page.click('.hero-toggle');
await page.mouse.move(5, 5);
check(
  'hero toggle pauses',
  (await hero.getAttribute('class')).includes('is-paused'),
);
check(
  'hero toggle aria-pressed',
  (await page.getAttribute('.hero-toggle', 'aria-pressed')) === 'true',
);
check(
  'hero toggle label switches',
  (await page.textContent('.hero-toggle .sr-only')).includes('Play'),
);
await page.waitForTimeout(6600);
check('paused slideshow stays put', (await activeSlide()) === 3);
check(
  'whatsapp button links to the NGO number',
  (await page.getAttribute('.whatsapp-float a', 'href')).startsWith(
    'https://wa.me/919821958768',
  ),
);
await page.click('.h-watch');
await page.waitForTimeout(2000);
check(
  'watch link reaches journey',
  page.url().endsWith('#journey') &&
    (await page.$eval(
      '#journey',
      (el) => Math.abs(el.getBoundingClientRect().top) < 200,
    )),
);
await page.click('#journey [data-video-play]');
await page.waitForTimeout(2500);
const video = await page.$eval('#journey video', (v) => ({
  paused: v.paused,
  time: v.currentTime,
  controls: v.controls,
  src: v.currentSrc,
}));
check(
  'ashram video plays on click',
  !video.paused && video.time > 0 && video.controls,
  JSON.stringify(video),
);

await page.goto(`${origin}/gallery/`);
await loaded(page);
const visible = () =>
  page.$$eval('.gallery-item', (els) => els.filter((e) => !e.hidden).length);
const total = await page.$$eval('.gallery-item', (els) => els.length);
check('gallery shows first 18', (await visible()) === 18, `total ${total}`);
await page.click('[data-gallery-more]');
check('gallery show more reveals all', (await visible()) === total);
await page.click('[data-filter="women"]');
const women = await page.$$eval('.gallery-item', (els) =>
  els.filter((e) => !e.hidden).map((e) => e.dataset.category),
);
check(
  'gallery filter women',
  women.length > 0 && women.every((c) => c === 'women'),
  `${women.length} shown`,
);
await page.click('.gallery-item:not([hidden]) .gallery-photo');
check('lightbox opens', await page.$eval('.lightbox', (d) => d.open));
const first = await page.textContent('.lightbox-content p');
await page.keyboard.press('ArrowRight');
check(
  'lightbox next',
  (await page.textContent('.lightbox-content p')) !== first,
);
await page.keyboard.press('Escape');
check(
  'lightbox closes on Escape',
  !(await page.$eval('.lightbox', (d) => d.open)),
);

await page.goto(`${origin}/mahila-diwas/`);
await loaded(page);
const mahilaCount = await page.$$eval(
  '.album .gallery-item',
  (els) => els.length,
);
check('Mahila Diwas collection photos', mahilaCount === 11, `${mahilaCount}`);
check(
  'single lightbox on Mahila page',
  (await page.$$('.lightbox')).length === 1,
);
await page.click('.album .gallery-photo');
check(
  'Mahila lightbox counter',
  (await page.textContent('[data-counter]')).trim() === `1 / ${mahilaCount}`,
);
await page.keyboard.press('Escape');

await page.goto(`${origin}/contact/`);
await loaded(page);
await page.fill('#name', 'Test Visitor');
await page.fill('#email', 'visitor@example.test');
await page.fill('#message', 'This is a local test of the enquiry draft.');
await page.click('#contact-form button[type=submit]');
const draft = await page.getAttribute('.draft-link', 'href');
check(
  'contact form prepares mailto draft',
  draft?.startsWith('mailto:') && draft.includes('Test%20Visitor'),
);

// Mobile navigation
const mobile = await browser.newPage({ viewport: { width: 390, height: 844 } });
await mobile.goto(`${origin}/hi/`);
await loaded(mobile);
await mobile.click('.menu-toggle');
check(
  'mobile menu opens',
  (await mobile.getAttribute('.menu-toggle', 'aria-expanded')) === 'true' &&
    (await mobile.isVisible(
      '#navigation .nav-links a[href="/hi/mahila-diwas/"]',
    )),
);
await mobile.keyboard.press('Escape');
check(
  'mobile menu closes on Escape',
  (await mobile.getAttribute('.menu-toggle', 'aria-expanded')) === 'false',
);

// Reduced motion: no drift, toggle hidden
const stillContext = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  reducedMotion: 'reduce',
});
const still = await stillContext.newPage();
await still.goto(`${origin}/`);
await loaded(still);
check(
  'reduced motion starts the slideshow paused',
  (await still.getAttribute('[data-hero]', 'class')).includes('is-paused') &&
    (await still.getAttribute('.hero-toggle', 'aria-pressed')) === 'true',
);

// Accessibility
const axeRoutes = [
  '',
  'hi/',
  'mahila-diwas/',
  'transparency/',
  'gallery/',
  'donate/',
  'activities/',
  'our-journey/',
  'our-work/',
  'child-welfare/',
  'contact/',
];
for (const route of axeRoutes) {
  await still.goto(`${origin}/${route}`);
  const axe = await new AxeBuilder({ page: still })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze();
  check(
    `axe /${route}`,
    axe.violations.length === 0,
    axe.violations
      .map((v) => `${v.id}(${v.nodes.length}): ${v.nodes[0]?.target}`)
      .join(' | '),
  );
}
await browser.close();
for (const r of results)
  console.log(
    `${r.ok ? 'PASS' : 'FAIL'}  ${r.name}${r.detail && !r.ok ? '  — ' + r.detail : r.detail && r.name.includes('gallery shows') ? '  (' + r.detail + ')' : ''}`,
  );
const failed = results.filter((r) => !r.ok).length;
console.log(`${results.length - failed}/${results.length} passed`);
process.exit(failed ? 1 : 0);
