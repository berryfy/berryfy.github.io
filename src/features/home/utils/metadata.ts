import type { Metadata } from "next";

import { siteAssets } from "@/constants/assets";
import {
  languageAlternates,
  localeDetails,
  siteConfig,
} from "@/constants/site";
import type { SiteCopy } from "@/features/home/types/home";
import type { SiteLocale } from "@/types/site";

export function createHomeMetadata(
  locale: SiteLocale,
  copy: SiteCopy,
): Metadata {
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      absolute: `${siteConfig.name} — ${copy.footer.tagline}`,
    },
    description: copy.hero.description,
    alternates: {
      canonical: localeDetails[locale].path,
      languages: languageAlternates,
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: localeDetails[locale].openGraphLocale,
      url: localeDetails[locale].path,
      title: `${siteConfig.name} — ${copy.footer.tagline}`,
      description: copy.hero.description,
      images: [
        {
          url: siteAssets.socialPreview,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — Small apps. Bright moments.`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${siteConfig.name} — ${copy.footer.tagline}`,
      description: copy.hero.description,
      images: [siteAssets.socialPreview],
    },
  };
}
