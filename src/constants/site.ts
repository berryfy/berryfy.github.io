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
