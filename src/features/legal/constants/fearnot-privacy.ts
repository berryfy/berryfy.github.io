import { legacyStanPrivacyEn } from "@/features/legal/constants/legacy-stan-privacy-en";
import { legacyStanPrivacyJa } from "@/features/legal/constants/legacy-stan-privacy-ja";
import { legacyStanPrivacyKo } from "@/features/legal/constants/legacy-stan-privacy-ko";
import type { AppPrivacyPolicy } from "@/features/legal/types/privacy-policy";

export const fearnotPrivacy = {
  ...legacyStanPrivacyKo,
  appName: "FEARNOT Stan",
  effectiveDate: "2026년 8월 5일",
} satisfies AppPrivacyPolicy;

export const fearnotPrivacyEn = {
  ...legacyStanPrivacyEn,
  appName: "FEARNOT Stan",
  effectiveDate: "August 5, 2026",
} satisfies AppPrivacyPolicy;

export const fearnotPrivacyJa = {
  ...legacyStanPrivacyJa,
  appName: "FEARNOT Stan",
  effectiveDate: "2026年8月5日",
} satisfies AppPrivacyPolicy;
