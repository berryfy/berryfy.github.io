import { legacyStanPrivacyEn } from "@/features/legal/constants/legacy-stan-privacy-en";
import { legacyStanPrivacyJa } from "@/features/legal/constants/legacy-stan-privacy-ja";
import { legacyStanPrivacyKo } from "@/features/legal/constants/legacy-stan-privacy-ko";
import type { AppPrivacyPolicy } from "@/features/legal/types/privacy-policy";

export const oncePrivacy = {
  ...legacyStanPrivacyKo,
  appName: "ONCE Stan",
  effectiveDate: "2026년 8월 8일",
} satisfies AppPrivacyPolicy;

export const oncePrivacyEn = {
  ...legacyStanPrivacyEn,
  appName: "ONCE Stan",
  effectiveDate: "August 8, 2026",
} satisfies AppPrivacyPolicy;

export const oncePrivacyJa = {
  ...legacyStanPrivacyJa,
  appName: "ONCE Stan",
  effectiveDate: "2026年8月8日",
} satisfies AppPrivacyPolicy;
