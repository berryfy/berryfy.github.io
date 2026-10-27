import type { SiteLocale } from "@/types/site";

export interface PublishedAppCopy {
  name: string;
  category: string;
  description: string;
}

export interface PublishedApp {
  packageName: string;
  // fandom: K-POP 팬 앱 시리즈, general: 그 외 앱·게임
  group: "fandom" | "general";
  iconPath: string;
  storeUrl: string;
  copy: Record<SiteLocale, PublishedAppCopy>;
}
