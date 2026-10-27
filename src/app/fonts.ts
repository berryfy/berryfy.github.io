import {
  Figtree,
  Gabarito,
  Geist_Mono,
  Noto_Sans_JP,
  Noto_Sans_KR,
} from "next/font/google";

import type { SiteLocale } from "@/types/site";

const figtree = Figtree({
  variable: "--font-site-sans",
  subsets: ["latin"],
  display: "swap",
});

// 제목·글자 로고용 라틴 글꼴. 한글·일본어 글리프는 언어별 본문 글꼴로 이어진다.
const gabarito = Gabarito({
  variable: "--font-site-display",
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
  en: figtree.variable,
  ko: notoSansKr.variable,
  ja: notoSansJp.variable,
} as const satisfies Record<SiteLocale, string>;

export const monoFontVariable = geistMono.variable;
export const displayFontVariable = gabarito.variable;
