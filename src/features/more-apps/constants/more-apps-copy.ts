import { siteConfig } from "@/constants/site";
import type { MoreAppsPageCopy } from "@/features/more-apps/types/more-apps";
import type { SiteLocale } from "@/types/site";

export const moreAppsLocales = ["en", "ko", "ja"] as const;

export const moreAppsLocaleDetails: Record<
  SiteLocale,
  { label: string; path: string }
> = {
  en: { label: "EN", path: siteConfig.routes.moreApps },
  ko: { label: "KO", path: siteConfig.routes.moreAppsKo },
  ja: { label: "JA", path: siteConfig.routes.moreAppsJa },
};

export const moreAppsCopy: Record<SiteLocale, MoreAppsPageCopy> = {
  en: {
    languageNavigationLabel: "Choose language",
    eyebrow: "Made by berryfy",
    title: "More apps to enjoy",
    description:
      "Simple tools and games made for everyday moments. Find something new for your Android device.",
    appActionLabel: "View on Google Play",
    storeActionLabel: "See every app on Google Play",
    availabilityNote: "Availability may vary by country or device.",
  },
  ko: {
    languageNavigationLabel: "언어 선택",
    eyebrow: "berryfy가 만든 앱",
    title: "다른 앱도 만나보세요",
    description:
      "일상의 작은 순간을 위한 도구와 게임을 만듭니다. Android에서 새로운 앱을 찾아보세요.",
    appActionLabel: "Google Play에서 보기",
    storeActionLabel: "Google Play에서 모든 앱 보기",
    availabilityNote: "국가나 기기에 따라 일부 앱이 표시되지 않을 수 있습니다.",
  },
  ja: {
    languageNavigationLabel: "言語を選択",
    eyebrow: "berryfyのアプリ",
    title: "ほかのアプリもどうぞ",
    description:
      "毎日の小さな時間に寄り添うツールとゲーム。Androidで新しいアプリを見つけてください。",
    appActionLabel: "Google Playで見る",
    storeActionLabel: "Google Playですべてのアプリを見る",
    availabilityNote: "国や端末によって利用できないアプリがあります。",
  },
};

export const moreAppsLanguageAlternates = {
  en: siteConfig.routes.moreApps,
  ko: siteConfig.routes.moreAppsKo,
  ja: siteConfig.routes.moreAppsJa,
  "x-default": siteConfig.routes.moreApps,
} as const;
