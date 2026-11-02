import { localizedRoutes, siteConfig } from "@/constants/site";
import type { SiteLocale } from "@/types/site";

// 정식 URL의 단일 원천은 site.ts. 과거에 배포한 접미어 주소만 호환 경로로 복원한다.
export const legacyMoreAppsTargets: Record<SiteLocale, string> = {
  en: siteConfig.routes.moreAppsEn,
  ko: siteConfig.routes.moreAppsKo,
  ja: siteConfig.routes.moreAppsJa,
};

const compatibilityPaths = (route: {
  paths: Record<SiteLocale, string>;
  englishAlias: string;
}) => ({ ...route.paths, en: route.englishAlias });

export const legacyPrivacyTargets = {
  "potion-sort-quest": compatibilityPaths(localizedRoutes.potionPrivacy),
  "eyecons-stan": compatibilityPaths(localizedRoutes.eyeconsPrivacy),
  "blink-stan": compatibilityPaths(localizedRoutes.blinkPrivacy),
  "stay-stan": compatibilityPaths(localizedRoutes.stayPrivacy),
  "gllit-stan": compatibilityPaths(localizedRoutes.gllitPrivacy),
  "monstiez-stan": compatibilityPaths(localizedRoutes.monstiezPrivacy),
  "fearnot-stan": compatibilityPaths(localizedRoutes.fearnotPrivacy),
  "ourii-stan": compatibilityPaths(localizedRoutes.ouriiPrivacy),
  "engene-stan": compatibilityPaths(localizedRoutes.engenePrivacy),
  "once-stan": compatibilityPaths(localizedRoutes.oncePrivacy),
  "atiny-stan": compatibilityPaths(localizedRoutes.atinyPrivacy),
  "my-stan": compatibilityPaths(localizedRoutes.myPrivacy),
  "s2u-stan": compatibilityPaths(localizedRoutes.s2uPrivacy),
  "dive-stan": compatibilityPaths(localizedRoutes.divePrivacy),
  "carat-stan": compatibilityPaths(localizedRoutes.caratPrivacy),
  "midzy-stan": compatibilityPaths(localizedRoutes.midzyPrivacy),
  "moa-stan": compatibilityPaths(localizedRoutes.moaPrivacy),
  "neverland-stan": compatibilityPaths(localizedRoutes.neverlandPrivacy),
  "swith-stan": compatibilityPaths(localizedRoutes.swithPrivacy),
  "pawmpawm-stan": compatibilityPaths(localizedRoutes.pawmpawmPrivacy),
  "bawige-stan": compatibilityPaths(localizedRoutes.bawigePrivacy),
  "nswer-stan": compatibilityPaths(localizedRoutes.nswerPrivacy),
  eyecons: compatibilityPaths(localizedRoutes.eyeconsPrivacy),
} as const satisfies Record<string, Record<SiteLocale, string>>;

export const legacyRedirectCopy = {
  en: { message: "This page has moved.", link: "Continue to the new page" },
  ko: { message: "페이지 주소가 바뀌었어요.", link: "새 페이지로 이동" },
  ja: { message: "ページのアドレスが変わりました。", link: "新しいページへ" },
} as const;
