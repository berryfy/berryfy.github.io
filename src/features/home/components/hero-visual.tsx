import { Gamepad2, Sparkles, Timer, WandSparkles } from "lucide-react";

import type { SiteCopy } from "@/features/home/types/home";

interface HeroVisualProps {
  copy: SiteCopy["visual"];
}

export default function HeroVisual({ copy }: HeroVisualProps) {
  return (
    <div
      className="relative mx-auto aspect-[4/5] w-full max-w-[570px] overflow-hidden rounded-[2.25rem] border border-white/80 bg-[linear-gradient(145deg,#ffdbe8_0%,#fff7ee_44%,#dff8ee_100%)] shadow-[0_40px_100px_rgba(78,33,64,0.15)] sm:aspect-square lg:mx-0"
      data-image-slot="hero-app-preview"
      aria-label={copy.caption}
    >
      <div className="absolute -top-[12%] -right-[14%] size-[48%] rounded-full border-[24px] border-white/40" />
      <div className="absolute -bottom-[18%] -left-[14%] size-[52%] rounded-full bg-primary/10 blur-sm" />
      <div className="absolute top-[12%] left-[10%] flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-3 py-2 text-xs font-semibold tracking-wide text-foreground shadow-sm backdrop-blur-md">
        <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
        {copy.caption}
      </div>

      <div className="hero-float absolute top-[24%] left-[8%] w-[48%] -rotate-[8deg] rounded-[1.75rem] border border-white/90 bg-[#33203a] p-4 text-white shadow-[0_30px_55px_rgba(40,23,45,0.24)] sm:p-5">
        <div className="mb-10 flex items-center justify-between">
          <div className="flex size-11 items-center justify-center rounded-2xl bg-[#ff668f]">
            <Gamepad2 aria-hidden="true" />
          </div>
          <span className="size-2 rounded-full bg-[#7ce2b4]" />
        </div>
        <p className="text-xs font-medium text-white/60">01</p>
        <p className="mt-1 text-xl font-semibold tracking-tight">{copy.play}</p>
      </div>

      <div className="hero-float-delayed absolute top-[17%] right-[8%] w-[41%] rotate-[7deg] rounded-[1.75rem] border border-white/90 bg-[#fffdfb] p-4 shadow-[0_30px_55px_rgba(88,49,75,0.16)] sm:p-5">
        <div className="mb-8 flex size-11 items-center justify-center rounded-2xl bg-[#ffe2a9] text-[#70480d]">
          <Timer aria-hidden="true" />
        </div>
        <div className="flex items-end gap-1.5" aria-hidden="true">
          <span className="h-8 w-2 rounded-full bg-[#ffd274]" />
          <span className="h-12 w-2 rounded-full bg-primary" />
          <span className="h-6 w-2 rounded-full bg-[#7ce2b4]" />
        </div>
        <p className="mt-3 font-semibold tracking-tight text-foreground">
          {copy.focus}
        </p>
      </div>

      <div className="hero-float absolute right-[13%] bottom-[9%] w-[54%] rotate-[2deg] rounded-[1.75rem] border border-white/90 bg-[linear-gradient(145deg,#975cff,#d94686)] p-5 text-white shadow-[0_32px_60px_rgba(125,62,151,0.25)] sm:p-6">
        <div className="relative mb-8 h-24 overflow-hidden rounded-2xl bg-white/15">
          <div className="absolute top-4 left-5 size-16 rounded-full bg-[#7ce2b4]/80 blur-[1px]" />
          <div className="absolute top-8 right-2 size-20 rounded-full bg-[#ffd166]/80 mix-blend-screen" />
          <div className="absolute right-8 bottom-[-30%] size-20 rotate-45 rounded-[1.4rem] bg-white/60" />
        </div>
        <div className="flex items-center justify-between">
          <p className="text-lg font-semibold tracking-tight">{copy.create}</p>
          <WandSparkles className="size-5" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
}
