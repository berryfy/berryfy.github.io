import type { SiteLocale } from "@/types/site";

export const themeConfig = {
  defaultTheme: "system",
  storageKey: "berryfy-theme",
} as const;

export const themeToggleLabels: Record<SiteLocale, string> = {
  en: "Toggle color theme",
  ko: "색상 테마 전환",
  ja: "カラーテーマを切り替える",
};
