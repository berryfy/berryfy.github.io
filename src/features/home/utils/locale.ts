import { localeDetails } from "@/constants/site";
import type { SiteLocale } from "@/types/site";

export function homePath(locale: SiteLocale): string {
  return localeDetails[locale].path;
}
