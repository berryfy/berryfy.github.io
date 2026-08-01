import type { ReactNode } from "react";

import ThemeProvider from "@/components/theme-provider";

interface SiteDocumentProps {
  children: ReactNode;
  lang: string;
  fontClassName: string;
  bodyClassName?: string;
}

export default function SiteDocument({
  children,
  lang,
  fontClassName,
  bodyClassName = "min-h-full",
}: SiteDocumentProps) {
  return (
    <html
      lang={lang}
      data-scroll-behavior="smooth"
      className={`${fontClassName} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className={bodyClassName}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
