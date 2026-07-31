import Link from "next/link";
import dayjs from "dayjs";
import { ArrowDownRight, ArrowRight, CircleCheck, Mail } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import AppCard from "@/features/home/components/app-card";
import BrandMark from "@/features/home/components/brand-mark";
import HeroVisual from "@/features/home/components/hero-visual";
import SiteHeader from "@/features/home/components/site-header";
import type { SiteCopy, SiteLocale } from "@/features/home/types/home";
import { homePath } from "@/features/home/utils/locale";

interface HomePageProps {
  locale: SiteLocale;
  copy: SiteCopy;
}

export default function HomePage({ locale, copy }: HomePageProps) {
  const basePath = homePath(locale);
  const year = dayjs().year();

  return (
    <>
      <SiteHeader locale={locale} copy={copy} />

      <main className="overflow-hidden">
        <section className="relative">
          <div className="pointer-events-none absolute top-10 left-[-14rem] size-[34rem] rounded-full bg-primary/[0.07] blur-3xl" />
          <div className="mx-auto grid min-h-[calc(100svh-76px)] max-w-[1440px] items-center gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(430px,0.85fr)] lg:gap-20 lg:px-12 lg:py-24">
            <div className="relative z-10 max-w-[720px]">
              <Badge
                variant="outline"
                className="h-8 border-primary/20 bg-white/65 px-3 text-primary backdrop-blur-sm"
              >
                <span className="size-1.5 rounded-full bg-primary" />
                {copy.hero.eyebrow}
              </Badge>
              <h1 className="mt-7 text-[clamp(3.45rem,7.5vw,7.2rem)] leading-[0.91] font-semibold tracking-[-0.07em] whitespace-pre-line text-foreground">
                {copy.hero.title}
              </h1>
              <p className="mt-8 max-w-[640px] text-lg leading-8 text-muted-foreground sm:text-xl sm:leading-9">
                {copy.hero.description}
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-13 rounded-full bg-primary px-6 text-base shadow-[0_14px_32px_rgba(217,45,99,0.22)] hover:bg-[#c92559]"
                >
                  <Link href={`${basePath}#apps`}>
                    {copy.hero.primaryAction}
                    <ArrowDownRight aria-hidden="true" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-13 rounded-full border-border bg-white/65 px-6 text-base hover:bg-white"
                >
                  <Link href={`${basePath}#studio`}>
                    {copy.hero.secondaryAction}
                    <ArrowRight aria-hidden="true" />
                  </Link>
                </Button>
              </div>

              <div className="mt-12 flex max-w-[550px] items-start gap-4 border-t border-border/80 pt-6">
                <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-[#dff8ee] text-[#297b5a]">
                  <CircleCheck className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {copy.hero.challengeLabel}
                  </p>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {copy.hero.challengeValue}
                  </p>
                </div>
              </div>
            </div>

            <HeroVisual copy={copy.visual} />
          </div>
        </section>

        <section id="apps" className="scroll-mt-24 py-24 sm:py-32">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <div className="grid items-end gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.55fr)]">
              <div>
                <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
                  {copy.apps.eyebrow}
                </p>
                <h2 className="mt-4 max-w-[830px] text-[clamp(2.6rem,5vw,4.8rem)] leading-[0.98] font-semibold tracking-[-0.06em] text-foreground">
                  {copy.apps.title}
                </h2>
              </div>
              <p className="max-w-[560px] text-base leading-8 text-muted-foreground lg:justify-self-end">
                {copy.apps.description}
              </p>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {copy.apps.items.map((app, index) => (
                <AppCard
                  key={app.name}
                  app={app}
                  featuredLabel={copy.apps.featuredLabel}
                  imageSlotLabel={copy.apps.imageSlotLabel}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        <section
          id="studio"
          className="scroll-mt-20 px-5 py-12 sm:px-8 lg:px-12"
        >
          <div className="relative mx-auto max-w-[1344px] overflow-hidden rounded-[2.5rem] bg-[#2d1c32] px-6 py-16 text-white sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div className="absolute top-[-7rem] right-[-5rem] size-[25rem] rounded-full border-[50px] border-[#ff5d8f]/20" />
            <div className="absolute bottom-[-12rem] left-[45%] size-[28rem] rounded-full bg-[#66d6a6]/10 blur-3xl" />
            <div className="relative z-10 grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
              <div>
                <p className="text-sm font-semibold tracking-[0.18em] text-[#ff8dae] uppercase">
                  {copy.studio.eyebrow}
                </p>
                <p className="mt-8 max-w-sm border-l border-white/20 pl-5 text-sm leading-7 text-white/58">
                  {copy.studio.note}
                </p>
              </div>
              <div>
                <h2 className="max-w-[820px] text-[clamp(2.8rem,5.6vw,5.5rem)] leading-[0.96] font-semibold tracking-[-0.065em]">
                  {copy.studio.title}
                </h2>
                <p className="mt-8 max-w-[760px] text-lg leading-9 text-white/66">
                  {copy.studio.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="principles"
          className="scroll-mt-20 py-24 sm:py-32 lg:py-36"
        >
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
              {copy.principles.eyebrow}
            </p>
            <h2 className="mt-4 max-w-[900px] text-[clamp(2.6rem,5vw,4.8rem)] leading-[1.02] font-semibold tracking-[-0.06em] text-foreground">
              {copy.principles.title}
            </h2>

            <div className="mt-14 grid border-y border-border lg:grid-cols-3">
              {copy.principles.items.map((item, index) => (
                <article
                  key={item.title}
                  className="border-b border-border py-9 last:border-b-0 lg:border-r lg:border-b-0 lg:px-9 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
                >
                  <p className="font-mono text-xs text-primary">0{index + 1}</p>
                  <h3 className="mt-9 text-2xl font-semibold tracking-[-0.04em] text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="px-5 pb-8 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1344px] rounded-[2rem] border border-border/70 bg-white/60 px-6 py-8 backdrop-blur-sm sm:px-8">
          <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <BrandMark href={basePath} />
              <p className="mt-4 text-sm text-muted-foreground">
                {copy.footer.tagline}
              </p>
            </div>
            <Button
              asChild
              variant="outline"
              className="h-11 self-start rounded-full bg-white px-5 sm:self-auto"
            >
              <a href="mailto:public.berryfy@gmail.com">
                <Mail aria-hidden="true" />
                {copy.footer.contact}
              </a>
            </Button>
          </div>
          <Separator className="my-7" />
          <p className="text-xs text-muted-foreground">
            © {year} Berryfy. {copy.footer.rights}
          </p>
        </div>
      </footer>
    </>
  );
}
