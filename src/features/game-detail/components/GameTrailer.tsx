import { ArrowUpRight } from "lucide-react";
import Button from "@/components/atoms/Button";
import type { SiteLocale } from "@/types/site";

interface GameTrailerProps {
  videoId: string;
  locale: SiteLocale;
  copy: { title: string; playerTitle: string; watch: string };
}

const GameTrailer = ({ videoId, locale, copy }: GameTrailerProps) => (
  <section
    aria-labelledby="game-trailer-title"
    className="mx-auto max-w-page px-4 py-12 sm:px-8 sm:py-20"
  >
    <div className="flex flex-wrap items-end justify-between gap-4">
      <h2
        id="game-trailer-title"
        className="max-w-prose font-display text-display-md font-extrabold tracking-[-0.04em] text-pretty"
      >
        {copy.title}
      </h2>
      <Button
        href={`https://www.youtube.com/watch?v=${videoId}`}
        external
        variant="ghost"
      >
        {copy.watch}
        <ArrowUpRight aria-hidden="true" />
      </Button>
    </div>
    <div className="mt-10 aspect-video min-h-50 overflow-hidden rounded-xl bg-card">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${videoId}?playsinline=1&rel=0&hl=${locale}`}
        title={copy.playerTitle}
        width="1136"
        height="639"
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="h-full min-h-50 w-full border-0"
      />
    </div>
  </section>
);

export default GameTrailer;
