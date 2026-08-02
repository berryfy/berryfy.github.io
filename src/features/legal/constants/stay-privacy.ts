import { eyeconsPrivacyEn } from "@/features/legal/constants/eyecons-privacy-en";
import { eyeconsPrivacyJa } from "@/features/legal/constants/eyecons-privacy-ja";
import { eyeconsPrivacy } from "@/features/legal/constants/eyecons-privacy";
import type { AppPrivacyPolicy } from "@/features/legal/types/privacy-policy";

export const stayPrivacy = {
  ...eyeconsPrivacy,
  appName: "STAY Stan",
  effectiveDate: "2026년 8월 2일",
} satisfies AppPrivacyPolicy;

export const stayPrivacyEn = {
  ...eyeconsPrivacyEn,
  appName: "STAY Stan",
  effectiveDate: "August 2, 2026",
} satisfies AppPrivacyPolicy;

export const stayPrivacyJa = {
  ...eyeconsPrivacyJa,
  appName: "STAY Stan",
  effectiveDate: "2026年8月2日",
} satisfies AppPrivacyPolicy;
