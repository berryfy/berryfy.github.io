import { ArrowLeft } from "lucide-react";

import Button from "@/components/atoms/Button";
import SiteHeader from "@/components/widgets/SiteHeader";
import { homeLocalePaths, mainContentId, siteConfig } from "@/constants/site";
import { notFoundCopy } from "@/features/not-found/constants/not-found-copy";

export default function NotFoundPage() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <SiteHeader
        homeHref={notFoundCopy.homePath}
        locale={siteConfig.defaultLocale}
        languagePaths={homeLocalePaths}
      />

      <main
        id={mainContentId}
        className="mx-auto flex max-w-page flex-col px-4 py-20 sm:px-8 sm:py-28"
      >
        <p className="font-mono text-caption text-link">
          Error 404 · {notFoundCopy.eyebrow}
        </p>
        <h1 className="mt-5 max-w-prose font-display text-display-lg font-extrabold tracking-[-0.045em]">
          {notFoundCopy.title}
        </h1>
        <p className="mt-6 max-w-prose text-body-lg text-muted-foreground">
          {notFoundCopy.description}
        </p>
        <Button
          href={notFoundCopy.homePath}
          size="lg"
          className="mt-10 self-start"
        >
          <ArrowLeft aria-hidden="true" />
          {notFoundCopy.action}
        </Button>
      </main>
    </div>
  );
}
