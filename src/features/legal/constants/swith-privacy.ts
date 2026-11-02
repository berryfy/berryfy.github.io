import { legacyStanPrivacyEn } from "@/features/legal/constants/legacy-stan-privacy-en";
import { legacyStanPrivacyJa } from "@/features/legal/constants/legacy-stan-privacy-ja";
import { legacyStanPrivacyKo } from "@/features/legal/constants/legacy-stan-privacy-ko";
import type { AppPrivacyPolicy } from "@/features/legal/types/privacy-policy";

export const swithPrivacy = {
  ...legacyStanPrivacyKo,
  appName: "SWITH Stan",
  effectiveDate: "2026년 8월 17일",
} satisfies AppPrivacyPolicy;

export const swithPrivacyEn = {
  ...legacyStanPrivacyEn,
  appName: "SWITH Stan",
  effectiveDate: "August 17, 2026",
} satisfies AppPrivacyPolicy;

export const swithPrivacyJa = {
  ...legacyStanPrivacyJa,
  appName: "SWITH Stan",
  effectiveDate: "2026年8月17日",
} satisfies AppPrivacyPolicy;
