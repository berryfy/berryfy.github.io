import { monoFontVariable, siteFontVariables } from "@/app/fonts";
import SiteDocument from "@/components/site-document";
import "../globals.css";

export const metadata = {
  robots: { index: false, follow: false },
};

export default function LabRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SiteDocument
      lang="ko"
      fontClassName={`${siteFontVariables.ko} ${monoFontVariable}`}
    >
      {children}
    </SiteDocument>
  );
}
