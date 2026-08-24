import { siteConfig } from "@/constants/site";
import {
  bawigePrivacyEn,
  bawigePrivacyJa,
  bawigePrivacy,
} from "@/features/legal/constants/bawige-privacy";
import type {
  AppPrivacyPolicy,
  PrivacyLocale,
} from "@/features/legal/types/privacy-policy";

export const bawigePrivacyLocalePaths: Record<PrivacyLocale, string> = {
  en: siteConfig.routes.bawigePrivacy,
  ko: siteConfig.routes.bawigePrivacyKo,
  ja: siteConfig.routes.bawigePrivacyJa,
};

export const bawigePrivacyPolicies: Record<PrivacyLocale, AppPrivacyPolicy> = {
  en: bawigePrivacyEn,
  ko: bawigePrivacy,
  ja: bawigePrivacyJa,
};

export const bawigePrivacyLanguageAlternates = {
  en: siteConfig.routes.bawigePrivacy,
  ko: siteConfig.routes.bawigePrivacyKo,
  ja: siteConfig.routes.bawigePrivacyJa,
  "x-default": siteConfig.routes.bawigePrivacy,
} as const;
