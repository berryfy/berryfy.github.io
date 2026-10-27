import { siteConfig } from "@/constants/site";
import type { SiteCopy } from "@/features/home/types/home";
import type { SiteLocale } from "@/types/site";

// 홈 화면 문구. 영어 제목·슬로건은 번역하지 않고 설명만 각 언어로 쓴다.
export const siteCopy: Record<SiteLocale, SiteCopy> = {
  en: {
    about: {
      description:
        "We start many things light, and keep growing the ones people love — for as long as they love them.",
    },
    navigationLabel: "Main menu",
    navigation: {
      products: "Products",
      about: "About",
      contact: "Contact",
    },
    description: `Play for a moment, find your focus, or make something your own. ${siteConfig.name} creates ${siteConfig.platform} apps that are easy to enjoy and easy to keep.`,
  },
  ko: {
    about: {
      description:
        "가볍게 많이 시작하고, 사랑받는 것은 오래 키웁니다. 그리고 이 일을 꾸준히 이어 갑니다.",
    },
    navigationLabel: "주요 메뉴",
    navigation: {
      products: "제품",
      about: "소개",
      contact: "문의",
    },
    description: `잠깐 즐기고 싶을 때, 집중하고 싶을 때, 나만의 무언가를 만들고 싶을 때. ${siteConfig.name}는 쉽고 기분 좋은 ${siteConfig.platform} 앱을 만듭니다.`,
  },
  ja: {
    about: {
      description:
        "たくさんの小さな始まりから、愛されるものを長く育てていきます。そしてそれを、続けていきます。",
    },
    navigationLabel: "メインメニュー",
    navigation: {
      products: "プロダクト",
      about: "私たちについて",
      contact: "お問い合わせ",
    },
    description: `少し遊びたいとき、集中したいとき、自分らしく何かをつくりたいとき。${siteConfig.name}は、すぐに楽しめて長く使いたくなる${siteConfig.platform}アプリをつくります。`,
  },
};
