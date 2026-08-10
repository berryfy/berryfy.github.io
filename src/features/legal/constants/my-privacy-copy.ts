import { siteConfig } from "@/constants/site";
import {
  myPrivacyEn,
  myPrivacyJa,
  myPrivacy,
} from "@/features/legal/constants/my-privacy";
import type {
  AppPrivacyPolicy,
  PrivacyLocale,
} from "@/features/legal/types/privacy-policy";

export const myPrivacyLocalePaths: Record<PrivacyLocale, string> = {
  en: siteConfig.routes.myPrivacy,
  ko: siteConfig.routes.myPrivacyKo,
  ja: siteConfig.routes.myPrivacyJa,
};

export const myPrivacyPolicies: Record<PrivacyLocale, AppPrivacyPolicy> = {
  en: myPrivacyEn,
  ko: myPrivacy,
  ja: myPrivacyJa,
};

export const myPrivacyLanguageAlternates = {
  en: siteConfig.routes.myPrivacy,
  ko: siteConfig.routes.myPrivacyKo,
  ja: siteConfig.routes.myPrivacyJa,
  "x-default": siteConfig.routes.myPrivacy,
} as const;
