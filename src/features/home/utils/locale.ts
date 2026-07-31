import {
  localeDetails,
  siteLocales,
} from "@/features/home/constants/site-content";
import type { SiteLocale } from "@/features/home/types/home";

export function isSiteLocale(value: string): value is SiteLocale {
  return siteLocales.includes(value as SiteLocale);
}

export function homePath(locale: SiteLocale): string {
  return localeDetails[locale].path;
}
