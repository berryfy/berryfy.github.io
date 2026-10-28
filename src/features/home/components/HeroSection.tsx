import AccentPeriods from "@/components/atoms/AccentPeriods";
import { siteSlogan } from "@/constants/site";

interface HeroSectionProps {
  description: string;
}

// "New often." · "Better always." 두 줄로 나눠 각 줄을 한 줄로 유지한다.
const [sloganLead, sloganTail] = siteSlogan.split(/(?<=\.)\s+/);

// 홈 첫 화면. 영어 슬로건을 크게 두고 그 뜻을 페이지 언어로 작게 덧붙인다. 이미지 없이 글자로만 구성한다.
const HeroSection = ({ description }: HeroSectionProps) => (
  <section
    aria-labelledby="hero-title"
    className="pt-20 pb-24 sm:pt-32 sm:pb-36"
  >
    <div className="mx-auto max-w-page px-4 sm:px-8">
      <h1
        id="hero-title"
        lang="en"
        className="font-display text-display-xl font-extrabold tracking-[-0.05em]"
      >
        <span className="block whitespace-nowrap">
          <AccentPeriods text={sloganLead} />
        </span>
        <span className="block whitespace-nowrap">
          <AccentPeriods text={sloganTail} />
        </span>
      </h1>
      <p className="mt-8 max-w-prose text-body-lg text-pretty text-muted-foreground">
        {description}
      </p>
    </div>
  </section>
);

export default HeroSection;
