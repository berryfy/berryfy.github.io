import type { AppGroup } from "@/types/app";

// 제품 섹션 순서와 영어 제목. 제목은 슬로건처럼 모든 언어에서 영어로 쓰고 설명만 각 언어로 둔다.
export const productGroups = [
  { group: "game", title: "Play." },
  { group: "tool", title: "Tools." },
  { group: "fandom", title: "Fandom." },
] as const satisfies readonly { group: AppGroup; title: string }[];
