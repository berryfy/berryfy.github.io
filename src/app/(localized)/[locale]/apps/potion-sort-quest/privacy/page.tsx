import { notFound } from "next/navigation";
import { siteFontVariables } from "@/app/fonts";
import { siteLocales } from "@/constants/site";
import PrivacyPolicyPage from "@/features/legal/components/privacy-policy-page";
import {
  potionPrivacyLanguageAlternates,
  potionPrivacyLocalePaths,
  potionPrivacyPageCopy,
} from "@/features/legal/constants/potion-privacy-copy";
import { potionPrivacyPolicies } from "@/features/legal/constants/potion-privacy";
import { createPrivacyMetadata } from "@/features/legal/utils/metadata";
import { isSiteLocale } from "@/lib/locale";
export const dynamicParams = false;
export const generateStaticParams = () =>
  siteLocales.map((locale) => ({ locale }));
interface Props {
  params: Promise<{ locale: string }>;
}
export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  if (!isSiteLocale(locale)) notFound();
  return createPrivacyMetadata({
    locale,
    policies: potionPrivacyPolicies,
    localePaths: potionPrivacyLocalePaths,
    languageAlternates: potionPrivacyLanguageAlternates,
  });
}
export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (!isSiteLocale(locale)) notFound();
  return (
    <PrivacyPolicyPage
      locale={locale}
      fontClassName={siteFontVariables[locale]}
      policies={potionPrivacyPolicies}
      localePaths={potionPrivacyLocalePaths}
      pageCopy={potionPrivacyPageCopy[locale]}
    />
  );
}
