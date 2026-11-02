import { legacyStanPrivacyEn } from "@/features/legal/constants/legacy-stan-privacy-en";
import { legacyStanPrivacyJa } from "@/features/legal/constants/legacy-stan-privacy-ja";
import { legacyStanPrivacyKo } from "@/features/legal/constants/legacy-stan-privacy-ko";
import type { AppPrivacyPolicy } from "@/features/legal/types/privacy-policy";

export const caratPrivacy = {
  ...legacyStanPrivacyKo,
  appName: "CARAT Stan",
  effectiveDate: "2026년 8월 16일",
} satisfies AppPrivacyPolicy;

export const caratPrivacyEn = {
  ...legacyStanPrivacyEn,
  appName: "CARAT Stan",
  effectiveDate: "August 16, 2026",
} satisfies AppPrivacyPolicy;

export const caratPrivacyJa = {
  ...legacyStanPrivacyJa,
  appName: "CARAT Stan",
  effectiveDate: "2026年8月16日",
} satisfies AppPrivacyPolicy;
