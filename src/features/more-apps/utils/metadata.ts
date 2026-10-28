import type { Metadata } from "next";

import { siteConfig } from "@/constants/site";
import {
  moreAppsCopy,
  moreAppsLanguageAlternates,
  moreAppsLocalePaths,
} from "@/features/more-apps/constants/more-apps-copy";
import { createSocialMetadata } from "@/lib/social-metadata";
import type { SiteLocale } from "@/types/site";

export function createMoreAppsMetadata(locale: SiteLocale): Metadata {
  const copy = moreAppsCopy[locale];
  const canonical =
    locale === siteConfig.defaultLocale
      ? siteConfig.routes.moreApps
      : moreAppsLocalePaths[locale];

  const title = `${copy.title} | ${siteConfig.name}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title,
    description: copy.metaDescription,
    alternates: {
      canonical,
      languages: moreAppsLanguageAlternates,
    },
    robots: {
      index: true,
      follow: true,
    },
    ...createSocialMetadata({
      locale,
      path: canonical,
      title,
      description: copy.metaDescription,
    }),
  };
}
