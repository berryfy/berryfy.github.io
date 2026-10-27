import type { Metadata } from "next";

import { siteAssets } from "@/constants/assets";
import {
  languageAlternates,
  localeDetails,
  siteConfig,
  siteSlogans,
} from "@/constants/site";
import type { SiteCopy } from "@/features/home/types/home";
import type { SiteLocale } from "@/types/site";

export function createHomeMetadata(
  locale: SiteLocale,
  copy: SiteCopy,
): Metadata {
  const slogan = siteSlogans[locale];

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      absolute: `${siteConfig.name} — ${slogan}`,
    },
    description: copy.description,
    alternates: {
      canonical: localeDetails[locale].path,
      languages: languageAlternates,
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: localeDetails[locale].openGraphLocale,
      url: localeDetails[locale].path,
      title: `${siteConfig.name} — ${slogan}`,
      description: copy.description,
      images: [
        {
          url: siteAssets.socialPreview,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} — ${slogan}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${siteConfig.name} — ${slogan}`,
      description: copy.description,
      images: [siteAssets.socialPreview],
    },
  };
}
