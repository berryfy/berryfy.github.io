import type { Metadata } from "next";

import EyeconsPrivacyPage from "@/features/legal/components/eyecons-privacy-page";

export const metadata: Metadata = {
  metadataBase: new URL("https://berryfy.github.io"),
  title: "EYEKONS Stan 개인정보 처리방침 | berryfy",
  description:
    "EYEKONS Stan 앱에서 처리하는 개인정보, 외부 서비스, 보유기간과 이용자 권리를 안내합니다.",
  alternates: {
    canonical: "/apps/eyecons/privacy/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <EyeconsPrivacyPage />;
}
