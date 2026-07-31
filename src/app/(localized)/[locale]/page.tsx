import type { Metadata } from "next";
import { notFound } from "next/navigation";

import HomePage from "@/features/home/components/home-page";
import { siteCopy, siteLocales } from "@/features/home/constants/site-content";
import { isSiteLocale } from "@/features/home/utils/locale";
import { createHomeMetadata } from "@/features/home/utils/metadata";

interface LocalizedHomePageProps {
  params: Promise<{ locale: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return siteLocales
    .filter((locale) => locale !== "en")
    .map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocalizedHomePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isSiteLocale(locale) || locale === "en") {
    return {};
  }

  return createHomeMetadata(locale, siteCopy[locale]);
}

export default async function LocalizedHomePage({
  params,
}: LocalizedHomePageProps) {
  const { locale } = await params;

  if (!isSiteLocale(locale) || locale === "en") {
    notFound();
  }

  return <HomePage locale={locale} copy={siteCopy[locale]} />;
}
