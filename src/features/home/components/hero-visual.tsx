import Image from "next/image";
import { Sparkles } from "lucide-react";

import { homeAssets } from "@/features/home/constants/assets";
import type { SiteCopy } from "@/features/home/types/home";

interface HeroVisualProps {
  copy: SiteCopy["visual"];
}

export default function HeroVisual({ copy }: HeroVisualProps) {
  return (
    <div
      className="relative mx-auto aspect-[4/5] w-full max-w-[570px] overflow-hidden rounded-[2.25rem] border border-white/80 bg-[#eee6df] shadow-[0_40px_100px_rgba(78,33,64,0.15)] sm:aspect-square lg:mx-0"
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
      <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full border border-white/75 bg-white/82 px-3 py-2 text-xs font-semibold tracking-wide text-[#2d1c32] shadow-sm backdrop-blur-md sm:top-5 sm:right-5">
        <Sparkles className="size-3.5 text-primary" aria-hidden="true" />
        {copy.caption}
      </div>
    </div>
  );
}
