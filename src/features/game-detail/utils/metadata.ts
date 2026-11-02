import type { Metadata } from "next";
import { featuredGames } from "@/constants/games";
import { gameLocalePaths, siteConfig } from "@/constants/site";
import { gameDetailCopy } from "@/features/game-detail/constants/content";
import { createSocialMetadata } from "@/lib/social-metadata";
import type { SiteLocale } from "@/types/site";
export const createGameMetadata = (locale: SiteLocale): Metadata => {
  const title = `${featuredGames[0].name} | ${siteConfig.name}`;
  const description = gameDetailCopy[locale].intro;
  return {
    metadataBase: new URL(siteConfig.url),
    title: { absolute: title },
    description,
    alternates: {
      canonical: gameLocalePaths[locale],
      languages: { ...gameLocalePaths, "x-default": gameLocalePaths.en },
    },
    ...createSocialMetadata({
      locale,
      path: gameLocalePaths[locale],
      title,
      description,
    }),
  };
};
