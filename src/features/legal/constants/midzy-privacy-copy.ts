import { siteConfig } from "@/constants/site";
import {
  midzyPrivacyEn,
  midzyPrivacyJa,
  midzyPrivacy,
} from "@/features/legal/constants/midzy-privacy";
import type {
  AppPrivacyPolicy,
  PrivacyLocale,
} from "@/features/legal/types/privacy-policy";

export const midzyPrivacyLocalePaths: Record<PrivacyLocale, string> = {
  en: siteConfig.routes.midzyPrivacy,
  ko: siteConfig.routes.midzyPrivacyKo,
  ja: siteConfig.routes.midzyPrivacyJa,
};

export const midzyPrivacyPolicies: Record<PrivacyLocale, AppPrivacyPolicy> = {
  en: midzyPrivacyEn,
  ko: midzyPrivacy,
  ja: midzyPrivacyJa,
};

export const midzyPrivacyLanguageAlternates = {
  en: siteConfig.routes.midzyPrivacy,
  ko: siteConfig.routes.midzyPrivacyKo,
  ja: siteConfig.routes.midzyPrivacyJa,
  "x-default": siteConfig.routes.midzyPrivacy,
} as const;
