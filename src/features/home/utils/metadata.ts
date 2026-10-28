import type { Metadata } from "next";

import {
  languageAlternates,
  localeDetails,
  siteConfig,
  siteSlogan,
} from "@/constants/site";
import type { SiteCopy } from "@/features/home/types/home";
import { createSocialMetadata } from "@/lib/social-metadata";
import type { SiteLocale } from "@/types/site";

export function createHomeMetadata(
  locale: SiteLocale,
  copy: SiteCopy,
): Metadata {
  const title = `${siteConfig.name} — ${siteSlogan}`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: { absolute: title },
    description: copy.description,
    alternates: {
      canonical: localeDetails[locale].path,
      languages: languageAlternates,
    },
    ...createSocialMetadata({
      locale,
      path: localeDetails[locale].path,
      title,
      description: copy.description,
    }),
  };
}
