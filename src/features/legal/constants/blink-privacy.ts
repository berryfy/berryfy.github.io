import { eyeconsPrivacyEn } from "@/features/legal/constants/eyecons-privacy-en";
import { eyeconsPrivacyJa } from "@/features/legal/constants/eyecons-privacy-ja";
import { eyeconsPrivacy } from "@/features/legal/constants/eyecons-privacy";
import type { AppPrivacyPolicy } from "@/features/legal/types/privacy-policy";

export const blinkPrivacy = {
  ...eyeconsPrivacy,
  appName: "BLINK Stan",
  effectiveDate: "2026년 8월 2일",
} satisfies AppPrivacyPolicy;

export const blinkPrivacyEn = {
  ...eyeconsPrivacyEn,
  appName: "BLINK Stan",
  effectiveDate: "August 2, 2026",
} satisfies AppPrivacyPolicy;

export const blinkPrivacyJa = {
  ...eyeconsPrivacyJa,
  appName: "BLINK Stan",
  effectiveDate: "2026年8月2日",
} satisfies AppPrivacyPolicy;
