# Shanti Jan Kalyan Sansthan

A bilingual, static Astro website. English is the default at `/`; all 20 content pages have Hindi equivalents under `/hi/`. An explicit language choice persists locally. No accounts, payment gateway, database or analytics are included.

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

- `src/data/site.ts`: both translations, programmes (with Ongoing / Held periodically status), photo captions, videos, contact, address and bank details. `url()` accepts `slug#anchor`.
- `src/data/content.ts`: homepage sections (hero columns, proof of work, Why Your Support Matters, causes, journey, Mahila Diwas, stories, trust), the full Mahila Diwas collection and the Transparency page. Every statement is backed by a supplied photo, banner or video.
- `src/components/Home.astro`: homepage. The hero is three columns of the NGO's own photographs drifting slowly (two horizontal rows on mobile). It pauses on hover/focus and with its toggle, and is a still collage with reduced motion.
- `src/components/PageHero.astro`: the header of every inner page. It shows a dark photographic field, the title rising in word by word, an italic accent line, and a collage of three photographs (`pageHeroes` in `content.ts`) that unveils, floats and follows the pointer slightly.
- `src/components/InnerPage.astro`: inner pages, including `/mahila-diwas/`, `/transparency/` and `/activities/` (Events & Stories). `Gallery` takes custom item lists, a single shared lightbox and "show more" paging.
- `src/styles/global.css` (base tokens and inner pages), `home.css` (homepage and editorial pieces), `pages.css` (new inner-page pieces), `motion.css` (page heroes, button fill and lift, drawn link underlines, hover states, and the staggered scroll reveals set up in `src/scripts/site.ts`). Everything is still with `prefers-reduced-motion`. Display type is Source Serif 4 (with italic), body type is Manrope / Noto Sans Devanagari, and Kalam is used for handwritten photo notes.
- Media: see [MEDIA.md](MEDIA.md) for the October 2026 media map (source → web name → event → date → placement) and the list of files deliberately kept unpublished. `scripts/prepare-new-media.mjs` rebuilds those derivatives; `scripts/prepare-photos.mjs` the 2025 set.
- `scripts/prepare-assets.mjs`: prepares the logo and the lossless donation QR.

Duplicate frames are not repeated in the gallery: `night-rescue` duplicates `night-blanket`, and new image 10 is the same photograph as `president-with-resident`. `yoga-elder` was withdrawn for dignity reasons. Photographs of last rites, missing-person appeals, patients in hospital and residents undressed are intentionally not published.

**Confirm with the NGO before launch:**

- Registration and tax documents: only "Regd. No. 323" (printed on the NGO's banners) is shown. 80G, 12A and NITI Aayog Darpan claims were **removed** until certificates, validity and approved wording are supplied. Then publish them on `/transparency/`.
- The "Orphanage" label has been replaced with "Support for Underprivileged Children". The NGO's own banners say "वृद्धाश्रम अनाथालय"; confirm whether any registered child-care institution exists before using that word.
- Ashram story: "roughly the first three years" at the Nasha Mukti Kendra building with a collapsed ceiling comes from the client brief. Confirm the years, the building's address, and whether the video shows that building.
- De-addiction counselling is shown as **Planned**. Confirm it is not currently running, and whether the Kendra was ever licensed.
- Mahila Diwas: only the 2022 Samman Samaroh is dated (from its banner). Confirm the year of the pink-marquee felicitation (images 26–31) and whether images 11, 16 and 19 are Mahila Diwas events.
- Eye camp (2 July 2024): the banner announces free cataract operations. Confirm how many people were examined or operated on before adding any number. "4+ medical camps" was not used because only one camp is documented.
- Day Care & Companionship and Yoga statuses come from the earlier site and banners. Confirm they are current.
- Consent: confirm permission to publish identifiable residents, women and children (especially the children in images 14, 15 and 18).
- Whether the woman in images 4, 10 and 26 is the National President. Captions currently do not say so.
- The address is transcribed from the card; "नजफू का टीला" was read as Majnu Ka Tilla (PIN 110054) and "Dera Baba Chhubitas" is a best reading (the banner in the photographs reads "Dera Baba Ghuni Das").
- IFSC **UBINO906379** (letter O) was confirmed by the client on 6 October 2026; the banking image and card print **UBIN0906379** (zero). The card also prints account 053721610000024, while the banking image shows 063721010000024 (used).
- The brief named "Manav Janhit Kalyan Sansthan" and manavjanhitkalyansansthan.org. That is a different NGO (different address and phones), so on the client's confirmation none of its content was used.

The contact form prepares a `mailto:` draft; it does not send anything itself.

## Verification

```sh
npx playwright-cli -s=ngo open http://127.0.0.1:4322/
npx playwright-cli -s=ngo run-code --filename scripts/browser-audit.js
npx playwright-cli -s=ngo run-code --filename scripts/interaction-audit.js
node scripts/verify-assets.mjs
```

Start `npm run preview -- --port 4322` first. The browser audit checks all 36 language routes at 320, 375, 390, 430, 768, 1024, 1280, 1440 and 1920 pixels; image loading, headings, translated UI, internal links, metadata and WCAG A/AA rules via Axe. Audit artifacts and screenshots are kept in `output/playwright/`.

Redesign verified locally on 9 October 2026 (system Edge via Playwright; run `npm run preview -- --port 4322` first):

```sh
node scripts/check-links.mjs        # every internal href/src/srcset/poster and #anchor in dist/
node scripts/interaction-check.mjs  # hero pause, journey video, gallery paging/filter/lightbox, Mahila album, contact draft, mobile menu, reduced motion, axe on key routes
node scripts/axe-all.mjs            # axe WCAG 2.1 A/AA + horizontal overflow on all routes at 1440 and 390 px
node scripts/shoot.mjs <dir> <width> home mahila-diwas ...   # full-page screenshots
```

Results: `astro check` 0 errors/warnings/hints; build 41 pages; 3,946 internal references resolve; 30/30 interaction checks pass; axe and overflow clean on 40 routes × 2 widths.
