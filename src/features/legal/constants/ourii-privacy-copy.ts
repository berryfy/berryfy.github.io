import { siteConfig } from "@/constants/site";
import {
  ouriiPrivacyEn,
  ouriiPrivacyJa,
  ouriiPrivacy,
} from "@/features/legal/constants/ourii-privacy";
import type {
  AppPrivacyPolicy,
  PrivacyLocale,
} from "@/features/legal/types/privacy-policy";

export const ouriiPrivacyLocalePaths: Record<PrivacyLocale, string> = {
  en: siteConfig.routes.ouriiPrivacy,
  ko: siteConfig.routes.ouriiPrivacyKo,
  ja: siteConfig.routes.ouriiPrivacyJa,
};

export const ouriiPrivacyPolicies: Record<PrivacyLocale, AppPrivacyPolicy> = {
  en: ouriiPrivacyEn,
  ko: ouriiPrivacy,
  ja: ouriiPrivacyJa,
};

export const ouriiPrivacyLanguageAlternates = {
  en: siteConfig.routes.ouriiPrivacy,
  ko: siteConfig.routes.ouriiPrivacyKo,
  ja: siteConfig.routes.ouriiPrivacyJa,
  "x-default": siteConfig.routes.ouriiPrivacy,
} as const;
