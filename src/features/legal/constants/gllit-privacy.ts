import { eyeconsPrivacyEn } from "@/features/legal/constants/eyecons-privacy-en";
import { eyeconsPrivacyJa } from "@/features/legal/constants/eyecons-privacy-ja";
import { eyeconsPrivacy } from "@/features/legal/constants/eyecons-privacy";
import type { AppPrivacyPolicy } from "@/features/legal/types/privacy-policy";

export const gllitPrivacy = {
  ...eyeconsPrivacy,
  appName: "GLLIT Stan",
  effectiveDate: "2026년 8월 4일",
} satisfies AppPrivacyPolicy;

export const gllitPrivacyEn = {
  ...eyeconsPrivacyEn,
  appName: "GLLIT Stan",
  effectiveDate: "August 4, 2026",
} satisfies AppPrivacyPolicy;

export const gllitPrivacyJa = {
  ...eyeconsPrivacyJa,
  appName: "GLLIT Stan",
  effectiveDate: "2026年8月4日",
} satisfies AppPrivacyPolicy;
