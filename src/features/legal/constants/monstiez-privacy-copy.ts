import { siteConfig } from "@/constants/site";
import {
  monstiezPrivacyEn,
  monstiezPrivacyJa,
  monstiezPrivacy,
} from "@/features/legal/constants/monstiez-privacy";
import type {
  AppPrivacyPolicy,
  PrivacyLocale,
} from "@/features/legal/types/privacy-policy";

export const monstiezPrivacyLocalePaths: Record<PrivacyLocale, string> = {
  en: siteConfig.routes.monstiezPrivacy,
  ko: siteConfig.routes.monstiezPrivacyKo,
  ja: siteConfig.routes.monstiezPrivacyJa,
};

export const monstiezPrivacyPolicies: Record<PrivacyLocale, AppPrivacyPolicy> =
  {
    en: monstiezPrivacyEn,
    ko: monstiezPrivacy,
    ja: monstiezPrivacyJa,
  };

export const monstiezPrivacyLanguageAlternates = {
  en: siteConfig.routes.monstiezPrivacy,
  ko: siteConfig.routes.monstiezPrivacyKo,
  ja: siteConfig.routes.monstiezPrivacyJa,
  "x-default": siteConfig.routes.monstiezPrivacy,
} as const;
