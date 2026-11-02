import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Wordmark from "@/components/atoms/Wordmark";
import LanguageSwitcher from "@/components/widgets/LanguageSwitcher";
import { businessInfo } from "@/constants/business";
import { footerContactId, footerLabels, siteSlogan } from "@/constants/site";
import type { SiteLocale } from "@/types/site";

interface SiteFooterProps {
  locale: SiteLocale;
  homeHref: string;
  languagePaths: Record<SiteLocale, string>;
}

// 저작권 문구는 언어와 관계없이 영어로 둔다.
const copyrightNotice = "All rights reserved.";

const columnTitleClassName = "font-mono text-caption text-muted-foreground";
const linkClassName =
  "inline-flex min-h-11 items-center text-small text-foreground transition-colors outline-none hover:text-link focus-visible:ring-3 focus-visible:ring-ring/60 rounded-xs";

// 공용 푸터: 브랜드(글자 로고·슬로건)·문의 열 + 아래 줄에 언어 목록과 저작권. 구분선 없이 여백으로 나눈다. 빌드 연도를 표시한다.
const SiteFooter = ({ locale, homeHref, languagePaths }: SiteFooterProps) => {
  const labels = footerLabels[locale];
  const year = new Date().getFullYear();

  return (
    <footer className="pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto max-w-page px-4 pt-24 pb-10 sm:px-8 sm:pt-32">
        <div className="grid gap-10 md:grid-cols-[minmax(0,1fr)_auto] md:gap-16">
          <div className="max-w-xs">
            <Link
              href={homeHref}
              aria-label={`${businessInfo.name} home`}
              className="inline-flex min-h-11 items-center rounded-xs outline-none focus-visible:ring-3 focus-visible:ring-ring/60"
            >
              <Wordmark className="text-title-md" />
            </Link>
            <p className="mt-3 text-small text-muted-foreground">
              {siteSlogan}
            </p>
            <a
              href={businessInfo.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${linkClassName} mt-4 gap-2`}
            >
              {/* YouTube mark: Simple Icons (CC0), simpleicons.org/icons/youtube.svg */}
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                focusable="false"
                className="size-5 shrink-0"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              YouTube
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          </div>

          <div id={footerContactId} className="scroll-mt-24">
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
            © {year} {businessInfo.name}. {copyrightNotice}
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
