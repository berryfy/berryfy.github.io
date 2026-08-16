import { siteConfig } from "@/constants/site";
import {
  neverlandPrivacyEn,
  neverlandPrivacyJa,
  neverlandPrivacy,
} from "@/features/legal/constants/neverland-privacy";
import type {
  AppPrivacyPolicy,
  PrivacyLocale,
} from "@/features/legal/types/privacy-policy";

export const neverlandPrivacyLocalePaths: Record<PrivacyLocale, string> = {
  en: siteConfig.routes.neverlandPrivacy,
  ko: siteConfig.routes.neverlandPrivacyKo,
  ja: siteConfig.routes.neverlandPrivacyJa,
};

export const neverlandPrivacyPolicies: Record<PrivacyLocale, AppPrivacyPolicy> =
  {
    en: neverlandPrivacyEn,
    ko: neverlandPrivacy,
    ja: neverlandPrivacyJa,
  };

export const neverlandPrivacyLanguageAlternates = {
  en: siteConfig.routes.neverlandPrivacy,
  ko: siteConfig.routes.neverlandPrivacyKo,
  ja: siteConfig.routes.neverlandPrivacyJa,
  "x-default": siteConfig.routes.neverlandPrivacy,
} as const;
