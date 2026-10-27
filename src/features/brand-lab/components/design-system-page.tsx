import type { ReactNode } from "react";
import { ArrowRight, Heart, Play } from "lucide-react";

import Wordmark from "@/components/wordmark";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  colorScales,
  radii,
  semanticColors,
  typeScale,
} from "@/features/brand-lab/constants/design-tokens";

const principles = [
  "바탕은 어둡게, 강조색은 코발트 하나. 한 화면에서 코발트로 칠한 큰 면은 주요 행동 하나뿐입니다.",
  "깊이는 그림자가 아니라 표면 단계(background → card → popover)와 테두리로 표현합니다.",
  "제목은 Gabarito, 본문은 언어별 글꼴. 글자 크기는 타입 스케일 토큰만 씁니다.",
  "버튼·칩은 pill, 카드는 lg 모서리. 누를 수 있는 요소는 높이 44px 이상입니다.",
  "제품 그림이 주인공입니다. 브랜드 색은 그림을 담는 틀로만 씁니다.",
];

function Section({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <section className="grid gap-6 border-t border-border py-12 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] lg:gap-12">
      <div>
        <h2 className="font-display text-title-md font-extrabold tracking-[-0.03em]">
          {title}
        </h2>
        <p className="mt-2 text-small text-muted-foreground">{description}</p>
      </div>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

function ThemePair({ children }: { children: ReactNode }) {
  return (
    <div className="grid gap-4 xl:grid-cols-2">
      {(["dark", "light"] as const).map((theme) => (
        <div
          key={theme}
          className={`${theme} min-w-0 rounded-xl border border-border bg-background p-5 text-foreground sm:p-6`}
        >
          <p className="mb-5 font-mono text-caption text-muted-foreground">
            {theme === "dark" ? "Dark · 기본" : "Light"}
          </p>
          {children}
        </div>
      ))}
    </div>
  );
}

export default function DesignSystemPage() {
  return (
    <main className="dark min-h-screen bg-background px-4 py-12 text-foreground sm:px-8 lg:px-12">
      <div className="mx-auto max-w-page">
        <header className="pb-12">
          <p className="font-mono text-caption text-muted-foreground">
            Brand Lab · dev only
          </p>
          <h1 className="mt-3 font-display text-display-lg font-extrabold tracking-[-0.045em]">
            Electric Cobalt
          </h1>
          <p className="mt-4 max-w-prose text-body-lg text-muted-foreground">
            berryfy 디자인 시스템. 검정에 가까운 바탕 위에 코발트 하나로
            기억되고, 앱과 게임의 그림을 돋보이게 하는 틀입니다.
          </p>
          <ol className="mt-8 grid max-w-prose gap-3 text-small">
            {principles.map((principle, index) => (
              <li key={principle} className="flex gap-3">
                <span className="font-mono text-caption leading-[1.6rem] text-link">
                  {index + 1}
                </span>
                <span>{principle}</span>
              </li>
            ))}
          </ol>
        </header>

        <Section
          title="Wordmark"
          description="소문자 berryfy + 코발트 점. 정사각형 자리에는 b + 점 모노그램을 씁니다."
        >
          <ThemePair>
            <div className="flex flex-wrap items-end gap-x-10 gap-y-6">
              <Wordmark className="text-5xl" />
              <Wordmark className="text-2xl" />
              <span className="grid size-16 place-items-center rounded-lg bg-card">
                <span className="inline-flex items-baseline font-display text-[2.5rem] leading-none font-extrabold tracking-[-0.04em]">
                  b
                  <span className="ml-[0.04em] inline-block size-[0.28em] rounded-full bg-primary" />
                </span>
              </span>
            </div>
          </ThemePair>
        </Section>

        <Section
          title="Color scales"
          description="원시 색 스케일. 컴포넌트에서는 직접 쓰지 않고 아래 의미 토큰을 거칩니다."
        >
          <div className="grid gap-6">
            {colorScales.map((scale) => (
              <div key={scale.prefix}>
                <p className="mb-2 text-small font-semibold">{scale.name}</p>
                <ul className="grid grid-cols-[repeat(auto-fill,minmax(4.5rem,1fr))] gap-2">
                  {scale.steps.map((step) => (
                    <li key={step} className="min-w-0">
                      <span
                        className="block h-12 rounded-sm ring-1 ring-white/10"
                        style={{
                          backgroundColor: `var(--color-${scale.prefix}-${step})`,
                        }}
                      />
                      <span className="mt-1 block font-mono text-caption text-muted-foreground">
                        {step}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section
          title="Semantic colors"
          description="화면에서 쓰는 의미 토큰. 테마마다 값이 바뀌고 이름은 같습니다."
        >
          <ThemePair>
            <ul className="grid gap-2">
              {semanticColors.map((color) => (
                <li key={color.token} className="flex items-center gap-3">
                  <span
                    className="size-8 shrink-0 rounded-sm ring-1 ring-current/15"
                    style={{ backgroundColor: `var(--${color.token})` }}
                  />
                  <span className="min-w-0">
                    <span className="block font-mono text-caption">
                      {color.token}
                    </span>
                    <span className="block text-caption text-muted-foreground">
                      {color.role}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </ThemePair>
        </Section>

        <Section
          title="Typography"
          description="Gabarito(제목·라틴) + 언어별 본문 글꼴 + Geist Mono(수치·라벨). display 단계는 화면 폭에 따라 줄어듭니다."
        >
          <ul className="grid gap-6">
            {typeScale.map((type) => (
              <li
                key={type.token}
                className="grid gap-1 sm:grid-cols-[7rem_minmax(0,1fr)] sm:items-baseline sm:gap-6"
              >
                <span className="font-mono text-caption text-muted-foreground">
                  {type.token}
                </span>
                <span className={`min-w-0 ${type.className}`}>
                  {type.sample}
                </span>
              </li>
            ))}
          </ul>
        </Section>

        <Section
          title="Radius"
          description="버튼·칩은 full, 카드는 lg를 기본으로 합니다."
        >
          <ul className="grid grid-cols-[repeat(auto-fill,minmax(7rem,1fr))] gap-4">
            {radii.map((radius) => (
              <li key={radius.token}>
                <span
                  className={`block h-16 border border-border bg-card ${radius.className}`}
                />
                <span className="mt-2 block font-mono text-caption">
                  {radius.token}
                </span>
                <span className="block text-caption text-muted-foreground">
                  {radius.use}
                </span>
              </li>
            ))}
          </ul>
        </Section>

        <Section
          title="Buttons"
          description="primary는 한 화면의 주요 행동 하나에만 씁니다. 나머지는 secondary·outline·ghost로 처리합니다."
        >
          <ThemePair>
            <div className="grid gap-5">
              <div className="flex flex-wrap gap-2">
                <Button>
                  위시리스트에 추가
                  <Heart aria-hidden="true" />
                </Button>
                <Button variant="secondary">개발 노트</Button>
                <Button variant="outline">모든 제품</Button>
                <Button variant="ghost">더 보기</Button>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Button size="sm">Small</Button>
                <Button>Default</Button>
                <Button size="lg">
                  Large
                  <ArrowRight aria-hidden="true" />
                </Button>
                <Button size="icon" variant="secondary" aria-label="영상 재생">
                  <Play aria-hidden="true" />
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="link">개인정보처리방침</Button>
                <Button variant="destructive">삭제</Button>
                <Button disabled>준비 중</Button>
              </div>
            </div>
          </ThemePair>
        </Section>

        <Section
          title="Badges"
          description="제품 상태와 분류. 상태는 점 하나와 상태색으로, 분류는 outline으로 표시합니다."
        >
          <ThemePair>
            <div className="flex flex-wrap gap-2">
              <Badge>
                <span className="size-1.5 rounded-full bg-primary" />
                개발 중
              </Badge>
              <Badge variant="success">출시</Badge>
              <Badge variant="primary">NEW</Badge>
              <Badge variant="outline">게임</Badge>
              <Badge variant="outline">앱 · 생산성</Badge>
              <Badge variant="warning">점검 예정</Badge>
              <Badge variant="destructive">지원 종료</Badge>
            </div>
          </ThemePair>
        </Section>

        <Section
          title="Product card"
          description="앱과 게임을 같은 형식으로 보여주는 카드. 그림 자리는 제품 원화가 채웁니다."
        >
          <ThemePair>
            <article className="overflow-hidden rounded-lg border border-border bg-card text-card-foreground shadow-raised">
              <div className="aspect-[16/9] bg-secondary" />
              <div className="grid gap-3 p-5">
                <div className="flex flex-wrap gap-2">
                  <Badge>
                    <span className="size-1.5 rounded-full bg-primary" />
                    개발 중
                  </Badge>
                  <Badge variant="outline">게임</Badge>
                </div>
                <h3 className="font-display text-title-lg font-extrabold tracking-[-0.03em]">
                  Nyan Paradise
                </h3>
                <p className="text-small text-muted-foreground">
                  손님들이 쉬어 가는 작은 섬 리조트를 꾸리는 경영 게임.
                </p>
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-4">
                  <span className="font-mono text-caption text-muted-foreground">
                    Steam · Android
                  </span>
                  <Button size="sm">위시리스트</Button>
                </div>
              </div>
            </article>
          </ThemePair>
        </Section>
      </div>
    </main>
  );
}
