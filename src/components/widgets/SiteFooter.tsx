import Link from "next/link";

import Wordmark from "@/components/atoms/Wordmark";
import LanguageSwitcher from "@/components/widgets/LanguageSwitcher";
import { businessInfo } from "@/constants/business";
import { footerLabels } from "@/constants/site";
import type { NavigationItem } from "@/types/navigation";
import type { SiteLocale } from "@/types/site";

interface SiteFooterProps {
  locale: SiteLocale;
  homeHref: string;
  languagePaths: Record<SiteLocale, string>;
  tagline?: string;
  navigation?: readonly NavigationItem[];
}

const columnTitleClassName = "font-mono text-caption text-muted-foreground";
const linkClassName =
  "inline-flex min-h-11 items-center text-small text-foreground transition-colors outline-none hover:text-link focus-visible:ring-3 focus-visible:ring-ring/60 rounded-xs";

// 공용 푸터: 브랜드·메뉴·문의 열 + 아래 줄에 언어 목록과 저작권. 구분선 없이 여백으로 나눈다. 빌드 연도를 표시한다.
const SiteFooter = ({
  locale,
  homeHref,
  languagePaths,
  tagline,
  navigation = [],
}: SiteFooterProps) => {
  const labels = footerLabels[locale];
  const year = new Date().getFullYear();

  return (
    <footer className="pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto max-w-page px-4 pt-24 pb-10 sm:px-8 sm:pt-32">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)] md:gap-8">
          <div className="max-w-xs">
            <Link
              href={homeHref}
              aria-label={`${businessInfo.name} home`}
              className="inline-flex min-h-11 items-center rounded-xs outline-none focus-visible:ring-3 focus-visible:ring-ring/60"
            >
              <Wordmark className="text-title-md" />
            </Link>
            {tagline ? (
              <p className="mt-3 text-small text-muted-foreground">{tagline}</p>
            ) : null}
          </div>

          {navigation.length > 0 ? (
            <nav aria-label={labels.navigation}>
              <h2 className={columnTitleClassName}>{labels.navigation}</h2>
              <ul className="mt-3">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={linkClassName}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}

          <div>
            <h2 className={columnTitleClassName}>{labels.contact}</h2>
            <a
              href={`mailto:${businessInfo.contactEmail}`}
              className={`${linkClassName} mt-3 break-all`}
            >
              {businessInfo.contactEmail}
            </a>
          </div>
        </div>

        <div className="mt-20 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-caption text-muted-foreground">
            © {year} {businessInfo.name}. {labels.rights}
          </p>
          <div className="-mx-3">
            <LanguageSwitcher
              locale={locale}
              label={labels.language}
              paths={languagePaths}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
