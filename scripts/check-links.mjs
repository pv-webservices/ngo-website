import { readFile, readdir, stat } from 'node:fs/promises';
import { join } from 'node:path';
// Checks every internal href/src/srcset/poster in dist/: target file exists and #anchors exist.
const DIST = 'dist';
async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(p)));
    else if (p.endsWith('.html')) out.push(p);
  }
  return out;
}
const exists = (p) =>
  stat(p).then(
    () => true,
    () => false,
  );
const pages = await walk(DIST);
const ids = new Map();
const html = new Map();
for (const page of pages) {
  const text = await readFile(page, 'utf8');
  html.set(page, text);
  ids.set(
    page,
    new Set([...text.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])),
  );
}
const fileFor = (pathname) =>
  join(
    DIST,
    decodeURIComponent(pathname),
    pathname.endsWith('/') ? 'index.html' : '',
  );
let checked = 0;
const failures = [];
for (const [page, text] of html) {
  const refs = [
    ...[...text.matchAll(/\s(?:href|src|poster|data-src)="([^"]+)"/g)].map(
      (m) => m[1],
    ),
    ...[...text.matchAll(/\ssrcset="([^"]+)"/g)].flatMap((m) =>
      m[1].split(',').map((part) => part.trim().split(/\s+/)[0]),
    ),
  ];
  for (const ref of refs) {
    if (!ref.startsWith('/') && !ref.startsWith('#')) continue;
    checked++;
    const [pathPart, hash] = ref.split('#');
    const target = pathPart ? fileFor(pathPart) : page;
    if (pathPart && !(await exists(target))) {
      failures.push(`${page}: missing ${ref}`);
      continue;
    }
    if (hash && !ids.get(target)?.has(hash))
      failures.push(`${page}: missing anchor ${ref}`);
  }
}
console.log(`${pages.length} pages, ${checked} internal references checked`);
if (failures.length) {
  console.log([...new Set(failures)].join('\n'));
  process.exit(1);
}
console.log('PASS: every internal link, asset and anchor resolves.');
