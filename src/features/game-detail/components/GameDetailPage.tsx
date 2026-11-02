import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Button from "@/components/atoms/Button";
import GooglePlayBadge from "@/components/widgets/GooglePlayBadge";
import SiteHeader from "@/components/widgets/SiteHeader";
import SiteFooter from "@/components/widgets/SiteFooter";
import { featuredGames } from "@/constants/games";
import {
  gameLocalePaths,
  homeLocalePaths,
  mainContentId,
} from "@/constants/site";
import GameTrailer from "@/features/game-detail/components/GameTrailer";
import GameImageMotion from "@/features/game-detail/components/GameImageMotion";
import { gameDetailCopy } from "@/features/game-detail/constants/content";
import type { SiteLocale } from "@/types/site";

const GameDetailPage = ({ locale }: { locale: SiteLocale }) => {
  const game = featuredGames[0];
  const copy = gameDetailCopy[locale];
  return (
    <>
      <SiteHeader
        locale={locale}
        homeHref={homeLocalePaths[locale]}
        languagePaths={gameLocalePaths}
      />
      <main id={mainContentId}>
        <section className="mx-auto max-w-page px-4 pt-12 pb-20 sm:px-8 sm:pt-20 sm:pb-28">
          <Button
            href={homeLocalePaths[locale] + "#products"}
            variant="ghost"
            className="-ml-5"
          >
            <ArrowLeft aria-hidden="true" />
            {copy.back}
          </Button>
          <p className="mt-12 font-mono text-caption text-muted-foreground">
            {copy.eyebrow}
          </p>
          <p
            lang="en"
            className="mt-4 font-display text-title-md font-extrabold"
          >
            {game.name}
          </p>
          <h1 className="mt-5 max-w-prose font-display text-display-lg font-extrabold tracking-[-0.04em] text-pretty">
            {copy.title}
          </h1>
          <p className="mt-6 max-w-prose text-body-lg text-pretty text-muted-foreground">
            {copy.intro}
          </p>
          <div className="mt-6">
            <GooglePlayBadge
              href={game.storeUrl}
              locale={locale}
              label={copy.download}
            />
          </div>
          <GameImageMotion variant="hero">
            <Image
              src={game.image}
              alt={game.copy[locale].imageAlt}
              width={game.width}
              height={game.height}
              sizes="(min-width: 1200px) 1136px, 100vw"
              preload
              className="h-auto w-full rounded-xl"
            />
          </GameImageMotion>
        </section>
        <GameTrailer
          videoId={game.trailerId}
          locale={locale}
          copy={copy.trailer}
        />
        <section
          className="mx-auto max-w-page px-4 py-12 sm:px-8 sm:py-20"
          aria-labelledby="game-features-title"
        >
          <h2
            id="game-features-title"
            className="max-w-prose font-display text-display-md font-extrabold tracking-[-0.04em] text-pretty"
          >
            {copy.galleryTitle}
          </h2>
          <div className="mt-12 grid gap-12 md:grid-cols-3 md:gap-8">
            {copy.features.map((feature, index) => (
              <article key={feature.image}>
                <GameImageMotion variant="screenshot" delay={index * 100}>
                  <Image
                    src={`/images/games/lulu-${feature.image}-${locale}.webp`}
                    width={640}
                    height={1138}
                    alt={feature.alt}
                    sizes="(min-width: 768px) 320px, 90vw"
                    className="h-auto w-full rounded-md"
                  />
                </GameImageMotion>
                <h3 className="mt-6 font-display text-title-md font-extrabold tracking-[-0.03em]">
                  {feature.title}
                </h3>
                <p className="mt-3 text-body text-pretty text-muted-foreground">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>
        <section className="mx-auto max-w-page px-4 py-20 sm:px-8 sm:py-28">
          <div className="rounded-xl bg-card p-8 sm:p-12">
            <h2 className="font-display text-display-md font-extrabold tracking-[-0.04em] text-pretty">
              {copy.closing}
            </h2>
            <p className="mt-4 text-body-lg text-muted-foreground">
              {copy.closingText}
            </p>
            <div className="mt-6">
              <GooglePlayBadge
                href={game.storeUrl}
                locale={locale}
                label={copy.download}
              />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter
        locale={locale}
        homeHref={homeLocalePaths[locale]}
        languagePaths={gameLocalePaths}
      />
    </>
  );
};
export default GameDetailPage;
