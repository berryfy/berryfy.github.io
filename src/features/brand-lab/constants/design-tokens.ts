// 스타일가이드 표시용 토큰 이름 목록. 값은 src/app/globals.css가 단일 출처다.
export const colorScales = [
  {
    name: "Cobalt",
    prefix: "cobalt",
    steps: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  },
  {
    name: "Ink",
    prefix: "ink",
    steps: [0, 50, 100, 200, 300, 400, 500, 600, 700, 800, 850, 900, 950, 1000],
  },
] as const;

export const semanticColors = [
  { token: "background", role: "페이지 바탕" },
  { token: "card", role: "카드·패널 표면" },
  { token: "popover", role: "메뉴·시트 표면" },
  { token: "secondary", role: "보조 버튼·칩" },
  { token: "foreground", role: "본문 글자" },
  { token: "muted-foreground", role: "보조 글자" },
  { token: "border", role: "구분선·테두리" },
  { token: "primary", role: "강조색 · 주요 행동 하나" },
  { token: "link", role: "링크 글자" },
  { token: "ring", role: "키보드 포커스" },
  { token: "success", role: "완료·출시" },
  { token: "warning", role: "주의" },
  { token: "destructive", role: "오류·삭제" },
] as const;

export const typeScale = [
  {
    token: "display-xl",
    className: "text-display-xl font-display font-extrabold tracking-[-0.04em]",
    sample: "Berryfy your day.",
  },
  {
    token: "display-lg",
    className: "text-display-lg font-display font-extrabold tracking-[-0.04em]",
    sample: "Small games, good days.",
  },
  {
    token: "display-md",
    className: "text-display-md font-display font-extrabold tracking-[-0.04em]",
    sample: "지금 자라는 제품들",
  },
  {
    token: "title-lg",
    className: "text-title-lg font-display font-extrabold tracking-[-0.04em]",
    sample: "Nyan Paradise",
  },
  {
    token: "title-md",
    className: "text-title-md font-sans font-semibold tracking-[-0.01em]",
    sample: "섬을 꾸미고 손님을 맞이하세요",
  },
  {
    token: "title-sm",
    className: "text-title-sm font-sans font-semibold tracking-[-0.01em]",
    sample: "개발 노트 #7 · 새 가게 추가",
  },
  {
    token: "body-lg",
    className: "text-body-lg font-sans",
    sample: "잠깐 쉬어 가는 시간에 딱 맞는 앱과 게임을 만들어요.",
  },
  {
    token: "body",
    className: "text-body font-sans",
    sample:
      "berryfy는 Android와 Steam에서 만날 수 있는 작은 앱과 게임을 만듭니다.",
  },
  {
    token: "small",
    className: "text-small font-sans",
    sample: "Steam · Android · EN · KO · JA",
  },
  {
    token: "caption",
    className: "text-caption font-mono",
    sample: "UPDATED 2026-10-27 · v0.4.2",
  },
] as const;

export const radii = [
  { token: "xs", className: "rounded-xs", use: "링크 포커스" },
  { token: "sm", className: "rounded-sm", use: "작은 썸네일" },
  { token: "md", className: "rounded-md", use: "입력·이미지" },
  { token: "lg", className: "rounded-lg", use: "카드" },
  { token: "xl", className: "rounded-xl", use: "대표 이미지" },
  { token: "2xl", className: "rounded-2xl", use: "큰 패널" },
  { token: "full", className: "rounded-full", use: "버튼·칩" },
] as const;
