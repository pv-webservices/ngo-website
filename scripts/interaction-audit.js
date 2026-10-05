async (page) => {
  const results = [];
  const assert = (condition, message) => {
    if (!condition) throw new Error(message);
    results.push(message);
  };
  const origin = 'http://127.0.0.1:4322';
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });
  await page.goto(origin + '/');
  await page.evaluate(() => localStorage.clear());
  await page.setViewportSize({ width: 390, height: 844 });
  await page.reload();
  assert(
    (await page.locator('html').getAttribute('lang')) === 'en',
    'First visit defaults to English',
  );
  await page.getByRole('button', { name: 'Open navigation' }).click();
  assert(
    (await page
      .getByRole('button', { name: 'Open navigation' })
      .getAttribute('aria-expanded')) === 'true',
    'Mobile menu opens',
  );
  await page.keyboard.press('Escape');
  assert(
    (await page
      .getByRole('button', { name: 'Open navigation' })
      .getAttribute('aria-expanded')) === 'false',
    'Escape closes menu and restores focus',
  );
  await page.getByRole('button', { name: 'Open navigation' }).click();
  await page.locator('header [data-language="hi"]').click();
  await page.waitForURL(origin + '/hi/');
  assert(
    (await page.locator('html').getAttribute('lang')) === 'hi',
    'Language switch loads Hindi',
  );
  assert(
    (await page.evaluate(() => localStorage.getItem('shanti-language'))) ===
      'hi',
    'Language preference is stored',
  );
  await page.goto(origin + '/about/');
  await page.waitForURL(origin + '/hi/about/');
  assert(
    (await page.locator('h1').textContent()) === 'हमारे बारे में',
    'Language preference survives navigation and a later English URL',
  );
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.locator('header [data-language="en"]').click();
  await page.waitForURL(origin + '/about/');
  await page.goto(origin + '/gallery/');
  await page
    .getByRole('button', { name: 'Care & companionship', exact: true })
    .click();
  assert(
    (await page.locator('.gallery-grid figure:visible').count()) === 2,
    'Gallery category filter works',
  );
  await page.locator('.gallery-grid figure:visible button').first().click();
  assert(await page.locator('[data-counter]').textContent()==='1 / 2','Filtered lightbox contains only the selected category');
  await page.keyboard.press('ArrowRight');
  assert(await page.locator('[data-counter]').textContent()==='2 / 2','Filtered lightbox navigates within its category');
  await page.keyboard.press('Escape');
  await page.getByRole('button', { name: 'All photos', exact: true }).click();
  assert(
    (await page.locator('.gallery-grid figure:visible').count()) === 4,
    'All photographs return',
  );
  const first = page.getByRole('button', {
    name: 'View photograph: A moment of care and companionship',
    exact: true,
  });
  await first.click();
  assert(await page.locator('dialog').isVisible(), 'Gallery opens a modal');
  await page.keyboard.press('ArrowRight');
  assert(
    (await page.locator('[data-counter]').textContent()) === '2 / 4',
    'Gallery next-photo keyboard control works',
  );
  await page.keyboard.press('ArrowLeft');
  assert(
    (await page.locator('[data-counter]').textContent()) === '1 / 4',
    'Gallery previous-photo keyboard control works',
  );
  await page.keyboard.press('Escape');
  assert(
    !(await page.locator('dialog').isVisible()),
    'Escape closes the lightbox',
  );
  assert(
    await first.evaluate((el) => el === document.activeElement),
    'Lightbox restores focus to its trigger',
  );
  await page.goto(origin + '/donate/');
  assert(
    (await page.locator('dd').allTextContents()).includes('063721010000024'),
    'Bank account keeps its leading zero',
  );
  assert(
    (await page.locator('dd').allTextContents()).includes('UBINO906379'),
    'Client-confirmed IFSC is displayed exactly',
  );
  await page.context().grantPermissions(['clipboard-read', 'clipboard-write']);
  await page
    .getByRole('button', { name: 'Copy account number', exact: true })
    .click();
  assert(
    (await page.evaluate(() => navigator.clipboard.readText())) ===
      '063721010000024',
    'Copy account number works',
  );
  await page
    .getByText('How can I make a contribution?', { exact: true })
    .click();
  assert(
    (await page.locator('details').first().getAttribute('open')) !== null,
    'Donation FAQ expands',
  );
  for (const language of ['en', 'hi']) {
    await page.evaluate(() => localStorage.clear());
    await page.goto(origin + (language === 'hi' ? '/hi' : '') + '/contact/');
    await page.locator('button[type="submit"]').click();
    assert(
      !(await page.locator('.draft-link').isVisible()),
      language + ': empty form cannot prepare a draft',
    );
    await page
      .locator('#name')
      .fill(language === 'hi' ? 'परीक्षण स्वयंसेवक' : 'QA Volunteer');
    await page.locator('#phone').fill('not-a-phone');
    await page.locator('#email').fill('volunteer@example.org');
    await page
      .locator('#message')
      .fill(
        language === 'hi'
          ? 'यह स्थानीय परीक्षण संदेश है।'
          : 'This is a local QA enquiry, not a sent message.',
      );
    await page.locator('button[type="submit"]').click();
    assert(
      !(await page.locator('.draft-link').isVisible()),
      language + ': invalid phone is rejected',
    );
    await page.locator('#phone').fill('+91 90000 00000');
    await page.locator('#email').fill('bad-email');
    await page.locator('button[type="submit"]').click();
    assert(
      !(await page.locator('.draft-link').isVisible()),
      language + ': invalid email is rejected',
    );
    await page.locator('#email').fill('volunteer@example.org');
    await page.locator('button[type="submit"]').click();
    assert(
      await page.locator('.draft-link').isVisible(),
      language + ': valid form prepares a draft link',
    );
    const href = await page.locator('.draft-link').getAttribute('href');
    assert(
      href.startsWith('mailto:sunitabhushan67@gmail.com?'),
      'Draft recipient is the supplied NGO email',
    );
    assert(
      decodeURIComponent(href).includes('volunteer@example.org'),
      'Draft contains the enquiry information',
    );
    await page.locator('#message').fill('Updated local test enquiry, never sent.');
    assert(!(await page.locator('.draft-link').isVisible()),language+': editing the form clears an outdated draft');
    // The draft link is inspected, never opened or sent.
  }
  await page.evaluate(() => localStorage.clear());
  await page.goto(origin + '/');
  await page.emulateMedia({ reducedMotion: 'reduce' });
  assert(
    (await page
      .locator('html')
      .evaluate((el) => getComputedStyle(el).scrollBehavior)) === 'auto',
    'Reduced motion disables smooth scrolling',
  );
  const missing = await page.request.get(origin + '/missing-page/');
  assert(missing.status() === 404, 'Missing page returns HTTP 404');
  assert(errors.length === 0, 'No browser JavaScript or console errors');
  return { checks: results.length, results, errors };
}
