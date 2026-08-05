import { eyeconsPrivacyEn } from "@/features/legal/constants/eyecons-privacy-en";
import { eyeconsPrivacyJa } from "@/features/legal/constants/eyecons-privacy-ja";
import { eyeconsPrivacy } from "@/features/legal/constants/eyecons-privacy";
import type { AppPrivacyPolicy } from "@/features/legal/types/privacy-policy";

export const fearnotPrivacy = {
  ...eyeconsPrivacy,
  appName: "FEARNOT Stan",
  effectiveDate: "2026년 8월 5일",
} satisfies AppPrivacyPolicy;

export const fearnotPrivacyEn = {
  ...eyeconsPrivacyEn,
  appName: "FEARNOT Stan",
  effectiveDate: "August 5, 2026",
} satisfies AppPrivacyPolicy;

export const fearnotPrivacyJa = {
  ...eyeconsPrivacyJa,
  appName: "FEARNOT Stan",
  effectiveDate: "2026年8月5日",
} satisfies AppPrivacyPolicy;
