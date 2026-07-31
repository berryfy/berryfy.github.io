import { localeDetails, siteLocales } from "@/constants/site";
import type { SiteLocale } from "@/types/site";

export function isSiteLocale(value: string): value is SiteLocale {
  return siteLocales.includes(value as SiteLocale);
}

export function homePath(locale: SiteLocale): string {
  return localeDetails[locale].path;
}
