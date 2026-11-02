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
    if (
      !existsSync(
        resolve(root, `src/app/(legal)/apps/${slug}/privacy/[locale]/page.tsx`),
      )
    )
      continue;
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
// 기본 정책과 언어 접두어 정책도 실제 산출물에서 검증한다.
let policyPages = 0;
for (const slug of slugs.filter((slug) => slug !== "eyecons")) {
  const base = `/apps/${slug}/privacy/`;
  for (const locale of ["default", "en", "ko", "ja"]) {
    const path = locale === "default" ? base : `/${locale}${base}`;
    const content = html(path);
    const language = locale === "default" ? "en" : locale;
    const canonical = ["default", "en"].includes(locale) ? base : path;
    assert(
      content.includes(`<html lang="${language}"`),
      `${path}: document language`,
    );
    assert(
      content.includes('name="robots" content="noindex, nofollow"'),
      `${path}: noindex`,
    );
    assert(
      content.includes(
        `rel="canonical" href="https://berryfy.github.io${canonical}"`,
      ),
      `${path}: canonical destination`,
    );
    for (const alternate of ["en", "ko", "ja", "x-default"]) {
      const alternatePath = ["en", "x-default"].includes(alternate)
        ? base
        : `/${alternate}${base}`;
      assert(
        content.includes(
          `hrefLang="${alternate}" href="https://berryfy.github.io${alternatePath}"`,
        ),
        `${path}: ${alternate} alternate`,
      );
    }
    policyPages++;
  }
}
assert(
  !sitemap.includes("/privacy/"),
  "Privacy policies must never appear in sitemap",
);
console.log(
  `PASS: ${pairs.length} legacy URLs and ${policyPages} policy pages, destinations, noindex, canonical, JavaScript-disabled fallback, and sitemap exclusions`,
);
