import { siteConfig } from "@/constants/site";
import type { SiteCopy } from "@/features/home/types/home";
import type { SiteLocale } from "@/types/site";

// 홈 화면은 새로 설계 중이다. 지금은 검색·공유 metadata 문구만 둔다.
export const siteCopy: Record<SiteLocale, SiteCopy> = {
  en: {
    tagline: "Small apps. Bright moments.",
    description: `Play for a moment, find your focus, or make something your own. ${siteConfig.name} creates ${siteConfig.platform} apps that are easy to enjoy and easy to keep.`,
  },
  ko: {
    tagline: "작은 앱으로, 더 빛나는 순간.",
    description: `잠깐 즐기고 싶을 때, 집중하고 싶을 때, 나만의 무언가를 만들고 싶을 때. ${siteConfig.name}는 쉽고 기분 좋은 ${siteConfig.platform} 앱을 만듭니다.`,
  },
  ja: {
    tagline: "小さなアプリで、毎日にきらめきを。",
    description: `少し遊びたいとき、集中したいとき、自分らしく何かをつくりたいとき。${siteConfig.name}は、すぐに楽しめて長く使いたくなる${siteConfig.platform}アプリをつくります。`,
  },
};
