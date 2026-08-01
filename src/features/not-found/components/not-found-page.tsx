import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import SiteHeader from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { homeLocalePaths, siteConfig } from "@/constants/site";
import { notFoundCopy } from "@/features/not-found/constants/not-found-copy";

export default function NotFoundPage() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <SiteHeader
        homeHref={notFoundCopy.homePath}
        locale={siteConfig.defaultLocale}
        languageLabel={notFoundCopy.languageNavigationLabel}
        languagePaths={homeLocalePaths}
      />

      <main className="relative flex min-h-[calc(100svh-4rem)] overflow-hidden px-5 sm:min-h-[calc(100svh-4.75rem)] sm:px-8">
        <div className="pointer-events-none absolute top-[-11rem] right-[-10rem] size-[28rem] rounded-full border-[4.5rem] border-primary/[0.08] sm:size-[36rem]" />
        <div className="pointer-events-none absolute bottom-[-12rem] left-[-9rem] size-[27rem] rounded-full bg-mint/20 blur-3xl sm:size-[34rem]" />

        <div className="relative mx-auto flex w-full max-w-[1440px] flex-col">
          <section className="grid flex-1 items-center gap-8 py-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(380px,0.7fr)] lg:gap-20 lg:py-16">
            <div className="relative z-10 max-w-[720px]">
              <p className="font-mono text-xs font-semibold tracking-[0.2em] text-primary uppercase sm:text-sm">
                Error 404 · {notFoundCopy.eyebrow}
              </p>
              <h1 className="mt-6 text-[clamp(3.5rem,8vw,7.8rem)] leading-[0.9] font-semibold tracking-[-0.075em] text-foreground">
                {notFoundCopy.title}
              </h1>
              <p className="mt-7 max-w-[580px] text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9">
                {notFoundCopy.description}
              </p>
              <Button
                asChild
                size="lg"
                className="mt-9 h-13 rounded-full bg-primary px-6 text-base shadow-[0_14px_32px_rgba(217,45,99,0.22)] hover:bg-[#c92559]"
              >
                <Link href={notFoundCopy.homePath}>
                  <ArrowLeft aria-hidden="true" />
                  {notFoundCopy.action}
                </Link>
              </Button>
            </div>

            <div
              aria-hidden="true"
              className="relative hidden min-h-[360px] items-center justify-center lg:flex"
            >
              <div className="absolute size-[22rem] rounded-full border border-primary/15 bg-card/45 shadow-[0_35px_100px_rgba(72,37,78,0.08)] backdrop-blur-sm xl:size-[27rem]" />
              <div className="absolute size-[16rem] rotate-6 rounded-[4rem] bg-secondary/80 xl:size-[20rem]" />
              <p className="relative font-mono text-[8rem] leading-none font-semibold tracking-[-0.12em] text-primary xl:text-[10rem]">
                404
              </p>
              <span className="absolute top-[12%] right-[12%] size-5 rounded-full bg-mint shadow-[0_8px_24px_rgba(70,190,140,0.3)] xl:size-6" />
              <span className="absolute bottom-[13%] left-[10%] size-3 rounded-full bg-primary/70 xl:size-4" />
            </div>
          </section>

          <footer className="flex min-h-12 items-end border-t border-border/80 py-3 text-xs text-muted-foreground sm:text-sm">
            404 · Page not found
          </footer>
        </div>
      </main>
    </div>
  );
}
