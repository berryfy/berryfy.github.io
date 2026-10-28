import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { siteConfig } from "@/constants/site";

// 예전 EYECONS 주소를 새 주소로 넘기는 호환용 페이지. 검색에 노출하지 않는다.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function Page() {
  redirect(siteConfig.routes.eyeconsPrivacy);
}
