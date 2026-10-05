import { routes, site, url } from '../data/site';
export function GET() {
  const entries = routes
    .flatMap((slug) =>
      (['en', 'hi'] as const).map(
        (lang) =>
          `<url><loc>https://${site.domain}${url(lang, slug)}</loc>${(['en', 'hi'] as const).map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="https://${site.domain}${url(l, slug)}"/>`).join('')}<xhtml:link rel="alternate" hreflang="x-default" href="https://${site.domain}${url('en', slug)}"/></url>`,
      ),
    )
    .join('');
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${entries}</urlset>`,
    { headers: { 'Content-Type': 'application/xml' } },
  );
}
