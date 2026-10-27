import Link from "next/link";

import { localeDetails, siteLocales } from "@/constants/site";
import { cn } from "@/lib/utils";
import type { SiteLocale } from "@/types/site";

interface LanguageSwitcherProps {
  locale: SiteLocale;
  label: string;
  paths: Record<SiteLocale, string>;
}

// 펼침 없이 보이는 언어 목록. 모바일 메뉴·푸터에서 쓴다. 헤더는 LanguageMenu를 쓴다.
const LanguageSwitcher = ({ locale, label, paths }: LanguageSwitcherProps) => (
  <nav aria-label={label}>
    <ul className="flex flex-wrap items-center gap-1">
      {siteLocales.map((item) => {
        const isActive = item === locale;

        return (
          <li key={item}>
            <Link
              href={paths[item]}
              hrefLang={item}
              lang={item}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "inline-flex h-11 items-center rounded-full px-4 text-small transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/60",
                isActive
                  ? "bg-secondary font-semibold text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {localeDetails[item].label}
            </Link>
          </li>
        );
      })}
    </ul>
  </nav>
);

export default LanguageSwitcher;
