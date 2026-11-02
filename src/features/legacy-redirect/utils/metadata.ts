import type { Metadata } from "next";
import { siteConfig } from "@/constants/site";
import { legacyRedirectCopy } from "@/features/legacy-redirect/constants/targets";
import { createSocialMetadata } from "@/lib/social-metadata";
import type { SiteLocale } from "@/types/site";

export const createLegacyRedirectMetadata = (
  target: string,
  locale: SiteLocale,
): Metadata => {
  const base = target.replace(/^\/(en|ko|ja)\//, "/");
  return {
    metadataBase: new URL(siteConfig.url),
    title: legacyRedirectCopy[locale].message,
    robots: { index: false, follow: false },
    alternates: {
      canonical: base,
      languages: {
        en: base,
        ko: `/ko${base}`,
        ja: `/ja${base}`,
        "x-default": base,
      },
    },
    ...createSocialMetadata({
      locale,
      path: target,
      title: legacyRedirectCopy[locale].message,
      description: legacyRedirectCopy[locale].link,
    }),
  };
};
