import type { Metadata } from "next";

import { siteConfig } from "@/constants/site";
import EyeconsPrivacyPage from "@/features/legal/components/eyecons-privacy-page";
import { eyeconsPrivacy } from "@/features/legal/constants/eyecons-privacy";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${eyeconsPrivacy.appName} 개인정보 처리방침 | ${siteConfig.name}`,
  description: `${eyeconsPrivacy.appName} 앱에서 처리하는 개인정보, 외부 서비스, 보유기간과 이용자 권리를 안내합니다.`,
  alternates: {
    canonical: siteConfig.routes.eyeconsPrivacy,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <EyeconsPrivacyPage />;
}
