import type { MetadataRoute } from "next";

import { homeLocalePaths, siteConfig } from "@/constants/site";

export const dynamic = "force-static";

type RouteKey = keyof typeof siteConfig.routes;

const absolute = (path: string) => `${siteConfig.url}${path}`;

// site.ts 라우트에서 기본(영어) 경로만 골라 한국어·일본어 대체 경로와 함께 싣는다.
// `…En` 경로는 기본 경로와 같은 내용의 호환 주소라 싣지 않는다.
// 개인정보처리방침(`…Privacy`)은 noindex 문서라 싣지 않는다.
const localizedEntries = (Object.keys(siteConfig.routes) as RouteKey[])
  .filter(
    (key) =>
      key !== "home" && !/(Ko|En|Ja)$/.test(key) && !key.endsWith("Privacy"),
  )
  .map((key) => {
    const routes = siteConfig.routes as Record<string, string>;
    return {
      url: absolute(routes[key]),
      alternates: {
        languages: {
          en: absolute(routes[key]),
          ko: absolute(routes[`${key}Ko`]),
          ja: absolute(routes[`${key}Ja`]),
        },
      },
    };
  })
  .flatMap((entry) => [
    entry,
    { url: entry.alternates.languages.ko, alternates: entry.alternates },
    { url: entry.alternates.languages.ja, alternates: entry.alternates },
  ]);

export default function sitemap(): MetadataRoute.Sitemap {
  const homeAlternates = {
    languages: {
      en: absolute(homeLocalePaths.en),
      ko: absolute(homeLocalePaths.ko),
      ja: absolute(homeLocalePaths.ja),
    },
  };

  return [
    { url: absolute(homeLocalePaths.en), alternates: homeAlternates },
    { url: absolute(homeLocalePaths.ko), alternates: homeAlternates },
    { url: absolute(homeLocalePaths.ja), alternates: homeAlternates },
    ...localizedEntries,
  ];
}
