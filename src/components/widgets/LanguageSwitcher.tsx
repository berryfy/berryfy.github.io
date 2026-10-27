import Link from "next/link";

import { localeDetails, siteLocales } from "@/constants/site";
import { cn } from "@/lib/utils";
import type { SiteLocale } from "@/types/site";

interface LanguageSwitcherProps {
  locale: SiteLocale;
  label: string;
  paths: Record<SiteLocale, string>;
}

// 언어가 3개뿐이라 펼침 메뉴 없이 바로 누를 수 있는 링크로 보여 준다.
const LanguageSwitcher = ({ locale, label, paths }: LanguageSwitcherProps) => (
  <nav aria-label={label}>
    <ul className="flex items-center rounded-full border border-border p-0.5">
      {siteLocales.map((item) => {
        const isActive = item === locale;

        return (
          <li key={item}>
            <Link
              href={paths[item]}
              hrefLang={item}
              lang={item}
              aria-current={isActive ? "page" : undefined}
              aria-label={localeDetails[item].label}
              className={cn(
                "inline-flex h-10 min-w-11 items-center justify-center rounded-full px-2.5 font-mono text-caption font-medium transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/60",
                isActive
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {localeDetails[item].shortLabel}
            </Link>
          </li>
        );
      })}
    </ul>
  </nav>
);

export default LanguageSwitcher;
