import { legacyStanPrivacyEn } from "@/features/legal/constants/legacy-stan-privacy-en";
import { legacyStanPrivacyJa } from "@/features/legal/constants/legacy-stan-privacy-ja";
import { legacyStanPrivacyKo } from "@/features/legal/constants/legacy-stan-privacy-ko";
import type { AppPrivacyPolicy } from "@/features/legal/types/privacy-policy";

export const stayPrivacy = {
  ...legacyStanPrivacyKo,
  appName: "STAY Stan",
  effectiveDate: "2026년 8월 2일",
} satisfies AppPrivacyPolicy;

export const stayPrivacyEn = {
  ...legacyStanPrivacyEn,
  appName: "STAY Stan",
  effectiveDate: "August 2, 2026",
} satisfies AppPrivacyPolicy;

export const stayPrivacyJa = {
  ...legacyStanPrivacyJa,
  appName: "STAY Stan",
  effectiveDate: "2026年8月2日",
} satisfies AppPrivacyPolicy;
