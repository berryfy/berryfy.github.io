import { legacyStanPrivacyKo } from "@/features/legal/constants/legacy-stan-privacy-ko";
import type { AppPrivacyPolicy } from "@/features/legal/types/privacy-policy";

export const eyeconsPrivacy = {
  ...legacyStanPrivacyKo,
  appName: "EYECONS Stan",
  effectiveDate: "2026년 8월 1일",
} satisfies AppPrivacyPolicy;
