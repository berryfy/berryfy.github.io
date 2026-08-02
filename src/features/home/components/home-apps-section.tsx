import AppCard from "@/features/home/components/app-card";
import { homeSections } from "@/features/home/constants/sections";
import type { SiteCopy } from "@/features/home/types/home";

interface HomeAppsSectionProps {
  copy: SiteCopy["apps"];
}

export default function HomeAppsSection({ copy }: HomeAppsSectionProps) {
  return (
    <section id={homeSections.apps} className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-end gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.55fr)]">
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
              {copy.eyebrow}
            </p>
            <h2 className="mt-4 max-w-[830px] text-[clamp(2.6rem,5vw,4.8rem)] leading-[0.98] font-semibold tracking-[-0.06em] text-foreground">
              {copy.title}
            </h2>
          </div>
          <p className="max-w-[560px] text-base leading-8 text-muted-foreground lg:justify-self-end">
            {copy.description}
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {copy.items.map((app, index) => (
            <AppCard
              key={app.name}
              app={app}
              featuredLabel={copy.featuredLabel}
              imageSlotLabel={copy.imageSlotLabel}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
