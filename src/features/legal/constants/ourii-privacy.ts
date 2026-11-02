import { legacyStanPrivacyEn } from "@/features/legal/constants/legacy-stan-privacy-en";
import { legacyStanPrivacyJa } from "@/features/legal/constants/legacy-stan-privacy-ja";
import { legacyStanPrivacyKo } from "@/features/legal/constants/legacy-stan-privacy-ko";
import type { AppPrivacyPolicy } from "@/features/legal/types/privacy-policy";

export const ouriiPrivacy = {
  ...legacyStanPrivacyKo,
  appName: "OURII Stan",
  effectiveDate: "2026년 8월 8일",
} satisfies AppPrivacyPolicy;

export const ouriiPrivacyEn = {
  ...legacyStanPrivacyEn,
  appName: "OURII Stan",
  effectiveDate: "August 8, 2026",
} satisfies AppPrivacyPolicy;

export const ouriiPrivacyJa = {
  ...legacyStanPrivacyJa,
  appName: "OURII Stan",
  effectiveDate: "2026年8月8日",
} satisfies AppPrivacyPolicy;
