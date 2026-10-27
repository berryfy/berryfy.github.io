import SiteFooter from "@/components/widgets/SiteFooter";
import SiteHeader from "@/components/widgets/SiteHeader";
import {
  homeLocalePaths,
  localeDetails,
  mainContentId,
} from "@/constants/site";
import AboutSection from "@/features/home/components/AboutSection";
import HeroSection from "@/features/home/components/HeroSection";
import { homeSections } from "@/features/home/constants/sections";
import type { SiteCopy } from "@/features/home/types/home";
import type { SiteLocale } from "@/types/site";

interface HomePageProps {
  locale: SiteLocale;
  copy: SiteCopy;
}

// 섹션은 디자인 시스템 기준으로 하나씩 새로 만든다. 지금은 첫 화면과 소개 섹션까지 있다.
const HomePage = ({ locale, copy }: HomePageProps) => {
  const navigation = [
    { label: copy.navigation.products, href: `#${homeSections.products}` },
    { label: copy.navigation.about, href: `#${homeSections.about}` },
    { label: copy.navigation.contact, href: `#${homeSections.contact}` },
  ];

  return (
    <>
      <SiteHeader
        homeHref={localeDetails[locale].path}
        locale={locale}
        languagePaths={homeLocalePaths}
        navigation={navigation}
        navigationLabel={copy.navigationLabel}
      />
      <main id={mainContentId} className="min-h-screen">
        <HeroSection description={copy.hero.description} />
        <AboutSection
          label={copy.navigation.about}
          description={copy.about.description}
        />
      </main>
      <SiteFooter
        locale={locale}
        homeHref={localeDetails[locale].path}
        languagePaths={homeLocalePaths}
      />
    </>
  );
};

export default HomePage;
