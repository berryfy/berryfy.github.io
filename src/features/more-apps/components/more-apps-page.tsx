import { ArrowUpRight } from "lucide-react";

import BrandMark from "@/components/brand-mark";
import LanguageSwitcher from "@/components/language-switcher";
import { siteConfig } from "@/constants/site";
import MoreAppItem from "@/features/more-apps/components/more-app-item";
import {
  moreAppsCopy,
  moreAppsLocalePaths,
} from "@/features/more-apps/constants/more-apps-copy";
import {
  berryfyGooglePlayUrl,
  moreApps,
} from "@/features/more-apps/constants/more-apps";
import { googlePlayUrlForLocale } from "@/features/more-apps/utils/google-play-url";
import type { SiteLocale } from "@/types/site";

export default function MoreAppsPage({ locale }: { locale: SiteLocale }) {
  const copy = moreAppsCopy[locale];
  const developerStoreUrl = googlePlayUrlForLocale(
    berryfyGooglePlayUrl,
    locale,
  );

  return (
    <div
      lang={locale}
      className="min-h-svh bg-[#f8f5f7] pb-[env(safe-area-inset-bottom)] text-foreground"
    >
      <header className="sticky top-0 z-40 border-b border-border/70 bg-[#f8f5f7]/90 pt-[env(safe-area-inset-top)] backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[760px] items-center justify-between px-4 sm:px-6">
          <BrandMark href={siteConfig.routes.home} />
          <LanguageSwitcher
            locale={locale}
            label={copy.languageNavigationLabel}
            paths={moreAppsLocalePaths}
          />
        </div>
      </header>

      <main className="mx-auto max-w-[760px] px-4 pt-10 pb-8 sm:px-6 sm:pt-14">
        <section>
          <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase sm:text-sm">
            {copy.eyebrow}
          </p>
          <h1 className="mt-3 text-[clamp(2.25rem,9vw,4rem)] leading-[0.98] font-semibold tracking-[-0.06em] text-foreground">
            {copy.title}
          </h1>
          <p className="mt-5 max-w-[620px] text-sm leading-7 text-muted-foreground sm:text-base sm:leading-8">
            {copy.description}
          </p>
        </section>

        <ul className="mt-9 space-y-3 sm:mt-11 sm:space-y-4">
          {moreApps.map((app) => (
            <MoreAppItem
              key={app.packageName}
              app={app}
              locale={locale}
              actionLabel={copy.appActionLabel}
            />
          ))}
        </ul>

        <footer className="mt-9 border-t border-border/80 pt-6 text-center sm:mt-12">
          <a
            href={developerStoreUrl}
            rel="external"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-border bg-white px-5 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-primary/30 hover:text-primary"
          >
            {copy.storeActionLabel}
            <ArrowUpRight className="size-4" aria-hidden="true" />
          </a>
          <p className="mt-4 text-xs leading-5 text-muted-foreground">
            {copy.availabilityNote}
          </p>
        </footer>
      </main>
    </div>
  );
}
