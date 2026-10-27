import Image from "next/image";

import { siteSlogan } from "@/constants/site";
import { homeImages } from "@/features/home/constants/assets";

interface HeroSectionProps {
  description: string;
}

// "New often." · "Better always." 두 줄로 나눠 각 줄을 한 줄로 유지한다.
const [sloganLead, sloganTail] = siteSlogan.split(/(?<=\.)\s+/);

// 사진 바탕이 페이지 바탕보다 살짝 밝아서 가장자리를 페이지 쪽으로 흐리게 지운다.
const desktopFadeClassName =
  "[mask-composite:intersect] [mask-image:linear-gradient(to_right,transparent,black_35%),linear-gradient(to_bottom,black_65%,transparent)]";
const mobileFadeClassName =
  "[mask-image:linear-gradient(to_bottom,transparent,black_25%,black_70%,transparent)]";

// 홈 첫 화면. 영어 슬로건을 크게 두고 뜻을 페이지 언어로 덧붙인다.
// 이미지가 어두운 사진이라 이 섹션은 테마와 관계없이 어둡게 고정한다.
// 넓은 화면은 오른쪽 55%에 이미지를 두고 왼쪽에 글자를, 좁은 화면은 글자 아래에 이미지를 둔다.
const HeroSection = ({ description }: HeroSectionProps) => (
  <section
    aria-labelledby="hero-title"
    className="dark relative overflow-hidden bg-background text-foreground"
  >
    <div
      className={`absolute inset-y-0 right-0 hidden w-[55%] md:block ${desktopFadeClassName}`}
    >
      <Image
        src={homeImages.hero}
        alt=""
        fill
        preload
        sizes="55vw"
        className="object-cover object-right"
      />
    </div>
    <div className="relative mx-auto flex max-w-page flex-col px-4 pt-20 sm:px-8 sm:pt-28 md:min-h-[42rem] md:justify-center md:pt-0 lg:min-h-[46rem]">
      <h1
        id="hero-title"
        lang="en"
        className="font-display text-display-xl font-extrabold tracking-[-0.05em]"
      >
        <span className="block whitespace-nowrap">{sloganLead}</span>
        <span className="block whitespace-nowrap">{sloganTail}</span>
      </h1>
      <p className="mt-8 max-w-md text-body-lg text-pretty text-muted-foreground">
        {description}
      </p>
    </div>
    <div
      className={`relative mt-6 aspect-[3/2] md:hidden ${mobileFadeClassName}`}
    >
      <Image
        src={homeImages.hero}
        alt=""
        fill
        preload
        sizes="100vw"
        className="object-cover object-right"
      />
    </div>
  </section>
);

export default HeroSection;
