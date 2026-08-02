import { siteConfig } from "@/constants/site";
import { eyeconsPrivacyEn } from "@/features/legal/constants/eyecons-privacy-en";
import { eyeconsPrivacyJa } from "@/features/legal/constants/eyecons-privacy-ja";
import { eyeconsPrivacy } from "@/features/legal/constants/eyecons-privacy";
import type {
  AppPrivacyPolicy,
  PrivacyLocale,
} from "@/features/legal/types/privacy-policy";

export const eyeconsPrivacyLocalePaths: Record<PrivacyLocale, string> = {
  ko: siteConfig.routes.eyeconsPrivacyKo,
  en: siteConfig.routes.eyeconsPrivacy,
  ja: siteConfig.routes.eyeconsPrivacyJa,
};

export const eyeconsPrivacyPolicies: Record<PrivacyLocale, AppPrivacyPolicy> = {
  ko: eyeconsPrivacy,
  en: eyeconsPrivacyEn,
  ja: eyeconsPrivacyJa,
};

export const eyeconsPrivacyLanguageAlternates = {
  ko: siteConfig.routes.eyeconsPrivacyKo,
  en: siteConfig.routes.eyeconsPrivacy,
  ja: siteConfig.routes.eyeconsPrivacyJa,
  "x-default": siteConfig.routes.eyeconsPrivacy,
} as const;
