import { homeSections } from "@/features/home/constants/sections";
import type { SiteCopy } from "@/features/home/types/home";

interface HomeStudioSectionProps {
  copy: SiteCopy["studio"];
}

export default function HomeStudioSection({ copy }: HomeStudioSectionProps) {
  return (
    <section
      id={homeSections.studio}
      className="scroll-mt-20 px-5 py-12 sm:px-8 lg:px-12"
    >
      <div className="relative mx-auto max-w-[1344px] overflow-hidden rounded-[2.5rem] bg-[#2d1c32] px-6 py-16 text-white sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <div className="absolute top-[-7rem] right-[-5rem] size-[25rem] rounded-full border-[50px] border-[#ff5d8f]/20" />
        <div className="absolute bottom-[-12rem] left-[45%] size-[28rem] rounded-full bg-[#66d6a6]/10 blur-3xl" />
        <div className="relative z-10 grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold tracking-[0.18em] text-[#ff8dae] uppercase">
              {copy.eyebrow}
            </p>
            <p className="mt-8 max-w-sm border-l border-white/20 pl-5 text-sm leading-7 text-white/58">
              {copy.note}
            </p>
          </div>
          <div>
            <h2 className="max-w-[820px] text-[clamp(2.8rem,5.6vw,5.5rem)] leading-[0.96] font-semibold tracking-[-0.065em]">
              {copy.title}
            </h2>
            <p className="mt-8 max-w-[760px] text-lg leading-9 text-white/66">
              {copy.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
