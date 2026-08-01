import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { homeAssets } from "@/features/home/constants/assets";
import type { FeaturedApp } from "@/features/home/types/home";

interface AppCardProps {
  app: FeaturedApp;
  featuredLabel: string;
  imageSlotLabel: string;
  index: number;
}

export default function AppCard({
  app,
  featuredLabel,
  imageSlotLabel,
  index,
}: AppCardProps) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-border/70 bg-white/72 p-3 shadow-[0_24px_70px_rgba(62,31,50,0.07)] backdrop-blur-sm transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_34px_80px_rgba(62,31,50,0.12)]">
      <div
        className="relative aspect-[5/4] overflow-hidden rounded-[1.45rem] bg-muted"
        data-image-slot={`featured-app-${app.visual}`}
      >
        <Image
          src={homeAssets.featuredApps[app.visual]}
          alt={`${app.name} · ${imageSlotLabel}`}
          fill
          sizes="(min-width: 1280px) 31vw, (min-width: 768px) 46vw, calc(100vw - 64px)"
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.025]"
        />
        <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-black/5 ring-inset" />
        <Badge className="absolute top-4 left-4 h-7 border border-white/55 bg-white/82 px-3 text-foreground shadow-sm backdrop-blur-md">
          {featuredLabel}
        </Badge>
      </div>

      <div className="px-3 pt-6 pb-5 sm:px-4">
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
            {app.category}
          </p>
          <span className="font-mono text-xs text-muted-foreground/60">
            0{index + 1}
          </span>
        </div>
        <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-foreground">
          {app.name}
        </h3>
        <p className="mt-3 text-[0.95rem] leading-7 text-muted-foreground">
          {app.description}
        </p>
      </div>
    </article>
  );
}
