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
    fearnotPrivacy: "/apps/fearnot-stan/privacy/",
    fearnotPrivacyKo: "/apps/fearnot-stan/privacy/ko/",
    fearnotPrivacyEn: "/apps/fearnot-stan/privacy/en/",
    fearnotPrivacyJa: "/apps/fearnot-stan/privacy/ja/",
    ouriiPrivacy: "/apps/ourii-stan/privacy/",
    ouriiPrivacyKo: "/apps/ourii-stan/privacy/ko/",
    ouriiPrivacyEn: "/apps/ourii-stan/privacy/en/",
    ouriiPrivacyJa: "/apps/ourii-stan/privacy/ja/",
    engenePrivacy: "/apps/engene-stan/privacy/",
    engenePrivacyKo: "/apps/engene-stan/privacy/ko/",
    engenePrivacyEn: "/apps/engene-stan/privacy/en/",
    engenePrivacyJa: "/apps/engene-stan/privacy/ja/",
    oncePrivacy: "/apps/once-stan/privacy/",
    oncePrivacyKo: "/apps/once-stan/privacy/ko/",
    oncePrivacyEn: "/apps/once-stan/privacy/en/",
    oncePrivacyJa: "/apps/once-stan/privacy/ja/",
    atinyPrivacy: "/apps/atiny-stan/privacy/",
    atinyPrivacyKo: "/apps/atiny-stan/privacy/ko/",
    atinyPrivacyEn: "/apps/atiny-stan/privacy/en/",
    atinyPrivacyJa: "/apps/atiny-stan/privacy/ja/",
    myPrivacy: "/apps/my-stan/privacy/",
    myPrivacyKo: "/apps/my-stan/privacy/ko/",
    myPrivacyEn: "/apps/my-stan/privacy/en/",
    myPrivacyJa: "/apps/my-stan/privacy/ja/",
    s2uPrivacy: "/apps/s2u-stan/privacy/",
    s2uPrivacyKo: "/apps/s2u-stan/privacy/ko/",
    s2uPrivacyEn: "/apps/s2u-stan/privacy/en/",
    s2uPrivacyJa: "/apps/s2u-stan/privacy/ja/",
    divePrivacy: "/apps/dive-stan/privacy/",
    divePrivacyKo: "/apps/dive-stan/privacy/ko/",
    divePrivacyEn: "/apps/dive-stan/privacy/en/",
    divePrivacyJa: "/apps/dive-stan/privacy/ja/",
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
