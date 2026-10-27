# Berryfy 디자인 시스템 — Electric Cobalt

- 토큰 값의 단일 출처: `src/app/globals.css`
- 확인 화면: `pnpm dev` → `/lab/design-system/` (개발 전용, 빌드 제외)

## 원칙

- 어두운 테마가 기본(`themeConfig.defaultTheme = "dark"`), 밝은 테마는 같은 토큰 이름으로 값만 바꾼다.
- 강조색은 코발트 하나. 코발트로 칠한 큰 면은 한 화면에 주요 행동 하나만 둔다.
- 다른 강조색·그라데이션·임의 hex·임의 그림자를 쓰지 않는다. 제품 고유 색은 제품 원화 안에서만 쓴다.
- 구분은 선이 아니라 여백·글자 위계(크기·굵기·밝기)·표면 단계(`background` → `card` → `popover`)로 한다. 구분선(`border`)은 표·입력칸·outline 버튼처럼 구조상 필요한 곳에만 쓴다.
- 선 대신 여백으로 나누므로 섹션 사이 여백을 아끼지 않는다. 어두운 테마에서 그림자로 띄우지 않는다.

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

| 컴포넌트         | 파일                                      | 규칙                                                                                                                                                                                                                                                                                     |
| ---------------- | ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Button           | `components/atoms/Button.tsx`             | pill. size `sm 36` · `md 44` · `lg 52`px · `icon-sm`/`icon`/`icon-lg`. variant `primary` · `secondary` · `outline` · `ghost` · `danger` · `link`. `href`면 링크, `external`이면 새 탭                                                                                                    |
| Badge            | `components/atoms/Badge.tsx`              | pill 28px. variant `neutral` · `primary` · `outline` · `success` · `warning` · `danger`. 개발 중은 `neutral`                                                                                                                                                                             |
| Wordmark         | `components/atoms/Wordmark.tsx`           | 소문자 `berryfy` + 코발트 점. 크기는 font-size로만 조절                                                                                                                                                                                                                                  |
| BrandMark        | `components/widgets/BrandMark.tsx`        | 홈 링크가 달린 Wordmark                                                                                                                                                                                                                                                                  |
| LanguageMenu     | `components/widgets/LanguageMenu.tsx`     | 헤더용. 메뉴와 같은 글자로 현재 언어 이름 + 꺾쇠 → 언어 이름·코드 목록. 현재 언어는 굵고 밝은 글자. Esc·바깥 누름·선택 시 닫힘                                                                                                                                                           |
| LanguageSwitcher | `components/widgets/LanguageSwitcher.tsx` | 펼침 없는 언어 이름 목록. 모바일 메뉴·푸터용. 현재 언어는 굵고 밝은 글자                                                                                                                                                                                                                 |
| ThemeToggle      | `components/widgets/ThemeToggle.tsx`      | ghost 아이콘 버튼. 해·달 아이콘 전환                                                                                                                                                                                                                                                     |
| SiteHeader       | `components/widgets/SiteHeader.tsx`       | 고정 헤더 64/72px. 맨 위에서는 바탕과 이어지고, 스크롤하면 구분선 없이 반투명 흐림 바탕. 96px 아래에서 내리면 숨고 올리면 나타남(메뉴가 열렸거나 포커스가 있으면 유지, StickyHeader). BrandMark + 메뉴(선택) + LanguageMenu + ThemeToggle. 메뉴가 있으면 `md` 미만에서 MobileMenu로 전환 |
| HeaderNavigation | `components/widgets/HeaderNavigation.tsx` | `md` 이상 가로 메뉴. 44px 링크, 보조 글자색 → hover 시 본문색                                                                                                                                                                                                                            |
| MobileMenu       | `components/widgets/MobileMenu.tsx`       | `md` 미만. 메뉴 버튼 → 헤더 아래 화면 전체를 덮는 패널(큰 글자 메뉴 + 언어, 구분선 없음). Esc·링크 선택·넓은 화면 전환 시 닫힘                                                                                                                                                           |
| SkipLink         | `components/atoms/SkipLink.tsx`           | 키보드 포커스 때만 보이는 본문 건너뛰기. 대상은 `<main id={mainContentId}>`                                                                                                                                                                                                              |
| SiteFooter       | `components/widgets/SiteFooter.tsx`       | 구분선 없이 위 여백(96/128px)으로 본문과 나눔. 브랜드(글자 로고·한 줄 소개)·메뉴·문의(이메일) 열 + 아래 줄 저작권·LanguageSwitcher. `md` 미만은 한 열                                                                                                                                    |

- 현재 위치·선택 상태는 장식(점·체크·막대) 없이 글자 굵기(`font-semibold`)와 밝기(`foreground` ↔ `muted-foreground`)로만 구분한다. 코발트 점은 글자 로고에만 쓴다.
- 정사각형 자리(파비콘·프로필)는 `b` + 코발트 점 모노그램을 쓴다.
