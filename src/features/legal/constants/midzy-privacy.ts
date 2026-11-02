import { legacyStanPrivacyEn } from "@/features/legal/constants/legacy-stan-privacy-en";
import { legacyStanPrivacyJa } from "@/features/legal/constants/legacy-stan-privacy-ja";
import { legacyStanPrivacyKo } from "@/features/legal/constants/legacy-stan-privacy-ko";
import type { AppPrivacyPolicy } from "@/features/legal/types/privacy-policy";

export const midzyPrivacy = {
  ...legacyStanPrivacyKo,
  appName: "MIDZY Stan",
  effectiveDate: "2026년 8월 16일",
} satisfies AppPrivacyPolicy;

export const midzyPrivacyEn = {
  ...legacyStanPrivacyEn,
  appName: "MIDZY Stan",
  effectiveDate: "August 16, 2026",
} satisfies AppPrivacyPolicy;

export const midzyPrivacyJa = {
  ...legacyStanPrivacyJa,
  appName: "MIDZY Stan",
  effectiveDate: "2026年8月16日",
} satisfies AppPrivacyPolicy;
