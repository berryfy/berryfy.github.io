import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
const root = resolve(import.meta.dirname, "..");
const base = "/apps/potion-sort-quest/privacy/";
for (const locale of ["default", "en", "ko", "ja"]) {
  const path = locale === "default" ? base : `/${locale}${base}`;
  const content = readFileSync(resolve(root, `out${path}index.html`), "utf8");
  const main = content.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)?.[1];
  assert(main, `${path}: policy main content missing`);
  const text = main
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "")
    .replace(/<[^>]*>/g, " ");
  assert(
    content.includes(`lang="${locale === "default" ? "en" : locale}"`),
    `${path}: lang`,
  );
  assert(
    content.includes('name="robots" content="noindex, nofollow"'),
    `${path}: noindex`,
  );
  const canonical = ["default", "en"].includes(locale)
    ? base
    : `/${locale}${base}`;
  assert(
    content.includes(
      `rel="canonical" href="https://berryfy.github.io${canonical}"`,
    ),
    `${path}: canonical`,
  );
  for (const term of [
    "Lulu",
    "AdMob",
    "UMP",
    "TLS",
    "public.berryfy@gmail.com",
  ])
    assert(text.includes(term), `${path}: missing ${term}`);
  for (const term of ["Supabase", "Firebase", "YouTube"])
    assert(!text.includes(term), `${path}: unrelated service ${term}`);
  for (const lang of ["ko", "ja"])
    assert(
      content.includes(`href="/${lang}${base}"`),
      `${path}: language switch`,
    );
  assert.equal(
    (
      content.match(
        /<section\b[^>]*\bid="(overview|purpose|data|collection|third-parties|external-services|deletion|rights|automatic|security|contact|changes)"/g,
      ) || []
    ).length,
    12,
    `${path}: sections`,
  );
}
assert(
  !readFileSync(resolve(root, "out/sitemap.xml"), "utf8").includes("/privacy/"),
  "Privacy pages in sitemap",
);
console.log(
  "PASS: 4 Lulu privacy URLs, 3 languages, canonical, noindex, 12 sections, language links, SDK facts and sitemap exclusion",
);
