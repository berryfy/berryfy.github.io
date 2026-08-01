import type { Metadata } from "next";

import { siteConfig } from "@/constants/site";
import {
  moreAppsCopy,
  moreAppsLanguageAlternates,
  moreAppsLocaleDetails,
} from "@/features/more-apps/constants/more-apps-copy";
import type { SiteLocale } from "@/types/site";

export function createMoreAppsMetadata(locale: SiteLocale): Metadata {
  const copy = moreAppsCopy[locale];
  const canonical =
    locale === siteConfig.defaultLocale
      ? siteConfig.routes.moreApps
      : moreAppsLocaleDetails[locale].path;

  return {
    metadataBase: new URL(siteConfig.url),
    title: `${copy.title} | ${siteConfig.name}`,
    description: copy.description,
    alternates: {
      canonical,
      languages: moreAppsLanguageAlternates,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
