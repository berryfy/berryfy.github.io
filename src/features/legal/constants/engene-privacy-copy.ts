import { siteConfig } from "@/constants/site";
import {
  engenePrivacyEn,
  engenePrivacyJa,
  engenePrivacy,
} from "@/features/legal/constants/engene-privacy";
import type {
  AppPrivacyPolicy,
  PrivacyLocale,
} from "@/features/legal/types/privacy-policy";

export const engenePrivacyLocalePaths: Record<PrivacyLocale, string> = {
  en: siteConfig.routes.engenePrivacy,
  ko: siteConfig.routes.engenePrivacyKo,
  ja: siteConfig.routes.engenePrivacyJa,
};

export const engenePrivacyPolicies: Record<PrivacyLocale, AppPrivacyPolicy> = {
  en: engenePrivacyEn,
  ko: engenePrivacy,
  ja: engenePrivacyJa,
};

export const engenePrivacyLanguageAlternates = {
  en: siteConfig.routes.engenePrivacy,
  ko: siteConfig.routes.engenePrivacyKo,
  ja: siteConfig.routes.engenePrivacyJa,
  "x-default": siteConfig.routes.engenePrivacy,
} as const;
