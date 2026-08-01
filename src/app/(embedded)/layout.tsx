import { monoFontVariable, siteFontVariables } from "@/app/fonts";
import ThemeProvider from "@/components/theme-provider";
import { siteConfig } from "@/constants/site";
import "../globals.css";

export default function EmbeddedRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={siteConfig.defaultLocale}
      data-scroll-behavior="smooth"
      className={`${siteFontVariables.en} ${monoFontVariable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
