import { legacyStanPrivacyEn } from "@/features/legal/constants/legacy-stan-privacy-en";
import { legacyStanPrivacyJa } from "@/features/legal/constants/legacy-stan-privacy-ja";
import { legacyStanPrivacyKo } from "@/features/legal/constants/legacy-stan-privacy-ko";
import type { AppPrivacyPolicy } from "@/features/legal/types/privacy-policy";

export const pawmpawmPrivacy = {
  ...legacyStanPrivacyKo,
  appName: "PAWMPAWM Stan",
  effectiveDate: "2026년 8월 24일",
} satisfies AppPrivacyPolicy;

export const pawmpawmPrivacyEn = {
  ...legacyStanPrivacyEn,
  appName: "PAWMPAWM Stan",
  effectiveDate: "August 24, 2026",
} satisfies AppPrivacyPolicy;

export const pawmpawmPrivacyJa = {
  ...legacyStanPrivacyJa,
  appName: "PAWMPAWM Stan",
  effectiveDate: "2026年8月24日",
} satisfies AppPrivacyPolicy;
