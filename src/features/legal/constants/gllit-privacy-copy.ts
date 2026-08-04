import { siteConfig } from "@/constants/site";
import {
  gllitPrivacyEn,
  gllitPrivacyJa,
  gllitPrivacy,
} from "@/features/legal/constants/gllit-privacy";
import type {
  AppPrivacyPolicy,
  PrivacyLocale,
} from "@/features/legal/types/privacy-policy";

export const gllitPrivacyLocalePaths: Record<PrivacyLocale, string> = {
  en: siteConfig.routes.gllitPrivacy,
  ko: siteConfig.routes.gllitPrivacyKo,
  ja: siteConfig.routes.gllitPrivacyJa,
};

export const gllitPrivacyPolicies: Record<PrivacyLocale, AppPrivacyPolicy> = {
  en: gllitPrivacyEn,
  ko: gllitPrivacy,
  ja: gllitPrivacyJa,
};

export const gllitPrivacyLanguageAlternates = {
  en: siteConfig.routes.gllitPrivacy,
  ko: siteConfig.routes.gllitPrivacyKo,
  ja: siteConfig.routes.gllitPrivacyJa,
  "x-default": siteConfig.routes.gllitPrivacy,
} as const;
