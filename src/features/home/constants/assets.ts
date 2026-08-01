import type { AppVisual } from "@/features/home/types/home";

export const homeAssets = {
  hero: "/images/home/berryfy-apps-hero-v2.webp",
  featuredApps: {
    potion: "/images/home/potion-sort-quest-v2.webp",
    focus: "/images/home/pomodoro-flow-v2.webp",
    prisma: "/images/home/prisma-ai-wallpaper-v2.webp",
  } satisfies Record<AppVisual, string>,
} as const;
