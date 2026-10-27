import SkipLink from "@/components/atoms/SkipLink";
import BrandMark from "@/components/widgets/BrandMark";
import HeaderNavigation from "@/components/widgets/HeaderNavigation";
import LanguageMenu from "@/components/widgets/LanguageMenu";
import MobileMenu from "@/components/widgets/MobileMenu";
import ThemeToggle from "@/components/widgets/ThemeToggle";
import {
  languageSwitcherLabels,
  mainContentId,
  menuLabels,
  skipLinkLabels,
} from "@/constants/site";
import { cn } from "@/lib/utils";
import type { NavigationItem } from "@/types/navigation";
import type { SiteLocale } from "@/types/site";

interface SiteHeaderProps {
  homeHref: string;
  locale: SiteLocale;
  languagePaths: Record<SiteLocale, string>;
  navigation?: readonly NavigationItem[];
  navigationLabel?: string;
}

// 메뉴가 있으면 좁은 화면에서 언어 전환을 MobileMenu 안의 목록으로 옮긴다.
const SiteHeader = ({
  homeHref,
  locale,
  languagePaths,
  navigation = [],
  navigationLabel = "",
}: SiteHeaderProps) => {
  const hasNavigation = navigation.length > 0;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 pt-[env(safe-area-inset-top)] backdrop-blur-md">
      <SkipLink href={`#${mainContentId}`} label={skipLinkLabels[locale]} />
      <div className="relative mx-auto flex h-16 max-w-page items-center justify-between gap-3 px-4 sm:h-18 sm:px-8">
        <BrandMark href={homeHref} />
        {hasNavigation ? (
          <HeaderNavigation items={navigation} label={navigationLabel} />
        ) : null}
        <div className="flex shrink-0 items-center gap-1.5">
          <div className={cn(hasNavigation && "hidden md:block")}>
            <LanguageMenu
              locale={locale}
              label={languageSwitcherLabels[locale]}
              paths={languagePaths}
            />
          </div>
          <ThemeToggle locale={locale} />
          {hasNavigation ? (
            <MobileMenu
              items={navigation}
              navigationLabel={navigationLabel}
              openLabel={menuLabels[locale].open}
              closeLabel={menuLabels[locale].close}
              locale={locale}
              languageLabel={languageSwitcherLabels[locale]}
              languagePaths={languagePaths}
            />
          ) : null}
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
