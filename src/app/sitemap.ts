import type { MetadataRoute } from "next";
import { localizedRoutes, siteConfig } from "@/constants/site";

export const dynamic = "force-static";
const absolute = (path: string) => `${siteConfig.url}${path}`;

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(localizedRoutes)
    .filter((route) => route.indexable)
    .flatMap(({ paths }) => {
      const languages = {
        en: absolute(paths.en),
        ko: absolute(paths.ko),
        ja: absolute(paths.ja),
      };
      return Object.values(languages).map((url) => ({
        url,
        alternates: { languages },
      }));
    });
}
