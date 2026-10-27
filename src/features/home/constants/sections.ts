import { footerContactId, siteConfig } from "@/constants/site";
import type { SiteLocale } from "@/types/site";

// 홈 섹션 anchor id. 헤더 메뉴와 각 섹션이 같은 값을 쓴다.
export const homeSections = {
  products: "products",
  about: "about",
  contact: footerContactId,
} as const;

// 제품 섹션의 "모든 앱 보기"가 여는 언어별 앱 목록 경로.
export const moreAppsPaths: Record<SiteLocale, string> = {
  en: siteConfig.routes.moreApps,
  ko: siteConfig.routes.moreAppsKo,
  ja: siteConfig.routes.moreAppsJa,
};
