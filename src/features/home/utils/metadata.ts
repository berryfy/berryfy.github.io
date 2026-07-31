import type { Metadata } from "next";

import { localeDetails } from "@/features/home/constants/site-content";
import type { SiteCopy, SiteLocale } from "@/features/home/types/home";

const openGraphLocales: Record<SiteLocale, string> = {
  en: "en_US",
  ko: "ko_KR",
  ja: "ja_JP",
};

export function createHomeMetadata(
  locale: SiteLocale,
  copy: SiteCopy,
): Metadata {
  return {
    metadataBase: new URL("https://berryfy.github.io"),
    title: {
      absolute: `Berryfy — ${copy.footer.tagline}`,
    },
    description: copy.hero.description,
    alternates: {
      canonical: localeDetails[locale].path,
      languages: {
        en: "/",
        ko: "/ko/",
        ja: "/ja/",
        "x-default": "/",
      },
    },
    openGraph: {
      type: "website",
      siteName: "Berryfy",
      locale: openGraphLocales[locale],
      url: localeDetails[locale].path,
      title: `Berryfy — ${copy.footer.tagline}`,
      description: copy.hero.description,
    },
  };
}
