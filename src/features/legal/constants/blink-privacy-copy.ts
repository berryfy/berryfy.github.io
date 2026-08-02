import { siteConfig } from "@/constants/site";
import {
  blinkPrivacyEn,
  blinkPrivacyJa,
  blinkPrivacy,
} from "@/features/legal/constants/blink-privacy";
import type {
  AppPrivacyPolicy,
  PrivacyLocale,
} from "@/features/legal/types/privacy-policy";

export const blinkPrivacyLocalePaths: Record<PrivacyLocale, string> = {
  en: siteConfig.routes.blinkPrivacy,
  ko: siteConfig.routes.blinkPrivacyKo,
  ja: siteConfig.routes.blinkPrivacyJa,
};

export const blinkPrivacyPolicies: Record<PrivacyLocale, AppPrivacyPolicy> = {
  en: blinkPrivacyEn,
  ko: blinkPrivacy,
  ja: blinkPrivacyJa,
};

export const blinkPrivacyLanguageAlternates = {
  en: siteConfig.routes.blinkPrivacy,
  ko: siteConfig.routes.blinkPrivacyKo,
  ja: siteConfig.routes.blinkPrivacyJa,
  "x-default": siteConfig.routes.blinkPrivacy,
} as const;
