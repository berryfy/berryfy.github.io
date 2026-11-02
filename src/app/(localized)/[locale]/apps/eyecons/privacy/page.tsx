import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

import { siteLocales } from "@/constants/site";
import { eyeconsPrivacyLocalePaths } from "@/features/legal/constants/eyecons-privacy-copy";
import { isSiteLocale } from "@/lib/locale";

// 예전 EYECONS 주소를 새 주소로 넘기는 호환용 페이지. 검색에 노출하지 않는다.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export const dynamicParams = false;

export function generateStaticParams() {
  return siteLocales.map((locale) => ({ locale }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isSiteLocale(locale)) {
    notFound();
  }

  redirect(eyeconsPrivacyLocalePaths[locale]);
}
