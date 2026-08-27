import { siteConfig } from "@/constants/site";
import {
  nswerPrivacyEn,
  nswerPrivacyJa,
  nswerPrivacy,
} from "@/features/legal/constants/nswer-privacy";
import type {
  AppPrivacyPolicy,
  PrivacyLocale,
} from "@/features/legal/types/privacy-policy";

export const nswerPrivacyLocalePaths: Record<PrivacyLocale, string> = {
  en: siteConfig.routes.nswerPrivacy,
  ko: siteConfig.routes.nswerPrivacyKo,
  ja: siteConfig.routes.nswerPrivacyJa,
};

export const nswerPrivacyPolicies: Record<PrivacyLocale, AppPrivacyPolicy> = {
  en: nswerPrivacyEn,
  ko: nswerPrivacy,
  ja: nswerPrivacyJa,
};

export const nswerPrivacyLanguageAlternates = {
  en: siteConfig.routes.nswerPrivacy,
  ko: siteConfig.routes.nswerPrivacyKo,
  ja: siteConfig.routes.nswerPrivacyJa,
  "x-default": siteConfig.routes.nswerPrivacy,
} as const;
