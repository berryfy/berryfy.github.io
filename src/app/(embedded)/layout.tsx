import {
  displayFontVariable,
  monoFontVariable,
  siteFontVariables,
} from "@/app/fonts";
import SiteDocument from "@/components/widgets/SiteDocument";
import { siteConfig } from "@/constants/site";
import "../globals.css";

export default function EmbeddedRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SiteDocument
      lang={siteConfig.defaultLocale}
      fontClassName={`${siteFontVariables.en} ${monoFontVariable} ${displayFontVariable}`}
    >
      {children}
    </SiteDocument>
  );
}
