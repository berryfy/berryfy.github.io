import type { SiteLocale } from "@/types/site";

export const siteConfig = {
  name: "Berryfy",
  url: "https://berryfy.github.io",
  platform: "Android",
  copyrightNotice: "All rights reserved.",
  defaultLocale: "en" satisfies SiteLocale,
  routes: {
    home: "/",
    moreApps: "/more-apps/",
    moreAppsKo: "/more-apps/ko/",
    moreAppsEn: "/more-apps/en/",
    moreAppsJa: "/more-apps/ja/",
    eyeconsPrivacy: "/apps/eyecons-stan/privacy/",
    eyeconsPrivacyKo: "/apps/eyecons-stan/privacy/ko/",
    eyeconsPrivacyEn: "/apps/eyecons-stan/privacy/en/",
    eyeconsPrivacyJa: "/apps/eyecons-stan/privacy/ja/",
    blinkPrivacy: "/apps/blink-stan/privacy/",
    blinkPrivacyKo: "/apps/blink-stan/privacy/ko/",
    blinkPrivacyEn: "/apps/blink-stan/privacy/en/",
    blinkPrivacyJa: "/apps/blink-stan/privacy/ja/",
    stayPrivacy: "/apps/stay-stan/privacy/",
    stayPrivacyKo: "/apps/stay-stan/privacy/ko/",
    stayPrivacyEn: "/apps/stay-stan/privacy/en/",
    stayPrivacyJa: "/apps/stay-stan/privacy/ja/",
    gllitPrivacy: "/apps/gllit-stan/privacy/",
    gllitPrivacyKo: "/apps/gllit-stan/privacy/ko/",
    gllitPrivacyEn: "/apps/gllit-stan/privacy/en/",
    gllitPrivacyJa: "/apps/gllit-stan/privacy/ja/",
    monstiezPrivacy: "/apps/monstiez-stan/privacy/",
    monstiezPrivacyKo: "/apps/monstiez-stan/privacy/ko/",
    monstiezPrivacyEn: "/apps/monstiez-stan/privacy/en/",
    monstiezPrivacyJa: "/apps/monstiez-stan/privacy/ja/",
  },
} as const;

export const siteLocales = [
  "en",
  "ko",
  "ja",
] as const satisfies readonly SiteLocale[];

export const localeDetails: Record<
  SiteLocale,
  {
    label: string;
    shortLabel: string;
    path: string;
    openGraphLocale: string;
  }
> = {
  en: {
    label: "English",
    shortLabel: "EN",
    path: siteConfig.routes.home,
    openGraphLocale: "en_US",
  },
  ko: {
    label: "한국어",
    shortLabel: "KO",
    path: "/ko/",
    openGraphLocale: "ko_KR",
  },
  ja: {
    label: "日本語",
    shortLabel: "JA",
    path: "/ja/",
    openGraphLocale: "ja_JP",
  },
};

export const languageAlternates = {
  en: localeDetails.en.path,
  ko: localeDetails.ko.path,
  ja: localeDetails.ja.path,
  "x-default": localeDetails[siteConfig.defaultLocale].path,
} as const;

export const homeLocalePaths: Record<SiteLocale, string> = {
  en: localeDetails.en.path,
  ko: localeDetails.ko.path,
  ja: localeDetails.ja.path,
};

export const languageSwitcherLabels: Record<SiteLocale, string> = {
  en: "Choose language",
  ko: "언어 선택",
  ja: "言語を選択",
};
