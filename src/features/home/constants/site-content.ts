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
      viewAll: "See all apps",
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
    description:
      "berryfy is a studio making games, everyday tools and fan apps. We release new apps often and keep improving the ones we've made.",
  },
  ko: {
    products: {
      title: "앱과 게임",
      game: "잠깐 쉬어 갈 때 꺼내는 작은 게임.",
      tool: "하루 곳곳에서 손이 가는 간단한 도구.",
      fandom: "좋아하는 아티스트를 위한 공간, 팬덤마다 하나씩.",
      viewAll: "모든 앱 보기",
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
    description:
      "berryfy는 게임과 일상 도구, 팬 앱을 만드는 스튜디오예요. 새 앱을 자주 내고, 만든 앱은 계속 다듬어요.",
  },
  ja: {
    products: {
      title: "アプリとゲーム",
      game: "ひと息つきたいときの、小さなゲーム。",
      tool: "毎日のちょっとした場面で使える、シンプルな道具。",
      fandom: "推しのための場所を、ファンダムごとにひとつずつ。",
      viewAll: "すべてのアプリを見る",
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
    description:
      "berryfyは、ゲームや毎日の道具、ファンアプリをつくるスタジオです。新しいアプリをこまめに届け、つくったアプリは少しずつ良くしていきます。",
  },
};
