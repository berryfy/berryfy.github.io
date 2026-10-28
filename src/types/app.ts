import type { SiteLocale } from "@/types/site";

export type AppGroup = "game" | "tool" | "fandom";

export interface PublishedAppCopy {
  name: string;
  category: string;
  description: string;
}

export interface PublishedApp {
  packageName: string;
  // game: 게임, tool: 일상 도구, fandom: K-POP 팬 앱 시리즈
  group: AppGroup;
  iconPath: string;
  storeUrl: string;
  copy: Record<SiteLocale, PublishedAppCopy>;
}
