import type { ReactNode } from "react";

import BrandMark from "@/components/brand-mark";
import LanguageSwitcher from "@/components/language-switcher";
import type { SiteLocale } from "@/types/site";

interface SiteHeaderProps {
  homeHref: string;
  locale: SiteLocale;
  languageLabel: string;
  languagePaths: Record<SiteLocale, string>;
  navigation?: ReactNode;
  actions?: ReactNode;
}

export default function SiteHeader({
  homeHref,
  locale,
  languageLabel,
  languagePaths,
  navigation,
  actions,
}: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/88 pt-[env(safe-area-inset-top)] backdrop-blur-xl supports-backdrop-filter:bg-background/78">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between gap-2 px-4 sm:h-[76px] sm:gap-3 sm:px-8 lg:px-12">
        <BrandMark href={homeHref} />
        {navigation}
        <div className="flex shrink-0 items-center gap-1.5">
          <LanguageSwitcher
            locale={locale}
            label={languageLabel}
            paths={languagePaths}
          />
          {actions}
        </div>
      </div>
    </header>
  );
}
