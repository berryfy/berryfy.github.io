import { legacyStanPrivacyEn } from "@/features/legal/constants/legacy-stan-privacy-en";
import { legacyStanPrivacyJa } from "@/features/legal/constants/legacy-stan-privacy-ja";
import { legacyStanPrivacyKo } from "@/features/legal/constants/legacy-stan-privacy-ko";
import type { AppPrivacyPolicy } from "@/features/legal/types/privacy-policy";

export const blinkPrivacy = {
  ...legacyStanPrivacyKo,
  appName: "BLINK Stan",
  effectiveDate: "2026년 8월 2일",
} satisfies AppPrivacyPolicy;

export const blinkPrivacyEn = {
  ...legacyStanPrivacyEn,
  appName: "BLINK Stan",
  effectiveDate: "August 2, 2026",
} satisfies AppPrivacyPolicy;

export const blinkPrivacyJa = {
  ...legacyStanPrivacyJa,
  appName: "BLINK Stan",
  effectiveDate: "2026年8月2日",
} satisfies AppPrivacyPolicy;
