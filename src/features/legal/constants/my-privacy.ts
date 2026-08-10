import { eyeconsPrivacyEn } from "@/features/legal/constants/eyecons-privacy-en";
import { eyeconsPrivacyJa } from "@/features/legal/constants/eyecons-privacy-ja";
import { eyeconsPrivacy } from "@/features/legal/constants/eyecons-privacy";
import type { AppPrivacyPolicy } from "@/features/legal/types/privacy-policy";

export const myPrivacy = {
  ...eyeconsPrivacy,
  appName: "MY Stan",
  effectiveDate: "2026년 8월 10일",
} satisfies AppPrivacyPolicy;

export const myPrivacyEn = {
  ...eyeconsPrivacyEn,
  appName: "MY Stan",
  effectiveDate: "August 10, 2026",
} satisfies AppPrivacyPolicy;

export const myPrivacyJa = {
  ...eyeconsPrivacyJa,
  appName: "MY Stan",
  effectiveDate: "2026年8月10日",
} satisfies AppPrivacyPolicy;
