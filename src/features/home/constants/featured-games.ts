import type { SiteLocale } from "@/types/site";

export const featuredGamesCopy = {
  en: {
    label: "Featured",
    title: "Find your next favorite.",
    action: "Explore the game",
  },
  ko: {
    label: "추천 작품",
    title: "오늘은 이 게임 어때요?",
    action: "게임 알아보기",
  },
  ja: {
    label: "おすすめ",
    title: "次は、こんなゲームはいかが？",
    action: "ゲームを詳しく見る",
  },
} as const satisfies Record<
  SiteLocale,
  { label: string; title: string; action: string }
>;
