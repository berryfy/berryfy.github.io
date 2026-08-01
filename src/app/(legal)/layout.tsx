import { monoFontVariable, siteFontVariables } from "@/app/fonts";
import SiteDocument from "@/components/site-document";
import "../globals.css";

export default function LegalRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SiteDocument
      lang="en"
      fontClassName={`${siteFontVariables.en} ${monoFontVariable}`}
      bodyClassName="flex min-h-full flex-col"
    >
      {children}
    </SiteDocument>
  );
}
