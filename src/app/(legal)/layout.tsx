import { monoFontVariable, siteFontVariables } from "@/app/fonts";
import "../globals.css";

export default function LegalRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      data-scroll-behavior="smooth"
      className={`${siteFontVariables.ko} ${monoFontVariable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
