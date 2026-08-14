import { eyeconsPrivacyEn } from "@/features/legal/constants/eyecons-privacy-en";
import { eyeconsPrivacyJa } from "@/features/legal/constants/eyecons-privacy-ja";
import { eyeconsPrivacy } from "@/features/legal/constants/eyecons-privacy";
import type { AppPrivacyPolicy } from "@/features/legal/types/privacy-policy";

export const divePrivacy = {
  ...eyeconsPrivacy,
  appName: "DIVE Stan",
  effectiveDate: "2026년 8월 14일",
} satisfies AppPrivacyPolicy;

export const divePrivacyEn = {
  ...eyeconsPrivacyEn,
  appName: "DIVE Stan",
  effectiveDate: "August 14, 2026",
} satisfies AppPrivacyPolicy;

export const divePrivacyJa = {
  ...eyeconsPrivacyJa,
  appName: "DIVE Stan",
  effectiveDate: "2026年8月14日",
} satisfies AppPrivacyPolicy;
