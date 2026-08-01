import type { SiteLocale } from "@/types/site";

export function googlePlayUrlForLocale(
  storeUrl: string,
  locale: SiteLocale,
): string {
  const url = new URL(storeUrl);
  url.searchParams.set("hl", locale);
  return url.toString();
}
