import { notFound, redirect } from "next/navigation";

import { privacyLocaleDetails } from "@/features/legal/constants/eyecons-privacy-copy";

const translatedLocales = ["en", "ko", "ja"] as const;

function isTranslatedLocale(
  locale: string,
): locale is (typeof translatedLocales)[number] {
  return translatedLocales.some((item) => item === locale);
}

export const dynamicParams = false;

export function generateStaticParams() {
  return translatedLocales.map((locale) => ({ locale }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isTranslatedLocale(locale)) {
    notFound();
  }

  redirect(privacyLocaleDetails[locale].path);
}
