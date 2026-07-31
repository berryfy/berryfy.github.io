import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { siteConfig } from "@/constants/site";
import EyeconsPrivacyPage from "@/features/legal/components/eyecons-privacy-page";
import {
  eyeconsPrivacyCopy,
  eyeconsPrivacyPolicies,
  privacyLanguageAlternates,
  privacyLocaleDetails,
} from "@/features/legal/constants/eyecons-privacy-copy";
import type { PrivacyLocale } from "@/features/legal/types/privacy-policy";

const translatedLocales = ["en", "ja"] as const;

function isTranslatedLocale(
  locale: string,
): locale is (typeof translatedLocales)[number] {
  return translatedLocales.some((item) => item === locale);
}

export const dynamicParams = false;

export function generateStaticParams() {
  return translatedLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!isTranslatedLocale(locale)) {
    notFound();
  }

  const policy = eyeconsPrivacyPolicies[locale];
  const copy = eyeconsPrivacyCopy[locale];
  const descriptions: Record<(typeof translatedLocales)[number], string> = {
    en: `${policy.appName} explains the personal information processed by the app, external services, retention periods, and user rights.`,
    ja: `${policy.appName}における個人情報の処理項目、外部サービス、保存期間、利用者の権利について説明します。`,
  };

  return {
    metadataBase: new URL(siteConfig.url),
    title: `${policy.appName} ${copy.pageTitle} | ${siteConfig.name}`,
    description: descriptions[locale],
    alternates: {
      canonical: privacyLocaleDetails[locale].path,
      languages: privacyLanguageAlternates,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
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

  return <EyeconsPrivacyPage locale={locale satisfies PrivacyLocale} />;
}
