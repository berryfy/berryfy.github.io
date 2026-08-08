import { siteConfig } from "@/constants/site";
import {
  atinyPrivacyEn,
  atinyPrivacyJa,
  atinyPrivacy,
} from "@/features/legal/constants/atiny-privacy";
import type {
  AppPrivacyPolicy,
  PrivacyLocale,
} from "@/features/legal/types/privacy-policy";

export const atinyPrivacyLocalePaths: Record<PrivacyLocale, string> = {
  en: siteConfig.routes.atinyPrivacy,
  ko: siteConfig.routes.atinyPrivacyKo,
  ja: siteConfig.routes.atinyPrivacyJa,
};

export const atinyPrivacyPolicies: Record<PrivacyLocale, AppPrivacyPolicy> = {
  en: atinyPrivacyEn,
  ko: atinyPrivacy,
  ja: atinyPrivacyJa,
};

export const atinyPrivacyLanguageAlternates = {
  en: siteConfig.routes.atinyPrivacy,
  ko: siteConfig.routes.atinyPrivacyKo,
  ja: siteConfig.routes.atinyPrivacyJa,
  "x-default": siteConfig.routes.atinyPrivacy,
} as const;
