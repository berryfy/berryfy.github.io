import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import type { PublishedApp } from "@/types/app";
import { googlePlayUrlForLocale } from "@/lib/google-play-url";
import type { SiteLocale } from "@/types/site";

interface MoreAppItemProps {
  app: PublishedApp;
  locale: SiteLocale;
  actionLabel: string;
}

export default function MoreAppItem({
  app,
  locale,
  actionLabel,
}: MoreAppItemProps) {
  const copy = app.copy[locale];
  const storeUrl = googlePlayUrlForLocale(app.storeUrl, locale);

  return (
    <li>
      <a
        href={storeUrl}
        rel="external"
        aria-label={`${copy.name} — ${actionLabel}`}
        className="group flex items-center gap-4 rounded-lg bg-card p-3 transition-colors outline-none hover:bg-popover focus-visible:ring-3 focus-visible:ring-ring/60 sm:gap-5 sm:p-4"
      >
        <Image
          src={app.iconPath}
          alt=""
          width={256}
          height={256}
          className="size-18 shrink-0 rounded-md object-cover sm:size-20"
        />

        <div className="min-w-0 flex-1 py-0.5">
          <p className="text-caption text-muted-foreground">{copy.category}</p>
          <h2 className="mt-0.5 truncate text-title-sm font-semibold">
            {copy.name}
          </h2>
          <p className="mt-1 line-clamp-2 text-small text-muted-foreground">
            {copy.description}
          </p>
        </div>

        <span className="flex size-10 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-colors group-hover:text-foreground">
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </span>
      </a>
    </li>
  );
}
