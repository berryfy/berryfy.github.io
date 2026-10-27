# Berryfy 디자인 시스템 — Electric Cobalt

- 토큰 값의 단일 출처: `src/app/globals.css`
- 확인 화면: `pnpm dev` → `/lab/design-system/` (개발 전용, 빌드 제외)

## 원칙

- 어두운 테마가 기본(`themeConfig.defaultTheme = "dark"`), 밝은 테마는 같은 토큰 이름으로 값만 바꾼다.
- 강조색은 코발트 하나. 코발트로 칠한 큰 면은 한 화면에 주요 행동 하나만 둔다.
- 다른 강조색·그라데이션·임의 hex·임의 그림자를 쓰지 않는다. 제품 고유 색은 제품 원화 안에서만 쓴다.
- 깊이는 표면 단계(`background` → `card` → `popover`)와 `border`로 표현한다. 어두운 테마에서 그림자로 띄우지 않는다.

## 색

| 스케일   | 단계              | 용도                                 |
| -------- | ----------------- | ------------------------------------ |
| `cobalt` | 50–950            | 강조색. 기준 `cobalt-500 #326DFE`    |
| `ink`    | 0–1000 (850 포함) | 중립색. 코발트 쪽으로 살짝 기운 회색 |
| `paper`  | `#F5F5F2`         | 어두운 테마 글자, 밝은 테마 바탕     |

| 의미 토큰                             | Dark                        | Light                       | 용도          |
| ------------------------------------- | --------------------------- | --------------------------- | ------------- |
| `background`                          | ink-950                     | paper                       | 페이지 바탕   |
| `card`                                | ink-900                     | ink-0                       | 카드·패널     |
| `popover`                             | ink-850                     | ink-0                       | 메뉴·시트     |
| `secondary` / `-hover`                | ink-800 / 700               | ink-100 / 200               | 보조 버튼·칩  |
| `accent`                              | ink-800                     | ink-100                     | hover 표면    |
| `foreground`                          | paper                       | ink-950                     | 본문          |
| `muted-foreground`                    | ink-400                     | ink-600                     | 보조 글자     |
| `border` / `input`                    | ink-800 / 700               | ink-200                     | 구분선·입력   |
| `primary` / `-hover`                  | cobalt-500 / 600            | cobalt-600 / 700            | 주요 행동     |
| `link`                                | cobalt-300                  | cobalt-600                  | 링크 글자     |
| `ring`                                | cobalt-400                  | cobalt-500                  | 키보드 포커스 |
| `success` · `warning` · `destructive` | #4AC06C · #F5AE39 · #F45058 | #1C8742 · #B67C0D · #B01C2E | 상태          |

- 대비: `primary` 위 글자는 흰색(4.5:1 이상). 코발트를 글자색으로 쓸 때는 `link` 토큰을 쓴다.

## 글꼴

| 역할           | 글꼴                                           | 토큰           |
| -------------- | ---------------------------------------------- | -------------- |
| 제목·글자 로고 | Gabarito (라틴) → 언어별 본문 글꼴             | `font-display` |
| 본문           | EN Figtree · KO Noto Sans KR · JA Noto Sans JP | `font-sans`    |
| 수치·라벨      | Geist Mono                                     | `font-mono`    |

| 타입 토큰                                | 크기 / 행간                 | 용도            |
| ---------------------------------------- | --------------------------- | --------------- |
| `display-xl`                             | clamp(3.25–6.5rem) / 0.92   | 홈 히어로 한 줄 |
| `display-lg`                             | clamp(2.75–4.5rem) / 1      | 페이지 제목     |
| `display-md`                             | clamp(2.25–3.25rem) / 1.05  | 섹션 제목       |
| `title-lg` · `title-md` · `title-sm`     | 2 · 1.5 · 1.25rem           | 카드·소제목     |
| `body-lg` · `body` · `small` · `caption` | 1.125 · 1 · 0.875 · 0.75rem | 본문·보조·라벨  |

- display·title-lg는 `font-display font-extrabold`, 자간 -0.03~-0.045em.

## 모양·레이아웃

| 토큰                               | 값             | 용도                               |
| ---------------------------------- | -------------- | ---------------------------------- |
| `rounded-xs` · `sm` · `md`         | 6 · 10 · 14px  | 포커스 · 작은 썸네일 · 입력·이미지 |
| `rounded-lg` · `xl` · `2xl`        | 20 · 28 · 36px | 카드 · 대표 이미지 · 큰 패널       |
| `rounded-full`                     | —              | 버튼·칩                            |
| `max-w-page` · `max-w-prose`       | 1200 · 720px   | 페이지 폭 · 긴 글 폭               |
| `shadow-raised` · `shadow-overlay` | 테마별         | 밝은 테마 카드 · 메뉴·시트         |

## 컴포넌트

| 컴포넌트  | 파일                        | 규칙                                                                                                                               |
| --------- | --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Button    | `components/ui/button.tsx`  | pill. `sm 36` · `default 44` · `lg 52`px. variant `default`(=primary) · `secondary` · `outline` · `ghost` · `destructive` · `link` |
| Badge     | `components/ui/badge.tsx`   | pill 28px. `default` · `primary` · `outline` · `success` · `warning` · `destructive`. 개발 중은 `default` + 코발트 점              |
| Wordmark  | `components/wordmark.tsx`   | 소문자 `berryfy` + 코발트 점. 크기는 font-size로만 조절                                                                            |
| BrandMark | `components/brand-mark.tsx` | 홈 링크가 달린 Wordmark                                                                                                            |

- 정사각형 자리(파비콘·프로필)는 `b` + 코발트 점 모노그램을 쓴다.
