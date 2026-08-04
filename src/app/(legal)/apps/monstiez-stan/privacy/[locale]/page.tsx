import { notFound } from "next/navigation";

import { siteFontVariables } from "@/app/fonts";
import { siteLocales } from "@/constants/site";
import PrivacyPolicyPage from "@/features/legal/components/privacy-policy-page";
import {
  monstiezPrivacyLanguageAlternates,
  monstiezPrivacyLocalePaths,
  monstiezPrivacyPolicies,
} from "@/features/legal/constants/monstiez-privacy-copy";
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
    policies: monstiezPrivacyPolicies,
    localePaths: monstiezPrivacyLocalePaths,
    languageAlternates: monstiezPrivacyLanguageAlternates,
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
      policies={monstiezPrivacyPolicies}
      localePaths={monstiezPrivacyLocalePaths}
    />
  );
}
