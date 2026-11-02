import { notFound } from "next/navigation";
import { siteLocales } from "@/constants/site";
import LegacyRedirectPage from "@/features/legacy-redirect/components/LegacyRedirectPage";
import { legacyPrivacyTargets } from "@/features/legacy-redirect/constants/targets";
import { createLegacyRedirectMetadata } from "@/features/legacy-redirect/utils/metadata";
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
  return createLegacyRedirectMetadata(
    legacyPrivacyTargets["neverland-stan"][locale],
    locale,
  );
}
export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (!isSiteLocale(locale)) notFound();
  return (
    <LegacyRedirectPage
      target={legacyPrivacyTargets["neverland-stan"][locale]}
      locale={locale}
    />
  );
}
