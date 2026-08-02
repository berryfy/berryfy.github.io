import type { Metadata } from "next";

import { siteConfig } from "@/constants/site";
import { privacyPolicyCopy } from "@/features/legal/constants/privacy-policy-copy";
import type {
  AppPrivacyPolicy,
  PrivacyLocale,
} from "@/features/legal/types/privacy-policy";

interface CreatePrivacyMetadataOptions {
  locale: PrivacyLocale;
  policies: Record<PrivacyLocale, AppPrivacyPolicy>;
  localePaths: Record<PrivacyLocale, string>;
  languageAlternates: Record<string, string>;
}

export function createPrivacyMetadata({
  locale,
  policies,
  localePaths,
  languageAlternates,
}: CreatePrivacyMetadataOptions): Metadata {
  const policy = policies[locale];
  const copy = privacyPolicyCopy[locale];
  const descriptions: Record<PrivacyLocale, string> = {
    en: `${policy.appName} explains the personal information processed by the app, external services, retention periods, and user rights.`,
    ko: `${policy.appName} 앱에서 처리하는 개인정보, 외부 서비스, 보유기간과 이용자 권리를 안내합니다.`,
    ja: `${policy.appName}における個人情報の処理項目、外部サービス、保存期間、利用者の権利について説明します。`,
  };

  return {
    metadataBase: new URL(siteConfig.url),
    title: `${policy.appName} ${copy.pageTitle} | ${siteConfig.name}`,
    description: descriptions[locale],
    alternates: {
      canonical: localePaths[locale],
      languages: languageAlternates,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
