import { siteConfig } from "@/constants/site";
import {
  swithPrivacyEn,
  swithPrivacyJa,
  swithPrivacy,
} from "@/features/legal/constants/swith-privacy";
import type {
  AppPrivacyPolicy,
  PrivacyLocale,
} from "@/features/legal/types/privacy-policy";

export const swithPrivacyLocalePaths: Record<PrivacyLocale, string> = {
  en: siteConfig.routes.swithPrivacy,
  ko: siteConfig.routes.swithPrivacyKo,
  ja: siteConfig.routes.swithPrivacyJa,
};

export const swithPrivacyPolicies: Record<PrivacyLocale, AppPrivacyPolicy> = {
  en: swithPrivacyEn,
  ko: swithPrivacy,
  ja: swithPrivacyJa,
};

export const swithPrivacyLanguageAlternates = {
  ...swithPrivacyLocalePaths,
  "x-default": swithPrivacyLocalePaths.en,
} as const;
