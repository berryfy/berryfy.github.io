import { notFound } from "next/navigation";

import { monoFontVariable, siteFontVariables } from "@/app/fonts";
import SiteDocument from "@/components/site-document";
import { siteConfig } from "@/constants/site";
import { isSiteLocale } from "@/features/home/utils/locale";
import "../../globals.css";

interface LocalizedRootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocalizedRootLayout({
  children,
  params,
}: LocalizedRootLayoutProps) {
  const { locale } = await params;

  if (!isSiteLocale(locale) || locale === siteConfig.defaultLocale) {
    notFound();
  }

  return (
    <SiteDocument
      lang={locale}
      fontClassName={`${siteFontVariables[locale]} ${monoFontVariable}`}
      bodyClassName="flex min-h-full flex-col"
    >
      {children}
    </SiteDocument>
  );
}
