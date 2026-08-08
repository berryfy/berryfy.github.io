import { siteConfig } from "@/constants/site";
import {
  oncePrivacyEn,
  oncePrivacyJa,
  oncePrivacy,
} from "@/features/legal/constants/once-privacy";
import type {
  AppPrivacyPolicy,
  PrivacyLocale,
} from "@/features/legal/types/privacy-policy";

export const oncePrivacyLocalePaths: Record<PrivacyLocale, string> = {
  en: siteConfig.routes.oncePrivacy,
  ko: siteConfig.routes.oncePrivacyKo,
  ja: siteConfig.routes.oncePrivacyJa,
};

export const oncePrivacyPolicies: Record<PrivacyLocale, AppPrivacyPolicy> = {
  en: oncePrivacyEn,
  ko: oncePrivacy,
  ja: oncePrivacyJa,
};

export const oncePrivacyLanguageAlternates = {
  en: siteConfig.routes.oncePrivacy,
  ko: siteConfig.routes.oncePrivacyKo,
  ja: siteConfig.routes.oncePrivacyJa,
  "x-default": siteConfig.routes.oncePrivacy,
} as const;
