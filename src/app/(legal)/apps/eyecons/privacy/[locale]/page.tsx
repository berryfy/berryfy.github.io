import { notFound, redirect } from "next/navigation";

import {
  privacyLocalePaths,
  privacyLocales,
} from "@/features/legal/constants/eyecons-privacy-copy";
import { isSiteLocale } from "@/lib/locale";

export const dynamicParams = false;

export function generateStaticParams() {
  return privacyLocales.map((locale) => ({ locale }));
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

  redirect(privacyLocalePaths[locale]);
}
