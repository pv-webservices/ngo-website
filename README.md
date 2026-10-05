# Shanti Jan Kalyan Sansthan

A bilingual, static Astro website. English is the default at `/`; all 18 content pages have Hindi equivalents under `/hi/`. An explicit language choice persists locally. No accounts, payment gateway, database or analytics are included.

## Run locally

```sh
npm ci
npm run dev
npm run check
npm run build
npm run preview
```

The generated `dist/` directory can be hosted as static files. Configure the host to serve directory `index.html` files and `404.html` for missing paths. The canonical site is `https://shantijankalyansanstha.in`. Development is local only; the domain has not been deployed or changed.

## Content and assets

- `src/data/site.ts`: both translations, programs, impact figures, testimonials, videos, gallery, contact, address and bank details.
- `src/components/Home.astro`: homepage, following the client's reference layout.
- `src/components/InnerPage.astro`: inner pages; `DonatePanel`, `VideoCards`, `Gallery`, `ProgramCards` are shared.
- `src/styles/global.css`: design tokens, colour-shifting buttons, card hover/touch lift, responsive rules, reduced motion.
- `scripts/generate-images.mjs`: generates the nine program images with Gemini `gemini-3.1-flash-lite-image` (Nano Banana 2 Lite) at 1K, saved as WebP in `public/images/generated/`. Run with `node --env-file=.env scripts/generate-images.mjs [name ...]`; raw PNGs go to `output/`.
- `scripts/prepare-assets.mjs`: re-extracts the four real ashram photos from the NGO card with a 3x Lanczos upscale, denoise and sharpening; prepares the logo, the lossless QR and testimonial portraits (cropped from generated images).

Real ashram photographs are shown first in galleries; generated images are illustrative and the terms page says so. Replace them with original photos when available.

**Confirm with the NGO before launch:**

- Impact figures (500+, 200+, 1000+, 300+) and the three testimonials come from the client's reference design, not from verified records. Portraits are illustrative.
- The address is transcribed from the card; "नजफू का टीला" was read as Majnu Ka Tilla (PIN 110054) and "Dera Baba Chhubitas" is a best reading.
- IFSC **UBINO906379** (letter O) was confirmed by the client on 6 October 2026; the banking image and card print **UBIN0906379** (zero). The card also prints account 053721610000024, while the banking image shows 063721010000024 (used).
- Video cards open the official Facebook page; no video files are hosted.

The contact form prepares a `mailto:` draft; it does not send anything itself.

## Verification

```sh
npx playwright-cli -s=ngo open http://127.0.0.1:4322/
npx playwright-cli -s=ngo run-code --filename scripts/browser-audit.js
npx playwright-cli -s=ngo run-code --filename scripts/interaction-audit.js
node scripts/verify-assets.mjs
```

Start `npm run preview -- --port 4322` first. The browser audit checks all 36 language routes at 320, 375, 390, 430, 768, 1024, 1280, 1440 and 1920 pixels; image loading, headings, translated UI, internal links, metadata and WCAG A/AA rules via Axe. Audit artifacts and screenshots are kept in `output/playwright/`.

Redesign verified locally on 6 October 2026: `astro check` and build pass with zero errors, warnings or hints; all 2,925 internal links, anchors and image references across the 37 built pages resolve; carousel, lightbox, gallery filters and the contact draft were exercised in a browser at 1440px and 375px. The earlier Playwright/Axe audit scripts predate the redesign and have not been re-run against it.

Captured and visually reviewed all content pages in both languages at desktop and mobile sizes. The 72 final screenshots use filenames such as `en-home-1440.webp` and `hi-contact-390.webp`. Review sheets begin with `review-`. `scripts/capture-pages.js` and `scripts/visual-review.mjs` reproduce these artifacts. Approved video playback remains untested because no video source was supplied.

Routes follow Astro's static `getStaticPaths` approach: https://docs.astro.build/en/reference/routing-reference/
