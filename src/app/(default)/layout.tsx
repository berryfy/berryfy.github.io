import { monoFontVariable, siteFontVariables } from "@/app/fonts";
import { siteConfig } from "@/constants/site";
import "../globals.css";

export default function DefaultRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={siteConfig.defaultLocale}
      data-scroll-behavior="smooth"
      className={`${siteFontVariables.en} ${monoFontVariable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
