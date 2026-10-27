import { notFound } from "next/navigation";

import {
  displayFontVariable,
  monoFontVariable,
  siteFontVariables,
} from "@/app/fonts";
import SiteDocument from "@/components/widgets/SiteDocument";
import { siteConfig } from "@/constants/site";
import { isSiteLocale } from "@/lib/locale";
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
      fontClassName={`${siteFontVariables[locale]} ${monoFontVariable} ${displayFontVariable}`}
      bodyClassName="flex min-h-full flex-col"
    >
      {children}
    </SiteDocument>
  );
}
