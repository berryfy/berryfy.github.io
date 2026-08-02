import Link from "next/link";
import { ArrowDownRight, ArrowRight, Heart } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import HeroVisual from "@/features/home/components/hero-visual";
import { homeSections } from "@/features/home/constants/sections";
import type { SiteCopy } from "@/features/home/types/home";

interface HomeHeroSectionProps {
  basePath: string;
  copy: Pick<SiteCopy, "hero" | "visual">;
}

export default function HomeHeroSection({
  basePath,
  copy,
}: HomeHeroSectionProps) {
  return (
    <section className="relative">
      <div className="pointer-events-none absolute top-10 left-[-14rem] size-[34rem] rounded-full bg-primary/[0.07] blur-3xl" />
      <div className="mx-auto grid min-h-[calc(100svh-76px)] max-w-[1440px] items-center gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(430px,0.85fr)] lg:gap-20 lg:px-12 lg:py-24">
        <div className="relative z-10 max-w-[720px]">
          <Badge
            variant="outline"
            className="h-8 border-primary/20 bg-card/65 px-3 text-primary backdrop-blur-sm"
          >
            <span className="size-1.5 rounded-full bg-primary" />
            {copy.hero.eyebrow}
          </Badge>
          <h1 className="mt-7 text-[clamp(3.45rem,7.5vw,7.2rem)] leading-[0.91] font-semibold tracking-[-0.07em] whitespace-pre-line text-foreground">
            {copy.hero.title}
          </h1>
          <p className="mt-8 max-w-[640px] text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
            {copy.hero.description}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="h-13 rounded-full bg-primary px-6 text-base shadow-[0_14px_32px_rgba(217,45,99,0.22)] hover:bg-[#c92559]"
            >
              <Link href={`${basePath}#${homeSections.apps}`}>
                {copy.hero.primaryAction}
                <ArrowDownRight aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-13 rounded-full border-border bg-card/65 px-6 text-base hover:bg-card"
            >
              <Link href={`${basePath}#${homeSections.studio}`}>
                {copy.hero.secondaryAction}
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>

          <div className="mt-12 flex max-w-[550px] items-start gap-4 border-t border-border/80 pt-6">
            <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-[#dff8ee] text-[#297b5a]">
              <Heart className="size-4" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">
                {copy.hero.benefitLabel}
              </p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                {copy.hero.benefitValue}
              </p>
            </div>
          </div>
        </div>

        <HeroVisual copy={copy.visual} />
      </div>
    </section>
  );
}
