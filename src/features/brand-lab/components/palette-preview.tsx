import type { CSSProperties } from "react";

import type { PaletteTheme } from "@/features/brand-lab/types/palette";

interface PalettePreviewProps {
  label: string;
  theme: PaletteTheme;
}

export default function PalettePreview({ label, theme }: PalettePreviewProps) {
  const style = {
    "--p-bg": theme.background,
    "--p-surface": theme.surface,
    "--p-text": theme.text,
    "--p-muted": theme.mutedText,
    "--p-primary": theme.primary,
    "--p-on-primary": theme.onPrimary,
    "--p-secondary": theme.secondary,
    "--p-on-secondary": theme.onSecondary,
  } as CSSProperties;

  return (
    <div
      style={style}
      className="flex min-w-0 flex-col gap-5 rounded-2xl bg-(--p-bg) p-5 text-(--p-text) sm:p-6"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-2xl font-extrabold tracking-[-0.04em]">
          berryfy
          <span className="text-(--p-primary)">.</span>
        </span>
        <span className="font-mono text-xs text-(--p-muted)">{label}</span>
      </div>

      <p className="text-sm leading-6 text-(--p-muted)">
        일상을 위한 앱과 게임을 만들어요.{" "}
        <span className="font-semibold text-(--p-text) underline decoration-(--p-primary) decoration-2 underline-offset-4">
          제품 보기
        </span>
      </p>

      <div className="flex flex-wrap gap-2">
        <span className="inline-flex h-11 items-center rounded-full bg-(--p-primary) px-5 text-sm font-bold text-(--p-on-primary)">
          위시리스트에 추가
        </span>
        <span className="inline-flex h-11 items-center rounded-full bg-(--p-secondary) px-5 text-sm font-bold text-(--p-on-secondary)">
          개발 노트
        </span>
      </div>

      <div className="rounded-xl bg-(--p-surface) p-4">
        <div className="flex gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-(--p-secondary) px-2.5 py-1 text-xs font-bold text-(--p-on-secondary)">
            <span className="size-1.5 rounded-full bg-(--p-primary)" />
            개발 중
          </span>
          <span className="rounded-full border border-current/15 px-2.5 py-1 text-xs text-(--p-muted)">
            게임
          </span>
        </div>
        <p className="mt-3 text-lg font-extrabold tracking-[-0.02em]">
          Nyan Paradise
        </p>
        <p className="mt-1 text-sm leading-6 text-(--p-muted)">
          손님들이 쉬어 가는 작은 섬 리조트를 꾸리는 경영 게임.
        </p>
      </div>

      <div className="relative aspect-video overflow-hidden rounded-xl bg-(--p-surface) p-4">
        <span className="font-mono text-[0.65rem] text-(--p-muted)">
          YouTube 썸네일
        </span>
        <p className="mt-2 max-w-[12em] text-2xl leading-tight font-black tracking-[-0.03em]">
          섬 꾸미기 <span className="text-(--p-primary)">7일째</span>
        </p>
        <span className="absolute right-4 bottom-4 rounded-md bg-(--p-primary) px-2 py-1 text-xs font-bold text-(--p-on-primary)">
          DEVLOG #7
        </span>
      </div>
    </div>
  );
}
