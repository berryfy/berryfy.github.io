import { siteConfig } from "@/constants/site";

// 전역 404는 기본 언어인 영어만 쓴다.
export const notFoundCopy = {
  code: "404",
  title: "Page not found.",
  description:
    "The link may be out of date, or the page may have moved. Let's head back home.",
  action: "Back to home",
  homePath: siteConfig.routes.home,
} as const;
