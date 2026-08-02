import { homeSections } from "@/features/home/constants/sections";
import type { SiteCopy } from "@/features/home/types/home";

interface HomePrinciplesSectionProps {
  copy: SiteCopy["principles"];
}

export default function HomePrinciplesSection({
  copy,
}: HomePrinciplesSectionProps) {
  return (
    <section
      id={homeSections.principles}
      className="scroll-mt-20 py-24 sm:py-32 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
          {copy.eyebrow}
        </p>
        <h2 className="mt-4 max-w-[900px] text-[clamp(2.6rem,5vw,4.8rem)] leading-[1.02] font-semibold tracking-[-0.06em] text-foreground">
          {copy.title}
        </h2>

        <div className="mt-14 grid border-y border-border lg:grid-cols-3">
          {copy.items.map((item, index) => (
            <article
              key={item.title}
              className="border-b border-border py-9 last:border-b-0 lg:border-r lg:border-b-0 lg:px-9 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
            >
              <p className="font-mono text-xs text-primary">0{index + 1}</p>
              <h3 className="mt-9 text-2xl font-semibold tracking-[-0.04em] text-foreground">
                {item.title}
              </h3>
              <p className="mt-4 max-w-sm leading-7 text-muted-foreground">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
