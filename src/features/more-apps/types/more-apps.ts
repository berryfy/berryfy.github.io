import type { SiteLocale } from "@/types/site";

export interface MoreAppCopy {
  name: string;
  category: string;
  description: string;
}

export interface MoreApp {
  packageName: string;
  iconPath: string;
  storeUrl: string;
  copy: Record<SiteLocale, MoreAppCopy>;
}

export interface MoreAppsPageCopy {
  eyebrow: string;
  title: string;
  description: string;
  appActionLabel: string;
  storeActionLabel: string;
  availabilityNote: string;
}
