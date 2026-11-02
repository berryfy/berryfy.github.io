import { legacyStanPrivacyEn } from "@/features/legal/constants/legacy-stan-privacy-en";
import { legacyStanPrivacyJa } from "@/features/legal/constants/legacy-stan-privacy-ja";
import { legacyStanPrivacyKo } from "@/features/legal/constants/legacy-stan-privacy-ko";
import type { AppPrivacyPolicy } from "@/features/legal/types/privacy-policy";

export const nswerPrivacy = {
  ...legacyStanPrivacyKo,
  appName: "NSWER Stan",
  effectiveDate: "2026년 8월 27일",
} satisfies AppPrivacyPolicy;

export const nswerPrivacyEn = {
  ...legacyStanPrivacyEn,
  appName: "NSWER Stan",
  effectiveDate: "August 27, 2026",
} satisfies AppPrivacyPolicy;

export const nswerPrivacyJa = {
  ...legacyStanPrivacyJa,
  appName: "NSWER Stan",
  effectiveDate: "2026年8月27日",
} satisfies AppPrivacyPolicy;
