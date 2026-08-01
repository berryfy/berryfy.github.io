import { monoFontVariable, siteFontVariables } from "@/app/fonts";
import ThemeProvider from "@/components/theme-provider";
import "../globals.css";

export default function LegalRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${siteFontVariables.en} ${monoFontVariable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
