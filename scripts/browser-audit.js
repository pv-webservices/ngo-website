async (page) => {
  const origin = 'http://127.0.0.1:4322';
  const routes = [
    '',
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
  const widths = [320, 375, 390, 430, 768, 1024, 1280, 1440, 1920];
  const failures = [];
  const consoleErrors = [];
  const internalLinks = new Set();
  const pageResults = [];
  page.on('pageerror', (error) => consoleErrors.push(error.message));
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto(origin + '/');
  await page.evaluate(() => localStorage.clear());
  for (const lang of ['en', 'hi']) {
    for (const slug of routes) {
      const path =
        (lang === 'hi' ? '/hi' : '') + '/' + (slug ? slug + '/' : '');
      const response = await page.goto(origin + path);
      await page.evaluate(() => document.fonts.ready);
      await page.evaluate(async () => {
        await Promise.all(
          Array.from(document.images)
            .filter((i) => i.getAttribute('src'))
            .map(async (i) => {
              i.loading = 'eager';
              await i.decode().catch(() => {});
            }),
        );
      });
      const info = await page.evaluate(() => ({
        title: document.title,
        lang: document.documentElement.lang,
        h1: document.querySelectorAll('h1').length,
        description: document
          .querySelector('meta[name="description"]')
          ?.getAttribute('content'),
        canonical: document
          .querySelector('link[rel="canonical"]')
          ?.getAttribute('href'),
        alternates: document.querySelectorAll('link[hreflang]').length,
        images: Array.from(document.images)
          .filter(
            (i) => i.getAttribute('src') && (!i.complete || !i.naturalWidth),
          )
          .map((i) => i.src),
        links: Array.from(document.querySelectorAll('a[href]')).map((a) =>
          a.getAttribute('href'),
        ),
        english:
          document.documentElement.lang === 'hi'
            ? Array.from(
                document.querySelectorAll('h1,h2,h3,p,button,nav a,label'),
              )
                .filter(
                  (el) =>
                    !el.closest('[lang="en"]') &&
                    /[A-Za-z]{4}/.test(el.textContent) &&
                    !/@|UNION|SHANTI|UBIN0|English/.test(el.textContent),
                )
                .map((el) => el.textContent.trim())
            : [],
      }));
      if (
        response.status() !== 200 ||
        info.h1 !== 1 ||
        info.lang !== lang ||
        !info.description ||
        info.alternates !== 3 ||
        info.images.length ||
        info.english.length
      )
        failures.push({
          path,
          type: 'page-integrity',
          status: response.status(),
          ...info,
        });
      info.links
        .filter((h) => h.startsWith('/'))
        .forEach((h) => internalLinks.add(h));
      const layout = [];
      for (const width of widths) {
        await page.setViewportSize({ width, height: 900 });
        const overflow = await page.evaluate(() => ({
          document: document.documentElement.scrollWidth > innerWidth + 1,
          elements: Array.from(
            document.querySelectorAll(
              'main a,main button,main h1,main h2,main h3,main p,main label,main input,main textarea,main select,header a,header button,footer a,footer p,.contact-strip a',
            ),
          )
            .filter((el) => {
              const b = el.getBoundingClientRect();
              return (
                b.width > 0 &&
                (b.right > innerWidth + 1 || b.left < -1) &&
                !el.closest('dialog,.hero-visual')
              );
            })
            .slice(0, 12)
            .map((el) => ({ tag: el.tagName, class: el.className })),
        }));
        layout.push({ width, ...overflow });
        if (overflow.document || overflow.elements.length)
          failures.push({ path, width, type: 'overflow', ...overflow });
      }
      await page.setViewportSize({ width: 1440, height: 1000 });
      await page.addScriptTag({
        path: 'F:/Project/--INDIAN CLIENTS--/Custom/ngo-website/node_modules/axe-core/axe.min.js',
      });
      const violations = await page.evaluate(async () => {
        const r = await window.axe.run(document, {
          runOnly: {
            type: 'tag',
            values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'],
          },
        });
        return r.violations.map((v) => ({
          id: v.id,
          impact: v.impact,
          nodes: v.nodes.map((n) => ({
            target: n.target,
            summary: n.failureSummary,
          })),
        }));
      });
      if (violations.length)
        failures.push({ path, type: 'accessibility', violations });
      pageResults.push({
        path,
        status: response.status(),
        title: info.title,
        layoutChecks: layout.length,
        accessibilityViolations: violations.length,
      });
    }
  }
  for (const path of internalLinks) {
    const response = await page.request.get(origin + path);
    if (response.status() !== 200)
      failures.push({ path, type: 'broken-link', status: response.status() });
  }
  return {
    pageResults,
    layoutsChecked: pageResults.length * widths.length,
    internalLinksChecked: internalLinks.size,
    consoleErrors,
    failures,
  };
}
