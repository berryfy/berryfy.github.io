import { notFound } from "next/navigation";

import { siteFontVariables } from "@/app/fonts";
import { siteLocales } from "@/constants/site";
import ZombieCarePrivacyPage from "@/features/legal/components/ZombieCarePrivacyPage";
import {
  zombieCarePrivacyLanguageAlternates,
  zombieCarePrivacyLocalePaths,
  zombieCarePrivacyPolicies,
} from "@/features/legal/constants/zombie-care-privacy-copy";
import { createPrivacyMetadata } from "@/features/legal/utils/metadata";
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

  return createPrivacyMetadata({
    locale,
    policies: zombieCarePrivacyPolicies,
    localePaths: zombieCarePrivacyLocalePaths,
    languageAlternates: zombieCarePrivacyLanguageAlternates,
  });
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
    <ZombieCarePrivacyPage
      locale={locale}
      fontClassName={siteFontVariables[locale]}
    />
  );
}
