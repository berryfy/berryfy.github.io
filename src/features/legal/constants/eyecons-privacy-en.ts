import { legacyStanPrivacyEn } from "@/features/legal/constants/legacy-stan-privacy-en";
import type { AppPrivacyPolicy } from "@/features/legal/types/privacy-policy";

export const eyeconsPrivacyEn = {
  ...legacyStanPrivacyEn,
  appName: "EYECONS Stan",
  effectiveDate: "August 1, 2026",
} satisfies AppPrivacyPolicy;
