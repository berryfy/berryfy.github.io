import type { AppVisual } from "@/features/home/types/home";

export const homeAssets = {
  hero: "/images/home/berryfy-hero.webp",
  featuredApps: {
    potion: "/images/home/potion-sort-quest.webp",
    focus: "/images/home/pomodoro-flow.webp",
    prisma: "/images/home/prisma-ai-wallpaper.webp",
  } satisfies Record<AppVisual, string>,
} as const;
