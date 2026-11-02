import { notFound } from "next/navigation";

import { siteFontVariables } from "@/app/fonts";
import { siteLocales } from "@/constants/site";
import MoreAppsPage from "@/features/more-apps/components/more-apps-page";
import { createMoreAppsMetadata } from "@/features/more-apps/utils/metadata";
import { isSiteLocale } from "@/lib/locale";

export const dynamicParams = false;

export function generateStaticParams() {
  return siteLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isSiteLocale(locale)) {
    notFound();
  }

  return createMoreAppsMetadata(locale);
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

  return (
    <MoreAppsPage locale={locale} fontClassName={siteFontVariables[locale]} />
  );
}
