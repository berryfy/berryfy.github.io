import type { Metadata } from "next";

import { siteAssets } from "@/constants/assets";
import { localeDetails, siteConfig } from "@/constants/site";
import type { SiteLocale } from "@/types/site";

interface SocialMetadataOptions {
  locale: SiteLocale;
  path: string;
  title: string;
  description: string;
}

// 모든 페이지가 같은 공유 미리보기(OG·X 카드)를 갖도록 하는 공통 metadata 조각.
export function createSocialMetadata({
  locale,
  path,
  title,
  description,
}: SocialMetadataOptions): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: localeDetails[locale].openGraphLocale,
      url: path,
      title,
      description,
      images: [
        {
          url: siteAssets.socialPreview,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteAssets.socialPreview],
    },
  };
}
