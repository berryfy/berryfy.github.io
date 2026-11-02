import { siteConfig } from "@/constants/site";
import type { SiteLocale } from "@/types/site";

// 정식 URL의 단일 원천은 site.ts. 과거에 배포한 접미어 주소만 호환 경로로 복원한다.
export const legacyMoreAppsTargets: Record<SiteLocale, string> = {
  en: siteConfig.routes.moreAppsEn,
  ko: siteConfig.routes.moreAppsKo,
  ja: siteConfig.routes.moreAppsJa,
};

const privacyRoutes = Object.entries(siteConfig.routes).filter(([key]) =>
  key.endsWith("Privacy"),
);
export const legacyPrivacyTargets: Record<
  string,
  Record<SiteLocale, string>
> = Object.fromEntries(
  privacyRoutes.map(([key, base]) => {
    const routes = siteConfig.routes as Record<string, string>;
    const slug = base.split("/")[2];
    return [
      slug,
      {
        en: routes[`${key}En`],
        ko: routes[`${key}Ko`],
        ja: routes[`${key}Ja`],
      },
    ];
  }),
);
// EYECONS의 초기 앱 slug도 기존 공개 링크이므로 같은 정식 정책으로 연결한다.
legacyPrivacyTargets.eyecons = legacyPrivacyTargets["eyecons-stan"];

export const legacyRedirectCopy = {
  en: { message: "This page has moved.", link: "Continue to the new page" },
  ko: { message: "페이지 주소가 바뀌었어요.", link: "새 페이지로 이동" },
  ja: { message: "ページのアドレスが変わりました。", link: "新しいページへ" },
} as const;
