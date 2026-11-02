import type { SiteLocale } from "@/types/site";

interface LocalizedRoute {
  paths: Record<SiteLocale, string>;
  englishAlias?: string;
  indexable: boolean;
}

// 공개 URL과 언어별 경로의 단일 정의. 기존 flat 키는 호환용으로 유지한다.
export const localizedRoutes = {
  home: {
    paths: { en: "/", ko: "/ko/", ja: "/ja/" },
    indexable: true,
  },
  lulusPotionShop: {
    paths: {
      en: "/games/lulus-potion-shop/",
      ko: "/ko/games/lulus-potion-shop/",
      ja: "/ja/games/lulus-potion-shop/",
    },
    indexable: true,
  },
  potionPrivacy: {
    paths: {
      en: "/apps/potion-sort-quest/privacy/",
      ko: "/ko/apps/potion-sort-quest/privacy/",
      ja: "/ja/apps/potion-sort-quest/privacy/",
    },
    englishAlias: "/en/apps/potion-sort-quest/privacy/",
    indexable: false,
  },
  moreApps: {
    paths: { en: "/more-apps/", ko: "/ko/more-apps/", ja: "/ja/more-apps/" },
    englishAlias: "/en/more-apps/",
    indexable: true,
  },
  eyeconsPrivacy: {
    paths: {
      en: "/apps/eyecons-stan/privacy/",
      ko: "/ko/apps/eyecons-stan/privacy/",
      ja: "/ja/apps/eyecons-stan/privacy/",
    },
    englishAlias: "/en/apps/eyecons-stan/privacy/",
    indexable: false,
  },
  blinkPrivacy: {
    paths: {
      en: "/apps/blink-stan/privacy/",
      ko: "/ko/apps/blink-stan/privacy/",
      ja: "/ja/apps/blink-stan/privacy/",
    },
    englishAlias: "/en/apps/blink-stan/privacy/",
    indexable: false,
  },
  stayPrivacy: {
    paths: {
      en: "/apps/stay-stan/privacy/",
      ko: "/ko/apps/stay-stan/privacy/",
      ja: "/ja/apps/stay-stan/privacy/",
    },
    englishAlias: "/en/apps/stay-stan/privacy/",
    indexable: false,
  },
  gllitPrivacy: {
    paths: {
      en: "/apps/gllit-stan/privacy/",
      ko: "/ko/apps/gllit-stan/privacy/",
      ja: "/ja/apps/gllit-stan/privacy/",
    },
    englishAlias: "/en/apps/gllit-stan/privacy/",
    indexable: false,
  },
  monstiezPrivacy: {
    paths: {
      en: "/apps/monstiez-stan/privacy/",
      ko: "/ko/apps/monstiez-stan/privacy/",
      ja: "/ja/apps/monstiez-stan/privacy/",
    },
    englishAlias: "/en/apps/monstiez-stan/privacy/",
    indexable: false,
  },
  fearnotPrivacy: {
    paths: {
      en: "/apps/fearnot-stan/privacy/",
      ko: "/ko/apps/fearnot-stan/privacy/",
      ja: "/ja/apps/fearnot-stan/privacy/",
    },
    englishAlias: "/en/apps/fearnot-stan/privacy/",
    indexable: false,
  },
  ouriiPrivacy: {
    paths: {
      en: "/apps/ourii-stan/privacy/",
      ko: "/ko/apps/ourii-stan/privacy/",
      ja: "/ja/apps/ourii-stan/privacy/",
    },
    englishAlias: "/en/apps/ourii-stan/privacy/",
    indexable: false,
  },
  engenePrivacy: {
    paths: {
      en: "/apps/engene-stan/privacy/",
      ko: "/ko/apps/engene-stan/privacy/",
      ja: "/ja/apps/engene-stan/privacy/",
    },
    englishAlias: "/en/apps/engene-stan/privacy/",
    indexable: false,
  },
  oncePrivacy: {
    paths: {
      en: "/apps/once-stan/privacy/",
      ko: "/ko/apps/once-stan/privacy/",
      ja: "/ja/apps/once-stan/privacy/",
    },
    englishAlias: "/en/apps/once-stan/privacy/",
    indexable: false,
  },
  atinyPrivacy: {
    paths: {
      en: "/apps/atiny-stan/privacy/",
      ko: "/ko/apps/atiny-stan/privacy/",
      ja: "/ja/apps/atiny-stan/privacy/",
    },
    englishAlias: "/en/apps/atiny-stan/privacy/",
    indexable: false,
  },
  myPrivacy: {
    paths: {
      en: "/apps/my-stan/privacy/",
      ko: "/ko/apps/my-stan/privacy/",
      ja: "/ja/apps/my-stan/privacy/",
    },
    englishAlias: "/en/apps/my-stan/privacy/",
    indexable: false,
  },
  s2uPrivacy: {
    paths: {
      en: "/apps/s2u-stan/privacy/",
      ko: "/ko/apps/s2u-stan/privacy/",
      ja: "/ja/apps/s2u-stan/privacy/",
    },
    englishAlias: "/en/apps/s2u-stan/privacy/",
    indexable: false,
  },
  divePrivacy: {
    paths: {
      en: "/apps/dive-stan/privacy/",
      ko: "/ko/apps/dive-stan/privacy/",
      ja: "/ja/apps/dive-stan/privacy/",
    },
    englishAlias: "/en/apps/dive-stan/privacy/",
    indexable: false,
  },
  caratPrivacy: {
    paths: {
      en: "/apps/carat-stan/privacy/",
      ko: "/ko/apps/carat-stan/privacy/",
      ja: "/ja/apps/carat-stan/privacy/",
    },
    englishAlias: "/en/apps/carat-stan/privacy/",
    indexable: false,
  },
  midzyPrivacy: {
    paths: {
      en: "/apps/midzy-stan/privacy/",
      ko: "/ko/apps/midzy-stan/privacy/",
      ja: "/ja/apps/midzy-stan/privacy/",
    },
    englishAlias: "/en/apps/midzy-stan/privacy/",
    indexable: false,
  },
  moaPrivacy: {
    paths: {
      en: "/apps/moa-stan/privacy/",
      ko: "/ko/apps/moa-stan/privacy/",
      ja: "/ja/apps/moa-stan/privacy/",
    },
    englishAlias: "/en/apps/moa-stan/privacy/",
    indexable: false,
  },
  neverlandPrivacy: {
    paths: {
      en: "/apps/neverland-stan/privacy/",
      ko: "/ko/apps/neverland-stan/privacy/",
      ja: "/ja/apps/neverland-stan/privacy/",
    },
    englishAlias: "/en/apps/neverland-stan/privacy/",
    indexable: false,
  },
  swithPrivacy: {
    paths: {
      en: "/apps/swith-stan/privacy/",
      ko: "/ko/apps/swith-stan/privacy/",
      ja: "/ja/apps/swith-stan/privacy/",
    },
    englishAlias: "/en/apps/swith-stan/privacy/",
    indexable: false,
  },
  pawmpawmPrivacy: {
    paths: {
      en: "/apps/pawmpawm-stan/privacy/",
      ko: "/ko/apps/pawmpawm-stan/privacy/",
      ja: "/ja/apps/pawmpawm-stan/privacy/",
    },
    englishAlias: "/en/apps/pawmpawm-stan/privacy/",
    indexable: false,
  },
  bawigePrivacy: {
    paths: {
      en: "/apps/bawige-stan/privacy/",
      ko: "/ko/apps/bawige-stan/privacy/",
      ja: "/ja/apps/bawige-stan/privacy/",
    },
    englishAlias: "/en/apps/bawige-stan/privacy/",
    indexable: false,
  },
  nswerPrivacy: {
    paths: {
      en: "/apps/nswer-stan/privacy/",
      ko: "/ko/apps/nswer-stan/privacy/",
      ja: "/ja/apps/nswer-stan/privacy/",
    },
    englishAlias: "/en/apps/nswer-stan/privacy/",
    indexable: false,
  },
} as const satisfies Record<string, LocalizedRoute>;

export const siteConfig = {
  name: "Berryfy",
  url: "https://berryfy.github.io",
  platform: "Android",
  defaultLocale: "en" satisfies SiteLocale,
  routes: {
    home: localizedRoutes.home.paths.en,
    lulusPotionShop: localizedRoutes.lulusPotionShop.paths.en,
    lulusPotionShopKo: localizedRoutes.lulusPotionShop.paths.ko,
    lulusPotionShopJa: localizedRoutes.lulusPotionShop.paths.ja,
    potionPrivacy: localizedRoutes.potionPrivacy.paths.en,
    potionPrivacyKo: localizedRoutes.potionPrivacy.paths.ko,
    potionPrivacyEn: localizedRoutes.potionPrivacy.englishAlias,
    potionPrivacyJa: localizedRoutes.potionPrivacy.paths.ja,
    moreApps: localizedRoutes.moreApps.paths.en,
    moreAppsKo: localizedRoutes.moreApps.paths.ko,
    moreAppsEn: localizedRoutes.moreApps.englishAlias,
    moreAppsJa: localizedRoutes.moreApps.paths.ja,
    eyeconsPrivacy: localizedRoutes.eyeconsPrivacy.paths.en,
    eyeconsPrivacyKo: localizedRoutes.eyeconsPrivacy.paths.ko,
    eyeconsPrivacyEn: localizedRoutes.eyeconsPrivacy.englishAlias,
    eyeconsPrivacyJa: localizedRoutes.eyeconsPrivacy.paths.ja,
    blinkPrivacy: localizedRoutes.blinkPrivacy.paths.en,
    blinkPrivacyKo: localizedRoutes.blinkPrivacy.paths.ko,
    blinkPrivacyEn: localizedRoutes.blinkPrivacy.englishAlias,
    blinkPrivacyJa: localizedRoutes.blinkPrivacy.paths.ja,
    stayPrivacy: localizedRoutes.stayPrivacy.paths.en,
    stayPrivacyKo: localizedRoutes.stayPrivacy.paths.ko,
    stayPrivacyEn: localizedRoutes.stayPrivacy.englishAlias,
    stayPrivacyJa: localizedRoutes.stayPrivacy.paths.ja,
    gllitPrivacy: localizedRoutes.gllitPrivacy.paths.en,
    gllitPrivacyKo: localizedRoutes.gllitPrivacy.paths.ko,
    gllitPrivacyEn: localizedRoutes.gllitPrivacy.englishAlias,
    gllitPrivacyJa: localizedRoutes.gllitPrivacy.paths.ja,
    monstiezPrivacy: localizedRoutes.monstiezPrivacy.paths.en,
    monstiezPrivacyKo: localizedRoutes.monstiezPrivacy.paths.ko,
    monstiezPrivacyEn: localizedRoutes.monstiezPrivacy.englishAlias,
    monstiezPrivacyJa: localizedRoutes.monstiezPrivacy.paths.ja,
    fearnotPrivacy: localizedRoutes.fearnotPrivacy.paths.en,
    fearnotPrivacyKo: localizedRoutes.fearnotPrivacy.paths.ko,
    fearnotPrivacyEn: localizedRoutes.fearnotPrivacy.englishAlias,
    fearnotPrivacyJa: localizedRoutes.fearnotPrivacy.paths.ja,
    ouriiPrivacy: localizedRoutes.ouriiPrivacy.paths.en,
    ouriiPrivacyKo: localizedRoutes.ouriiPrivacy.paths.ko,
    ouriiPrivacyEn: localizedRoutes.ouriiPrivacy.englishAlias,
    ouriiPrivacyJa: localizedRoutes.ouriiPrivacy.paths.ja,
    engenePrivacy: localizedRoutes.engenePrivacy.paths.en,
    engenePrivacyKo: localizedRoutes.engenePrivacy.paths.ko,
    engenePrivacyEn: localizedRoutes.engenePrivacy.englishAlias,
    engenePrivacyJa: localizedRoutes.engenePrivacy.paths.ja,
    oncePrivacy: localizedRoutes.oncePrivacy.paths.en,
    oncePrivacyKo: localizedRoutes.oncePrivacy.paths.ko,
    oncePrivacyEn: localizedRoutes.oncePrivacy.englishAlias,
    oncePrivacyJa: localizedRoutes.oncePrivacy.paths.ja,
    atinyPrivacy: localizedRoutes.atinyPrivacy.paths.en,
    atinyPrivacyKo: localizedRoutes.atinyPrivacy.paths.ko,
    atinyPrivacyEn: localizedRoutes.atinyPrivacy.englishAlias,
    atinyPrivacyJa: localizedRoutes.atinyPrivacy.paths.ja,
    myPrivacy: localizedRoutes.myPrivacy.paths.en,
    myPrivacyKo: localizedRoutes.myPrivacy.paths.ko,
    myPrivacyEn: localizedRoutes.myPrivacy.englishAlias,
    myPrivacyJa: localizedRoutes.myPrivacy.paths.ja,
    s2uPrivacy: localizedRoutes.s2uPrivacy.paths.en,
    s2uPrivacyKo: localizedRoutes.s2uPrivacy.paths.ko,
    s2uPrivacyEn: localizedRoutes.s2uPrivacy.englishAlias,
    s2uPrivacyJa: localizedRoutes.s2uPrivacy.paths.ja,
    divePrivacy: localizedRoutes.divePrivacy.paths.en,
    divePrivacyKo: localizedRoutes.divePrivacy.paths.ko,
    divePrivacyEn: localizedRoutes.divePrivacy.englishAlias,
    divePrivacyJa: localizedRoutes.divePrivacy.paths.ja,
    caratPrivacy: localizedRoutes.caratPrivacy.paths.en,
    caratPrivacyKo: localizedRoutes.caratPrivacy.paths.ko,
    caratPrivacyEn: localizedRoutes.caratPrivacy.englishAlias,
    caratPrivacyJa: localizedRoutes.caratPrivacy.paths.ja,
    midzyPrivacy: localizedRoutes.midzyPrivacy.paths.en,
    midzyPrivacyKo: localizedRoutes.midzyPrivacy.paths.ko,
    midzyPrivacyEn: localizedRoutes.midzyPrivacy.englishAlias,
    midzyPrivacyJa: localizedRoutes.midzyPrivacy.paths.ja,
    moaPrivacy: localizedRoutes.moaPrivacy.paths.en,
    moaPrivacyKo: localizedRoutes.moaPrivacy.paths.ko,
    moaPrivacyEn: localizedRoutes.moaPrivacy.englishAlias,
    moaPrivacyJa: localizedRoutes.moaPrivacy.paths.ja,
    neverlandPrivacy: localizedRoutes.neverlandPrivacy.paths.en,
    neverlandPrivacyKo: localizedRoutes.neverlandPrivacy.paths.ko,
    neverlandPrivacyEn: localizedRoutes.neverlandPrivacy.englishAlias,
    neverlandPrivacyJa: localizedRoutes.neverlandPrivacy.paths.ja,
    swithPrivacy: localizedRoutes.swithPrivacy.paths.en,
    swithPrivacyKo: localizedRoutes.swithPrivacy.paths.ko,
    swithPrivacyEn: localizedRoutes.swithPrivacy.englishAlias,
    swithPrivacyJa: localizedRoutes.swithPrivacy.paths.ja,
    pawmpawmPrivacy: localizedRoutes.pawmpawmPrivacy.paths.en,
    pawmpawmPrivacyKo: localizedRoutes.pawmpawmPrivacy.paths.ko,
    pawmpawmPrivacyEn: localizedRoutes.pawmpawmPrivacy.englishAlias,
    pawmpawmPrivacyJa: localizedRoutes.pawmpawmPrivacy.paths.ja,
    bawigePrivacy: localizedRoutes.bawigePrivacy.paths.en,
    bawigePrivacyKo: localizedRoutes.bawigePrivacy.paths.ko,
    bawigePrivacyEn: localizedRoutes.bawigePrivacy.englishAlias,
    bawigePrivacyJa: localizedRoutes.bawigePrivacy.paths.ja,
    nswerPrivacy: localizedRoutes.nswerPrivacy.paths.en,
    nswerPrivacyKo: localizedRoutes.nswerPrivacy.paths.ko,
    nswerPrivacyEn: localizedRoutes.nswerPrivacy.englishAlias,
    nswerPrivacyJa: localizedRoutes.nswerPrivacy.paths.ja,
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

// 브랜드 슬로건. 모든 언어에서 영어 원문 그대로 쓰고, 슬로건 안에는 브랜드 이름을 넣지 않는다.
export const siteSlogan = "New often. Better always.";

export const skipLinkLabels: Record<SiteLocale, string> = {
  en: "Skip to content",
  ko: "본문으로 건너뛰기",
  ja: "本文へスキップ",
};

export const menuLabels: Record<SiteLocale, { open: string; close: string }> = {
  en: { open: "Open menu", close: "Close menu" },
  ko: { open: "메뉴 열기", close: "메뉴 닫기" },
  ja: { open: "メニューを開く", close: "メニューを閉じる" },
};

// 푸터 문의 영역 id. 헤더의 "문의" 메뉴가 여기로 이동한다.
export const footerContactId = "contact";

// 모든 페이지의 본문 `<main>`에 붙이는 id. 건너뛰기 링크가 여기로 이동한다.
export const mainContentId = "main";

export const footerLabels: Record<
  SiteLocale,
  { contact: string; language: string }
> = {
  en: {
    contact: "Contact",
    language: "Language",
  },
  ko: {
    contact: "문의",
    language: "언어",
  },
  ja: {
    contact: "お問い合わせ",
    language: "言語",
  },
};

export const gameLocalePaths: Record<SiteLocale, string> = {
  en: siteConfig.routes.lulusPotionShop,
  ko: siteConfig.routes.lulusPotionShopKo,
  ja: siteConfig.routes.lulusPotionShopJa,
};

export const potionPrivacyPaths: Record<SiteLocale, string> = {
  en: siteConfig.routes.potionPrivacy,
  ko: siteConfig.routes.potionPrivacyKo,
  ja: siteConfig.routes.potionPrivacyJa,
};
