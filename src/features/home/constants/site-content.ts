import { siteConfig } from "@/constants/site";
import type { SiteCopy } from "@/features/home/types/home";
import type { SiteLocale } from "@/types/site";

// 홈 화면 문구. 영어 제목·슬로건은 번역하지 않고 설명만 각 언어로 쓴다.
export const siteCopy: Record<SiteLocale, SiteCopy> = {
  en: {
    products: {
      title: "Apps and games",
      game: "Small games for a short break.",
      tool: "Simple tools for the little moments in your day.",
      fandom: "A place for the artists you love, one app for each fandom.",
      countLabel: "{count} apps",
    },
    hero: {
      description: "Something new today. Something better tomorrow.",
    },
    about: {
      description:
        "Everything starts small, then keeps getting better, little by little.",
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
    products: {
      title: "앱과 게임",
      game: "잠깐 쉬어 갈 때 꺼내는 작은 게임.",
      tool: "하루 곳곳에서 손이 가는 간단한 도구.",
      fandom: "좋아하는 아티스트를 위한 공간, 팬덤마다 하나씩.",
      countLabel: "앱 {count}개",
    },
    hero: {
      description: "오늘도 새로운 걸 만들고, 어제 만든 건 조금 더 좋게.",
    },
    about: {
      description: "작게 시작해, 오래도록 조금씩 나아져요.",
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
    products: {
      title: "アプリとゲーム",
      game: "ひと息つきたいときの、小さなゲーム。",
      tool: "毎日のちょっとした場面で使える、シンプルな道具。",
      fandom: "推しのための場所を、ファンダムごとにひとつずつ。",
      countLabel: "{count}本のアプリ",
    },
    hero: {
      description: "今日も新しいものを。昨日のものは、少しだけ良く。",
    },
    about: {
      description: "小さく始めて、長く、少しずつ良くしていく。",
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
