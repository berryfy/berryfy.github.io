import Image from "next/image";
import { Gamepad2, Palette, Timer } from "lucide-react";

import { homeAssets } from "@/features/home/constants/assets";
import type { SiteCopy } from "@/features/home/types/home";

interface HeroVisualProps {
  copy: SiteCopy["visual"];
}

export default function HeroVisual({ copy }: HeroVisualProps) {
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[570px] overflow-hidden rounded-[2.25rem] border border-white/80 bg-[#eee6df] shadow-[0_40px_100px_rgba(78,33,64,0.15)] lg:mx-0"
      data-image-slot="hero-app-preview"
    >
      <Image
        src={homeAssets.hero}
        alt={copy.caption}
        fill
        preload
        sizes="(min-width: 1024px) 40vw, (min-width: 640px) 570px, calc(100vw - 40px)"
        className="object-cover"
      />
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-black/5 ring-inset" />
      <div className="absolute inset-x-4 bottom-4 grid grid-cols-3 gap-1 rounded-2xl border border-white/15 bg-[#211425]/82 p-1.5 text-white shadow-[0_16px_45px_rgba(31,18,35,0.24)] backdrop-blur-xl sm:inset-x-5 sm:bottom-5 sm:gap-2 sm:p-2">
        <span className="flex min-w-0 items-center justify-center gap-1.5 rounded-xl px-1.5 py-2 text-[0.68rem] font-semibold sm:text-xs">
          <Gamepad2 className="size-3.5 text-[#ff8dae]" aria-hidden="true" />
          {copy.play}
        </span>
        <span className="flex min-w-0 items-center justify-center gap-1.5 rounded-xl bg-white/10 px-1.5 py-2 text-[0.68rem] font-semibold sm:text-xs">
          <Timer className="size-3.5 text-[#9ce9c7]" aria-hidden="true" />
          {copy.focus}
        </span>
        <span className="flex min-w-0 items-center justify-center gap-1.5 rounded-xl px-1.5 py-2 text-[0.68rem] font-semibold sm:text-xs">
          <Palette className="size-3.5 text-[#c9aeff]" aria-hidden="true" />
          {copy.create}
        </span>
      </div>
    </div>
  );
}
