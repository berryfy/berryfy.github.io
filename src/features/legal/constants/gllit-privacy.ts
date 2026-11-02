import { legacyStanPrivacyEn } from "@/features/legal/constants/legacy-stan-privacy-en";
import { legacyStanPrivacyJa } from "@/features/legal/constants/legacy-stan-privacy-ja";
import { legacyStanPrivacyKo } from "@/features/legal/constants/legacy-stan-privacy-ko";
import type { AppPrivacyPolicy } from "@/features/legal/types/privacy-policy";

export const gllitPrivacy = {
  ...legacyStanPrivacyKo,
  appName: "GLLIT Stan",
  effectiveDate: "2026년 8월 4일",
} satisfies AppPrivacyPolicy;

export const gllitPrivacyEn = {
  ...legacyStanPrivacyEn,
  appName: "GLLIT Stan",
  effectiveDate: "August 4, 2026",
} satisfies AppPrivacyPolicy;

export const gllitPrivacyJa = {
  ...legacyStanPrivacyJa,
  appName: "GLLIT Stan",
  effectiveDate: "2026年8月4日",
} satisfies AppPrivacyPolicy;
