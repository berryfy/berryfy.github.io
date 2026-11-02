import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Button from "@/components/atoms/Button";
import GooglePlayBadge from "@/components/widgets/GooglePlayBadge";
import { featuredGames } from "@/constants/games";
import { featuredGamesCopy } from "@/features/home/constants/featured-games";
import type { SiteLocale } from "@/types/site";

const FeaturedGamesSection = ({ locale }: { locale: SiteLocale }) => {
  const copy = featuredGamesCopy[locale];

  return (
    <section aria-labelledby="featured-games-title" className="pb-12 sm:pb-20">
      <div className="mx-auto max-w-page px-4 sm:px-8">
        <p className="font-mono text-caption text-muted-foreground">
          {copy.label}
        </p>
        <h2
          id="featured-games-title"
          className="mt-3 max-w-prose font-display text-display-md font-extrabold tracking-[-0.04em] text-pretty"
        >
          {copy.title}
        </h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {featuredGames.map((game) => {
            const content = game.copy[locale];
            return (
              <article
                key={game.id}
                className="group overflow-hidden rounded-xl bg-card transition-[transform,background-color] duration-300 ease-standard focus-within:bg-popover hover:bg-popover motion-safe:focus-within:-translate-y-1 motion-safe:hover:-translate-y-1 motion-reduce:transition-none"
              >
                <Link
                  href={game.paths[locale]}
                  className="block overflow-hidden outline-none focus-visible:ring-3 focus-visible:ring-ring focus-visible:ring-inset"
                  aria-label={`${game.name} — ${copy.action}`}
                >
                  <Image
                    src={game.image}
                    width={game.width}
                    height={game.height}
                    alt={content.imageAlt}
                    sizes="(min-width: 768px) 568px, 100vw"
                    className="h-auto w-full transition-transform duration-500 ease-standard motion-safe:group-focus-within:scale-105 motion-safe:group-hover:scale-105 motion-reduce:transition-none"
                  />
                </Link>
                <div className="p-6 sm:p-8">
                  <p className="font-mono text-caption text-muted-foreground">
                    {content.category}
                  </p>
                  <h3
                    lang="en"
                    className="mt-3 font-display text-title-lg font-extrabold tracking-[-0.03em]"
                  >
                    <Link
                      href={game.paths[locale]}
                      className="rounded-xs outline-none hover:text-link focus-visible:ring-3 focus-visible:ring-ring/60"
                    >
                      {game.name}
                    </Link>
                  </h3>
                  <p className="mt-4 text-body font-semibold text-pretty">
                    {content.tagline}
                  </p>
                  <p className="mt-2 text-small text-pretty text-muted-foreground">
                    {content.description}
                  </p>
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <Button href={game.paths[locale]}>
                      {copy.action}
                      <ArrowRight
                        aria-hidden="true"
                        className="transition-transform duration-200 motion-safe:group-hover:translate-x-1 motion-reduce:transition-none"
                      />
                    </Button>
                    <GooglePlayBadge
                      href={game.storeUrl}
                      locale={locale}
                      label="Google Play"
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGamesSection;
