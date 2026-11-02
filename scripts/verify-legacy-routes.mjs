import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { resolve } from "node:path";

// pnpm build 이후 실행: 실제 GitHub Pages 산출물의 이전 주소와 새 주소를 함께 검증한다.
const root = resolve(import.meta.dirname, "..");
const html = (path) =>
  readFileSync(resolve(root, `out${path}index.html`), "utf8");
const sitemap = readFileSync(resolve(root, "out/sitemap.xml"), "utf8");
const slugs = readdirSync(resolve(root, "src/app/(legal)/apps"));
const pairs = [];
for (const locale of ["en", "ko", "ja"]) {
  pairs.push([`/more-apps/${locale}/`, `/${locale}/more-apps/`]);
  for (const slug of slugs) {
    pairs.push([
      `/apps/${slug}/privacy/${locale}/`,
      `/${locale}/apps/${slug === "eyecons" ? "eyecons-stan" : slug}/privacy/`,
    ]);
  }
}
for (const [oldPath, newPath] of pairs) {
  const content = html(oldPath);
  assert(
    content.includes('name="robots" content="noindex, nofollow"'),
    `${oldPath}: noindex`,
  );
  assert(
    content.includes(
      `<noscript><meta http-equiv="refresh" content="0;url=${newPath}"/></noscript>`,
    ),
    `${oldPath}: JavaScript-disabled fallback`,
  );
  assert(content.includes(`href="${newPath}"`), `${oldPath}: manual link`);
  assert(content.includes('rel="canonical"'), `${oldPath}: canonical`);
  assert(
    existsSync(resolve(root, `out${newPath}index.html`)),
    `${newPath}: destination missing`,
  );
  assert(
    !sitemap.includes(`https://berryfy.github.io${oldPath}<`),
    `${oldPath}: legacy URL in sitemap`,
  );
  if (oldPath.includes("/privacy/"))
    assert(html(newPath).includes('name="robots" content="noindex, nofollow"'));
}
assert(
  !sitemap.includes("/privacy/"),
  "Privacy policies must never appear in sitemap",
);
console.log(
  `PASS: ${pairs.length} legacy URLs, destinations, noindex, canonical, JavaScript-disabled fallback, and sitemap exclusions`,
);
