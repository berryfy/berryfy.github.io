import { legacyStanPrivacyJa } from "@/features/legal/constants/legacy-stan-privacy-ja";
import type { AppPrivacyPolicy } from "@/features/legal/types/privacy-policy";

export const eyeconsPrivacyJa = {
  ...legacyStanPrivacyJa,
  appName: "EYECONS Stan",
  effectiveDate: "2026年8月1日",
} satisfies AppPrivacyPolicy;
