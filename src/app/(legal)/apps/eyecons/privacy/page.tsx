import type { Metadata } from "next";

import { siteConfig } from "@/constants/site";
import EyeconsPrivacyPage from "@/features/legal/components/eyecons-privacy-page";
import {
  eyeconsPrivacyPolicies,
  privacyLanguageAlternates,
} from "@/features/legal/constants/eyecons-privacy-copy";

const policy = eyeconsPrivacyPolicies.en;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${policy.appName} Privacy Policy | ${siteConfig.name}`,
  description: `${policy.appName} explains the personal information processed by the app, external services, retention periods, and user rights.`,
  alternates: {
    canonical: siteConfig.routes.eyeconsPrivacy,
    languages: privacyLanguageAlternates,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <EyeconsPrivacyPage locale="en" />;
}
