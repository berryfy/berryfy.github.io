import BrandMark from "@/components/widgets/BrandMark";
import LanguageSwitcher from "@/components/widgets/LanguageSwitcher";
import ThemeToggle from "@/components/widgets/ThemeToggle";
import { languageSwitcherLabels } from "@/constants/site";
import type { SiteLocale } from "@/types/site";

interface SiteHeaderProps {
  homeHref: string;
  locale: SiteLocale;
  languagePaths: Record<SiteLocale, string>;
}

const SiteHeader = ({ homeHref, locale, languagePaths }: SiteHeaderProps) => (
  <header className="sticky top-0 z-50 border-b border-border bg-background/90 pt-[env(safe-area-inset-top)] backdrop-blur-md">
    <div className="mx-auto flex h-16 max-w-page items-center justify-between gap-3 px-4 sm:h-18 sm:px-8">
      <BrandMark href={homeHref} />
      <div className="flex shrink-0 items-center gap-1.5">
        <LanguageSwitcher
          locale={locale}
          label={languageSwitcherLabels[locale]}
          paths={languagePaths}
        />
        <ThemeToggle locale={locale} />
      </div>
    </div>
  </header>
);

export default SiteHeader;
