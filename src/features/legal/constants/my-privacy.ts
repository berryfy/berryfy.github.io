import { legacyStanPrivacyEn } from "@/features/legal/constants/legacy-stan-privacy-en";
import { legacyStanPrivacyJa } from "@/features/legal/constants/legacy-stan-privacy-ja";
import { legacyStanPrivacyKo } from "@/features/legal/constants/legacy-stan-privacy-ko";
import type { AppPrivacyPolicy } from "@/features/legal/types/privacy-policy";

export const myPrivacy = {
  ...legacyStanPrivacyKo,
  appName: "MY Stan",
  effectiveDate: "2026년 8월 10일",
} satisfies AppPrivacyPolicy;

export const myPrivacyEn = {
  ...legacyStanPrivacyEn,
  appName: "MY Stan",
  effectiveDate: "August 10, 2026",
} satisfies AppPrivacyPolicy;

export const myPrivacyJa = {
  ...legacyStanPrivacyJa,
  appName: "MY Stan",
  effectiveDate: "2026年8月10日",
} satisfies AppPrivacyPolicy;
