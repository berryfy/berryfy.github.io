import { notFound } from "next/navigation";

import { siteFontVariables } from "@/app/fonts";
import { siteLocales } from "@/constants/site";
import PrivacyPolicyPage from "@/features/legal/components/privacy-policy-page";
import {
  eyeconsPrivacyLanguageAlternates,
  eyeconsPrivacyLocalePaths,
  eyeconsPrivacyPolicies,
} from "@/features/legal/constants/eyecons-privacy-copy";
import { isSiteLocale } from "@/lib/locale";
import { createPrivacyMetadata } from "@/features/legal/utils/metadata";

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
    policies: eyeconsPrivacyPolicies,
    localePaths: eyeconsPrivacyLocalePaths,
    languageAlternates: eyeconsPrivacyLanguageAlternates,
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
      policies={eyeconsPrivacyPolicies}
      localePaths={eyeconsPrivacyLocalePaths}
    />
  );
}
