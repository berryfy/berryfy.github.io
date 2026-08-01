import { moreAppsLocales } from "@/features/more-apps/constants/more-apps-copy";
import type { SiteLocale } from "@/types/site";

export function isMoreAppsLocale(locale: string): locale is SiteLocale {
  return moreAppsLocales.some((item) => item === locale);
}
