import { gameLocalePaths } from "@/constants/site";

export const featuredGames = [
  {
    id: "lulus-potion-shop",
    paths: gameLocalePaths,
    name: "Lulu’s Potion Shop",
    image: "/images/games/lulus_potion_shop.webp",
    width: 1795,
    height: 876,
    storeUrl:
      "https://play.google.com/store/apps/details?id=com.berryfy.potion_sort_quest",
    copy: {
      en: {
        category: "Cozy puzzle · Android",
        tagline: "Mix potions. Make friends. Settle in.",
        description:
          "Help apprentice witch Lulu fill potion orders and get to know the customers who keep coming back.",
        imageAlt:
          "Lulu, her friends and Mochi the cat sharing a lively afternoon in the potion shop",
      },
      ko: {
        category: "포션 정렬 퍼즐 · Android",
        tagline: "어서 오세요, 루루의 포션 가게예요.",
        description:
          "같은 색 포션을 모아 주문을 완성해요. 손님들과 수다도 떨고, 작은 가게도 조금씩 키워 보세요.",
        imageAlt:
          "포션 가게에서 루루와 친구들, 고양이 모치가 함께 보내는 활기찬 오후",
      },
      ja: {
        category: "色分けパズル · Android",
        tagline: "ルルのポーション屋さんへようこそ。",
        description:
          "同じ色のポーションを集めて注文を完成。常連さんとのおしゃべりを楽しみながら、お店を少しずつ育てましょう。",
        imageAlt:
          "ポーション屋さんでルルと仲間たち、猫のモチが過ごすにぎやかな午後",
      },
    },
  },
] as const;
