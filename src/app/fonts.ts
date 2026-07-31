import {
  Geist_Mono,
  Manrope,
  Noto_Sans_JP,
  Noto_Sans_KR,
} from "next/font/google";

import type { SiteLocale } from "@/types/site";

const manrope = Manrope({
  variable: "--font-site-sans",
  subsets: ["latin"],
  display: "swap",
});

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

export const siteFontVariables = {
  en: manrope.variable,
  ko: notoSansKr.variable,
  ja: notoSansJp.variable,
} as const satisfies Record<SiteLocale, string>;

export const monoFontVariable = geistMono.variable;
