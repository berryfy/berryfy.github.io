import HomeAppsSection from "@/features/home/components/home-apps-section";
import HomeFooter from "@/features/home/components/home-footer";
import HomeHeroSection from "@/features/home/components/home-hero-section";
import HomePrinciplesSection from "@/features/home/components/home-principles-section";
import HomeSiteHeader from "@/features/home/components/site-header";
import HomeStudioSection from "@/features/home/components/home-studio-section";
import type { SiteCopy } from "@/features/home/types/home";
import { homePath } from "@/features/home/utils/locale";
import type { SiteLocale } from "@/types/site";

interface HomePageProps {
  locale: SiteLocale;
  copy: SiteCopy;
}

export default function HomePage({ locale, copy }: HomePageProps) {
  const basePath = homePath(locale);

  return (
    <>
      <HomeSiteHeader locale={locale} copy={copy} />

      <main className="overflow-hidden">
        <HomeHeroSection basePath={basePath} copy={copy} />
        <HomeAppsSection copy={copy.apps} />
        <HomeStudioSection copy={copy.studio} />
        <HomePrinciplesSection copy={copy.principles} />
      </main>

      <HomeFooter basePath={basePath} copy={copy.footer} />
    </>
  );
}
