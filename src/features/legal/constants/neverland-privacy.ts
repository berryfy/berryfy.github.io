import { eyeconsPrivacyEn } from "@/features/legal/constants/eyecons-privacy-en";
import { eyeconsPrivacyJa } from "@/features/legal/constants/eyecons-privacy-ja";
import { eyeconsPrivacy } from "@/features/legal/constants/eyecons-privacy";
import type { AppPrivacyPolicy } from "@/features/legal/types/privacy-policy";

export const neverlandPrivacy = {
  ...eyeconsPrivacy,
  appName: "NEVERLAND Stan",
  effectiveDate: "2026년 8월 16일",
} satisfies AppPrivacyPolicy;

export const neverlandPrivacyEn = {
  ...eyeconsPrivacyEn,
  appName: "NEVERLAND Stan",
  effectiveDate: "August 16, 2026",
} satisfies AppPrivacyPolicy;

export const neverlandPrivacyJa = {
  ...eyeconsPrivacyJa,
  appName: "NEVERLAND Stan",
  effectiveDate: "2026年8月16日",
} satisfies AppPrivacyPolicy;
