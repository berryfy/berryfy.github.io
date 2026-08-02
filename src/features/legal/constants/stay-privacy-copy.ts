import { siteConfig } from "@/constants/site";
import {
  stayPrivacyEn,
  stayPrivacyJa,
  stayPrivacy,
} from "@/features/legal/constants/stay-privacy";
import type {
  AppPrivacyPolicy,
  PrivacyLocale,
} from "@/features/legal/types/privacy-policy";

export const stayPrivacyLocalePaths: Record<PrivacyLocale, string> = {
  en: siteConfig.routes.stayPrivacy,
  ko: siteConfig.routes.stayPrivacyKo,
  ja: siteConfig.routes.stayPrivacyJa,
};

export const stayPrivacyPolicies: Record<PrivacyLocale, AppPrivacyPolicy> = {
  en: stayPrivacyEn,
  ko: stayPrivacy,
  ja: stayPrivacyJa,
};

export const stayPrivacyLanguageAlternates = {
  en: siteConfig.routes.stayPrivacy,
  ko: siteConfig.routes.stayPrivacyKo,
  ja: siteConfig.routes.stayPrivacyJa,
  "x-default": siteConfig.routes.stayPrivacy,
} as const;
