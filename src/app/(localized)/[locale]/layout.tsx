import { notFound } from "next/navigation";
import { Geist_Mono, Noto_Sans_JP, Noto_Sans_KR } from "next/font/google";

import { isSiteLocale } from "@/features/home/utils/locale";
import "../../globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-site-sans",
  weight: "variable",
  display: "swap",
  preload: false,
  fallback: ["Apple SD Gothic Neo", "Malgun Gothic", "sans-serif"],
});

const notoSansJp = Noto_Sans_JP({
  variable: "--font-site-sans",
  weight: "variable",
  display: "swap",
  preload: false,
  fallback: ["Hiragino Kaku Gothic ProN", "Yu Gothic", "sans-serif"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

interface LocalizedRootLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocalizedRootLayout({
  children,
  params,
}: LocalizedRootLayoutProps) {
  const { locale } = await params;

  if (!isSiteLocale(locale) || locale === "en") {
    notFound();
  }

  const localizedFont =
    locale === "ko" ? notoSansKr.variable : notoSansJp.variable;

  return (
    <html
      lang={locale}
      data-scroll-behavior="smooth"
      className={`${localizedFont} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
