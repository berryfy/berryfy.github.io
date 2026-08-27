import { eyeconsPrivacyEn } from "@/features/legal/constants/eyecons-privacy-en";
import { eyeconsPrivacyJa } from "@/features/legal/constants/eyecons-privacy-ja";
import { eyeconsPrivacy } from "@/features/legal/constants/eyecons-privacy";
import type { AppPrivacyPolicy } from "@/features/legal/types/privacy-policy";

export const nswerPrivacy = {
  ...eyeconsPrivacy,
  appName: "NSWER Stan",
  effectiveDate: "2026년 8월 27일",
} satisfies AppPrivacyPolicy;

export const nswerPrivacyEn = {
  ...eyeconsPrivacyEn,
  appName: "NSWER Stan",
  effectiveDate: "August 27, 2026",
} satisfies AppPrivacyPolicy;

export const nswerPrivacyJa = {
  ...eyeconsPrivacyJa,
  appName: "NSWER Stan",
  effectiveDate: "2026年8月27日",
} satisfies AppPrivacyPolicy;
