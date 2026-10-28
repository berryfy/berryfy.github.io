import { homeSections } from "@/features/home/constants/sections";
import { studioPhilosophy } from "@/features/home/constants/studio";

interface AboutSectionProps {
  label: string;
  description: string;
}

// 스튜디오 소개. 영어 철학 문구를 크게 두고 그 뜻을 페이지 언어로 작게 덧붙인다.
const AboutSection = ({ label, description }: AboutSectionProps) => (
  <section
    id={homeSections.about}
    aria-labelledby={`${homeSections.about}-title`}
    className="scroll-mt-24 py-28 sm:py-40"
  >
    <div className="mx-auto max-w-page px-4 sm:px-8">
      <p className="font-mono text-caption text-muted-foreground">{label}</p>
      <h2
        id={`${homeSections.about}-title`}
        lang="en"
        className="mt-4 font-display text-display-lg font-extrabold tracking-[-0.045em]"
      >
        {studioPhilosophy}
      </h2>
      <p className="mt-6 max-w-prose text-body-lg text-pretty text-muted-foreground">
        {description}
      </p>
    </div>
  </section>
);

export default AboutSection;
