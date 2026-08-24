import { eyeconsPrivacyEn } from "@/features/legal/constants/eyecons-privacy-en";
import { eyeconsPrivacyJa } from "@/features/legal/constants/eyecons-privacy-ja";
import { eyeconsPrivacy } from "@/features/legal/constants/eyecons-privacy";
import type { AppPrivacyPolicy } from "@/features/legal/types/privacy-policy";

export const pawmpawmPrivacy = {
  ...eyeconsPrivacy,
  appName: "PAWMPAWM Stan",
  effectiveDate: "2026년 8월 24일",
} satisfies AppPrivacyPolicy;

export const pawmpawmPrivacyEn = {
  ...eyeconsPrivacyEn,
  appName: "PAWMPAWM Stan",
  effectiveDate: "August 24, 2026",
} satisfies AppPrivacyPolicy;

export const pawmpawmPrivacyJa = {
  ...eyeconsPrivacyJa,
  appName: "PAWMPAWM Stan",
  effectiveDate: "2026年8月24日",
} satisfies AppPrivacyPolicy;
