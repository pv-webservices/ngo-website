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

- `src/data/site.ts`: both translations, programs, impact figures, photo captions, the "Lives We Touch" rows, videos, contact, address and bank details.
- `src/components/Home.astro`: homepage. `LivesStrip.astro` is the two-row moving photo strip of people cared for by the NGO (pauses on hover/focus and with its toggle; static and scrollable with reduced motion).
- `src/components/InnerPage.astro`: inner pages; `DonatePanel`, `VideoCards`, `Gallery`, `ProgramCards` are shared.
- `src/styles/global.css`: design tokens (one brand red, warm neutrals, Source Serif 4 / Noto Serif Devanagari headings, Manrope / Noto Sans Devanagari body), layout and responsive rules.
- All photographs and videos are the NGO's own. Originals live in `media-source/New Images & Videos/` (outside `public/` so they are not deployed; the videos folder is git-ignored because of its size).
- `scripts/prepare-photos.mjs`: crops phone-screen chrome and text overlays, cuts individual portraits out of the supplied collages and writes `public/images/photos/<name>.webp` (max 1600px) and `<name>-sm.webp` (640px).
- Videos were re-encoded with ffmpeg (H.264 CRF 28, AAC mono 80k, `+faststart`) into `public/videos/` (100 MB → 36 MB); posters are in `public/images/posters/`. They load only when a visitor presses play.
- `scripts/prepare-assets.mjs`: prepares the logo and the lossless donation QR.

Two supplied photographs (NGO Image-1 and NGO Image-13) show last rites for an unclaimed body and are intentionally not published.

**Confirm with the NGO before launch:**

- Impact figures (500+, 200+, 1000+, 300+) come from the client's reference design, not from verified records.
- Credentials shown in the hero and footer (Regd. No. 323; 80G, 12A, NITI Aayog Darpan) are read from the NGO's own poster and banner. Confirm they are current.
- No photographs of children were supplied, so the Orphanage program uses community photographs. Replace them when child photos (with guardian consent) are available.
- The address is transcribed from the card; "नजफू का टीला" was read as Majnu Ka Tilla (PIN 110054) and "Dera Baba Chhubitas" is a best reading (the banner in the photographs reads "Dera Baba Ghuni Das").
- IFSC **UBINO906379** (letter O) was confirmed by the client on 6 October 2026; the banking image and card print **UBIN0906379** (zero). The card also prints account 053721610000024, while the banking image shows 063721010000024 (used).

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

Captured and visually reviewed all content pages in both languages at desktop and mobile sizes. The 72 final screenshots use filenames such as `en-home-1440.webp` and `hi-contact-390.webp`. Review sheets begin with `review-`. `scripts/capture-pages.js` and `scripts/visual-review.mjs` reproduce these artifacts.

Routes follow Astro's static `getStaticPaths` approach: https://docs.astro.build/en/reference/routing-reference/
