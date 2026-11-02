import { siteConfig } from "@/constants/site";
import {
  divePrivacyEn,
  divePrivacyJa,
  divePrivacy,
} from "@/features/legal/constants/dive-privacy";
import type {
  AppPrivacyPolicy,
  PrivacyLocale,
} from "@/features/legal/types/privacy-policy";

export const divePrivacyLocalePaths: Record<PrivacyLocale, string> = {
  en: siteConfig.routes.divePrivacy,
  ko: siteConfig.routes.divePrivacyKo,
  ja: siteConfig.routes.divePrivacyJa,
};

export const divePrivacyPolicies: Record<PrivacyLocale, AppPrivacyPolicy> = {
  en: divePrivacyEn,
  ko: divePrivacy,
  ja: divePrivacyJa,
};

export const divePrivacyLanguageAlternates = {
  ...divePrivacyLocalePaths,
  "x-default": divePrivacyLocalePaths.en,
} as const;
