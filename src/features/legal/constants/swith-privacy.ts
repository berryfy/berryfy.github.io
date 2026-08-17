import { eyeconsPrivacyEn } from "@/features/legal/constants/eyecons-privacy-en";
import { eyeconsPrivacyJa } from "@/features/legal/constants/eyecons-privacy-ja";
import { eyeconsPrivacy } from "@/features/legal/constants/eyecons-privacy";
import type { AppPrivacyPolicy } from "@/features/legal/types/privacy-policy";

export const swithPrivacy = {
  ...eyeconsPrivacy,
  appName: "SWITH Stan",
  effectiveDate: "2026년 8월 17일",
} satisfies AppPrivacyPolicy;

export const swithPrivacyEn = {
  ...eyeconsPrivacyEn,
  appName: "SWITH Stan",
  effectiveDate: "August 17, 2026",
} satisfies AppPrivacyPolicy;

export const swithPrivacyJa = {
  ...eyeconsPrivacyJa,
  appName: "SWITH Stan",
  effectiveDate: "2026年8月17日",
} satisfies AppPrivacyPolicy;
