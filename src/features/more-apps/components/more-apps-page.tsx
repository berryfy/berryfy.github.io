import { ArrowUpRight } from "lucide-react";

import Button from "@/components/atoms/Button";
import SiteHeader from "@/components/widgets/SiteHeader";
import { mainContentId, siteConfig } from "@/constants/site";
import MoreAppItem from "@/features/more-apps/components/more-app-item";
import {
  moreAppsCopy,
  moreAppsLocalePaths,
} from "@/features/more-apps/constants/more-apps-copy";
import { berryfyGooglePlayUrl, publishedApps } from "@/constants/apps";
import { googlePlayUrlForLocale } from "@/lib/google-play-url";
import type { SiteLocale } from "@/types/site";

interface MoreAppsPageProps {
  locale: SiteLocale;
  fontClassName: string;
}

export default function MoreAppsPage({
  locale,
  fontClassName,
}: MoreAppsPageProps) {
  const copy = moreAppsCopy[locale];
  const developerStoreUrl = googlePlayUrlForLocale(
    berryfyGooglePlayUrl,
    locale,
  );

  return (
    <div
      lang={locale}
      className={`${fontClassName} min-h-svh bg-background pb-[env(safe-area-inset-bottom)] font-sans text-foreground`}
    >
      <SiteHeader
        homeHref={siteConfig.routes.home}
        locale={locale}
        languagePaths={moreAppsLocalePaths}
      />

      <main
        id={mainContentId}
        className="mx-auto max-w-3xl px-4 pt-12 pb-16 sm:px-6 sm:pt-16"
      >
        <section>
          <p className="font-mono text-caption text-muted-foreground">
            {copy.eyebrow}
          </p>
          <h1 className="mt-3 font-display text-display-md font-extrabold tracking-[-0.04em]">
            {copy.title}
          </h1>
          <p className="mt-5 max-w-prose text-body text-pretty text-muted-foreground">
            {copy.description}
          </p>
        </section>

        <ul className="mt-10 space-y-3">
          {publishedApps.map((app) => (
            <MoreAppItem
              key={app.packageName}
              app={app}
              locale={locale}
              actionLabel={copy.appActionLabel}
            />
          ))}
        </ul>

        <footer className="mt-14 text-center">
          <Button href={developerStoreUrl} external variant="secondary">
            {copy.storeActionLabel}
            <ArrowUpRight aria-hidden="true" />
          </Button>
          <p className="mt-4 text-caption text-muted-foreground">
            {copy.availabilityNote}
          </p>
        </footer>
      </main>
    </div>
  );
}
