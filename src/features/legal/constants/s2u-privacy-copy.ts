import { siteConfig } from "@/constants/site";
import {
  s2uPrivacyEn,
  s2uPrivacyJa,
  s2uPrivacy,
} from "@/features/legal/constants/s2u-privacy";
import type {
  AppPrivacyPolicy,
  PrivacyLocale,
} from "@/features/legal/types/privacy-policy";

export const s2uPrivacyLocalePaths: Record<PrivacyLocale, string> = {
  en: siteConfig.routes.s2uPrivacy,
  ko: siteConfig.routes.s2uPrivacyKo,
  ja: siteConfig.routes.s2uPrivacyJa,
};

export const s2uPrivacyPolicies: Record<PrivacyLocale, AppPrivacyPolicy> = {
  en: s2uPrivacyEn,
  ko: s2uPrivacy,
  ja: s2uPrivacyJa,
};

export const s2uPrivacyLanguageAlternates = {
  en: siteConfig.routes.s2uPrivacy,
  ko: siteConfig.routes.s2uPrivacyKo,
  ja: siteConfig.routes.s2uPrivacyJa,
  "x-default": siteConfig.routes.s2uPrivacy,
} as const;
