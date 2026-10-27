import SiteHeader from "@/components/widgets/SiteHeader";
import {
  homeLocalePaths,
  localeDetails,
  mainContentId,
} from "@/constants/site";
import { homeSections } from "@/features/home/constants/sections";
import type { SiteCopy } from "@/features/home/types/home";
import type { SiteLocale } from "@/types/site";

interface HomePageProps {
  locale: SiteLocale;
  copy: SiteCopy;
}

// 섹션은 디자인 시스템 기준으로 하나씩 새로 만든다. 지금은 헤더만 있다.
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
      <main id={mainContentId} className="min-h-screen" />
    </>
  );
};

export default HomePage;
