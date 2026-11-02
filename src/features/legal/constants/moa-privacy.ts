import { legacyStanPrivacyEn } from "@/features/legal/constants/legacy-stan-privacy-en";
import { legacyStanPrivacyJa } from "@/features/legal/constants/legacy-stan-privacy-ja";
import { legacyStanPrivacyKo } from "@/features/legal/constants/legacy-stan-privacy-ko";
import type { AppPrivacyPolicy } from "@/features/legal/types/privacy-policy";

export const moaPrivacy = {
  ...legacyStanPrivacyKo,
  appName: "MOA Stan",
  effectiveDate: "2026년 8월 16일",
} satisfies AppPrivacyPolicy;

export const moaPrivacyEn = {
  ...legacyStanPrivacyEn,
  appName: "MOA Stan",
  effectiveDate: "August 16, 2026",
} satisfies AppPrivacyPolicy;

export const moaPrivacyJa = {
  ...legacyStanPrivacyJa,
  appName: "MOA Stan",
  effectiveDate: "2026年8月16日",
} satisfies AppPrivacyPolicy;
