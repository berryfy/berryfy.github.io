import { eyeconsPrivacyEn } from "@/features/legal/constants/eyecons-privacy-en";
import { eyeconsPrivacyJa } from "@/features/legal/constants/eyecons-privacy-ja";
import { eyeconsPrivacy } from "@/features/legal/constants/eyecons-privacy";
import type { AppPrivacyPolicy } from "@/features/legal/types/privacy-policy";

export const oncePrivacy = {
  ...eyeconsPrivacy,
  appName: "ONCE Stan",
  effectiveDate: "2026년 8월 8일",
} satisfies AppPrivacyPolicy;

export const oncePrivacyEn = {
  ...eyeconsPrivacyEn,
  appName: "ONCE Stan",
  effectiveDate: "August 8, 2026",
} satisfies AppPrivacyPolicy;

export const oncePrivacyJa = {
  ...eyeconsPrivacyJa,
  appName: "ONCE Stan",
  effectiveDate: "2026年8月8日",
} satisfies AppPrivacyPolicy;
