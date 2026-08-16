import { eyeconsPrivacyEn } from "@/features/legal/constants/eyecons-privacy-en";
import { eyeconsPrivacyJa } from "@/features/legal/constants/eyecons-privacy-ja";
import { eyeconsPrivacy } from "@/features/legal/constants/eyecons-privacy";
import type { AppPrivacyPolicy } from "@/features/legal/types/privacy-policy";

export const moaPrivacy = {
  ...eyeconsPrivacy,
  appName: "MOA Stan",
  effectiveDate: "2026년 8월 16일",
} satisfies AppPrivacyPolicy;

export const moaPrivacyEn = {
  ...eyeconsPrivacyEn,
  appName: "MOA Stan",
  effectiveDate: "August 16, 2026",
} satisfies AppPrivacyPolicy;

export const moaPrivacyJa = {
  ...eyeconsPrivacyJa,
  appName: "MOA Stan",
  effectiveDate: "2026年8月16日",
} satisfies AppPrivacyPolicy;
