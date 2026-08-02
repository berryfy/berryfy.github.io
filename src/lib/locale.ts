import { siteLocales } from "@/constants/site";
import type { SiteLocale } from "@/types/site";

export function isSiteLocale(value: string): value is SiteLocale {
  return siteLocales.some((locale) => locale === value);
}
