import { siteConfig } from "@/constants/site";
import {
  pawmpawmPrivacyEn,
  pawmpawmPrivacyJa,
  pawmpawmPrivacy,
} from "@/features/legal/constants/pawmpawm-privacy";
import type {
  AppPrivacyPolicy,
  PrivacyLocale,
} from "@/features/legal/types/privacy-policy";

export const pawmpawmPrivacyLocalePaths: Record<PrivacyLocale, string> = {
  en: siteConfig.routes.pawmpawmPrivacy,
  ko: siteConfig.routes.pawmpawmPrivacyKo,
  ja: siteConfig.routes.pawmpawmPrivacyJa,
};

export const pawmpawmPrivacyPolicies: Record<PrivacyLocale, AppPrivacyPolicy> =
  {
    en: pawmpawmPrivacyEn,
    ko: pawmpawmPrivacy,
    ja: pawmpawmPrivacyJa,
  };

export const pawmpawmPrivacyLanguageAlternates = {
  en: siteConfig.routes.pawmpawmPrivacy,
  ko: siteConfig.routes.pawmpawmPrivacyKo,
  ja: siteConfig.routes.pawmpawmPrivacyJa,
  "x-default": siteConfig.routes.pawmpawmPrivacy,
} as const;
