import type { ReactNode } from "react";

import ThemeProvider from "@/components/widgets/ThemeProvider";

interface SiteDocumentProps {
  children: ReactNode;
  lang: string;
  fontClassName: string;
  bodyClassName?: string;
}

const SiteDocument = ({
  children,
  lang,
  fontClassName,
  bodyClassName = "min-h-full",
}: SiteDocumentProps) => (
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

export default SiteDocument;
