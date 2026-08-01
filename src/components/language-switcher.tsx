import Link from "next/link";

import { localeDetails, siteLocales } from "@/constants/site";
import type { SiteLocale } from "@/types/site";

interface LanguageSwitcherProps {
  locale: SiteLocale;
  label: string;
  paths: Record<SiteLocale, string>;
}

export default function LanguageSwitcher({
  locale,
  label,
  paths,
}: LanguageSwitcherProps) {
  return (
    <nav
      aria-label={label}
      className="flex shrink-0 items-center rounded-full border border-border/80 bg-white/80 p-0.5 text-xs shadow-sm backdrop-blur-sm"
    >
      {siteLocales.map((item) => {
        const isActive = item === locale;

        return (
          <Link
            key={item}
            href={paths[item]}
            hrefLang={item}
            lang={item}
            aria-current={isActive ? "page" : undefined}
            className={`flex size-10 items-center justify-center rounded-full font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1 focus-visible:outline-none ${
              isActive
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground"
            }`}
          >
            {localeDetails[item].shortLabel}
          </Link>
        );
      })}
    </nav>
  );
}
