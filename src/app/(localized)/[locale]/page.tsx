import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { siteConfig, siteLocales } from "@/constants/site";
import HomePage from "@/features/home/components/home-page";
import { siteCopy } from "@/features/home/constants/site-content";
import { createHomeMetadata } from "@/features/home/utils/metadata";
import { isSiteLocale } from "@/lib/locale";

interface LocalizedHomePageProps {
  params: Promise<{ locale: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return siteLocales
    .filter((locale) => locale !== siteConfig.defaultLocale)
    .map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LocalizedHomePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isSiteLocale(locale) || locale === siteConfig.defaultLocale) {
    return {};
  }

  return createHomeMetadata(locale, siteCopy[locale]);
}

export default async function LocalizedHomePage({
  params,
}: LocalizedHomePageProps) {
  const { locale } = await params;

  if (!isSiteLocale(locale) || locale === siteConfig.defaultLocale) {
    notFound();
  }

  return <HomePage locale={locale} copy={siteCopy[locale]} />;
}
