import { legacyStanPrivacyEn } from "@/features/legal/constants/legacy-stan-privacy-en";
import { legacyStanPrivacyJa } from "@/features/legal/constants/legacy-stan-privacy-ja";
import { legacyStanPrivacyKo } from "@/features/legal/constants/legacy-stan-privacy-ko";
import type { AppPrivacyPolicy } from "@/features/legal/types/privacy-policy";

export const divePrivacy = {
  ...legacyStanPrivacyKo,
  appName: "DIVE Stan",
  effectiveDate: "2026년 8월 14일",
} satisfies AppPrivacyPolicy;

export const divePrivacyEn = {
  ...legacyStanPrivacyEn,
  appName: "DIVE Stan",
  effectiveDate: "August 14, 2026",
} satisfies AppPrivacyPolicy;

export const divePrivacyJa = {
  ...legacyStanPrivacyJa,
  appName: "DIVE Stan",
  effectiveDate: "2026年8月14日",
} satisfies AppPrivacyPolicy;
