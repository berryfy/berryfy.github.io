import { siteConfig } from "@/constants/site";
import {
  caratPrivacyEn,
  caratPrivacyJa,
  caratPrivacy,
} from "@/features/legal/constants/carat-privacy";
import type {
  AppPrivacyPolicy,
  PrivacyLocale,
} from "@/features/legal/types/privacy-policy";

export const caratPrivacyLocalePaths: Record<PrivacyLocale, string> = {
  en: siteConfig.routes.caratPrivacy,
  ko: siteConfig.routes.caratPrivacyKo,
  ja: siteConfig.routes.caratPrivacyJa,
};

export const caratPrivacyPolicies: Record<PrivacyLocale, AppPrivacyPolicy> = {
  en: caratPrivacyEn,
  ko: caratPrivacy,
  ja: caratPrivacyJa,
};

export const caratPrivacyLanguageAlternates = {
  en: siteConfig.routes.caratPrivacy,
  ko: siteConfig.routes.caratPrivacyKo,
  ja: siteConfig.routes.caratPrivacyJa,
  "x-default": siteConfig.routes.caratPrivacy,
} as const;
