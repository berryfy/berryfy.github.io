import { siteConfig } from "@/constants/site";
import {
  fearnotPrivacyEn,
  fearnotPrivacyJa,
  fearnotPrivacy,
} from "@/features/legal/constants/fearnot-privacy";
import type {
  AppPrivacyPolicy,
  PrivacyLocale,
} from "@/features/legal/types/privacy-policy";

export const fearnotPrivacyLocalePaths: Record<PrivacyLocale, string> = {
  en: siteConfig.routes.fearnotPrivacy,
  ko: siteConfig.routes.fearnotPrivacyKo,
  ja: siteConfig.routes.fearnotPrivacyJa,
};

export const fearnotPrivacyPolicies: Record<PrivacyLocale, AppPrivacyPolicy> = {
  en: fearnotPrivacyEn,
  ko: fearnotPrivacy,
  ja: fearnotPrivacyJa,
};

export const fearnotPrivacyLanguageAlternates = {
  en: siteConfig.routes.fearnotPrivacy,
  ko: siteConfig.routes.fearnotPrivacyKo,
  ja: siteConfig.routes.fearnotPrivacyJa,
  "x-default": siteConfig.routes.fearnotPrivacy,
} as const;
