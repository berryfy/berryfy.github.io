import { FlaskConical, Focus, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { FeaturedApp } from "@/features/home/types/home";

interface AppCardProps {
  app: FeaturedApp;
  featuredLabel: string;
  imageSlotLabel: string;
  index: number;
}

const visualStyles = {
  potion: {
    frame: "bg-[linear-gradient(145deg,#fff0f5,#f9d3e0)]",
    tile: "bg-[#33203a] text-white",
    glow: "bg-[#ff6f9a]",
    Icon: FlaskConical,
  },
  focus: {
    frame: "bg-[linear-gradient(145deg,#fff4db,#f7e1af)]",
    tile: "bg-[#fffdf9] text-[#6f490d]",
    glow: "bg-[#f9bd48]",
    Icon: Focus,
  },
  prisma: {
    frame: "bg-[linear-gradient(145deg,#eee3ff,#d9f7ed)]",
    tile: "bg-[linear-gradient(145deg,#7448d7,#da3f82)] text-white",
    glow: "bg-[#71ddb0]",
    Icon: Sparkles,
  },
} as const;

export default function AppCard({
  app,
  featuredLabel,
  imageSlotLabel,
  index,
}: AppCardProps) {
  const visual = visualStyles[app.visual];
  const Icon = visual.Icon;

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-border/70 bg-white/72 p-3 shadow-[0_24px_70px_rgba(62,31,50,0.07)] backdrop-blur-sm transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_34px_80px_rgba(62,31,50,0.12)]">
      <div
        className={cn(
          "relative aspect-[5/4] overflow-hidden rounded-[1.45rem]",
          visual.frame,
        )}
        data-image-slot={`featured-app-${app.visual}`}
        aria-label={`${app.name} · ${imageSlotLabel}`}
      >
        <span
          className={cn(
            "absolute -top-[18%] -right-[12%] size-[58%] rounded-full opacity-35 blur-2xl",
            visual.glow,
          )}
        />
        <span className="absolute -bottom-[24%] -left-[10%] size-[52%] rounded-full border-[18px] border-white/35" />
        <div
          className={cn(
            "absolute inset-x-[19%] top-[13%] bottom-[-12%] rotate-[-3deg] rounded-[2rem] border-[5px] border-white/80 p-4 shadow-[0_28px_55px_rgba(44,23,39,0.18)] transition duration-500 group-hover:scale-[1.03] group-hover:rotate-0",
            visual.tile,
          )}
        >
          <div className="flex items-center justify-between">
            <span className="flex size-11 items-center justify-center rounded-2xl bg-white/18 shadow-inner">
              <Icon aria-hidden="true" />
            </span>
            <span className="font-mono text-xs opacity-50">0{index + 1}</span>
          </div>
          <div className="absolute inset-x-4 bottom-8">
            <div className="mb-3 h-1.5 w-14 rounded-full bg-current opacity-20" />
            <div className="h-1.5 w-24 rounded-full bg-current opacity-10" />
          </div>
        </div>
        <Badge className="absolute top-4 left-4 h-7 bg-white/85 px-3 text-foreground shadow-sm backdrop-blur-sm">
          {featuredLabel}
        </Badge>
      </div>

      <div className="px-3 pt-6 pb-5 sm:px-4">
        <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
          {app.category}
        </p>
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
