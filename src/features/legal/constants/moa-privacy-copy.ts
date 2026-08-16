import { siteConfig } from "@/constants/site";
import {
  moaPrivacyEn,
  moaPrivacyJa,
  moaPrivacy,
} from "@/features/legal/constants/moa-privacy";
import type {
  AppPrivacyPolicy,
  PrivacyLocale,
} from "@/features/legal/types/privacy-policy";

export const moaPrivacyLocalePaths: Record<PrivacyLocale, string> = {
  en: siteConfig.routes.moaPrivacy,
  ko: siteConfig.routes.moaPrivacyKo,
  ja: siteConfig.routes.moaPrivacyJa,
};

export const moaPrivacyPolicies: Record<PrivacyLocale, AppPrivacyPolicy> = {
  en: moaPrivacyEn,
  ko: moaPrivacy,
  ja: moaPrivacyJa,
};

export const moaPrivacyLanguageAlternates = {
  en: siteConfig.routes.moaPrivacy,
  ko: siteConfig.routes.moaPrivacyKo,
  ja: siteConfig.routes.moaPrivacyJa,
  "x-default": siteConfig.routes.moaPrivacy,
} as const;
