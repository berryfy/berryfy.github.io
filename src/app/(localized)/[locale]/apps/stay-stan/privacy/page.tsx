import { notFound } from "next/navigation";

import { siteFontVariables } from "@/app/fonts";
import { siteLocales } from "@/constants/site";
import PrivacyPolicyPage from "@/features/legal/components/privacy-policy-page";
import {
  stayPrivacyLanguageAlternates,
  stayPrivacyLocalePaths,
  stayPrivacyPolicies,
} from "@/features/legal/constants/stay-privacy-copy";
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
    policies: stayPrivacyPolicies,
    localePaths: stayPrivacyLocalePaths,
    languageAlternates: stayPrivacyLanguageAlternates,
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
    <PrivacyPolicyPage
      locale={locale}
      fontClassName={siteFontVariables[locale]}
      policies={stayPrivacyPolicies}
      localePaths={stayPrivacyLocalePaths}
    />
  );
}
