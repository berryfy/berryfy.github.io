import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import type { MoreApp } from "@/features/more-apps/types/more-apps";
import { googlePlayUrlForLocale } from "@/features/more-apps/utils/google-play-url";
import type { SiteLocale } from "@/types/site";

interface MoreAppItemProps {
  app: MoreApp;
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
        className="group flex min-h-[112px] items-center gap-3.5 rounded-[1.4rem] border border-border/80 bg-white p-3 shadow-[0_10px_36px_rgba(45,28,50,0.045)] transition duration-200 active:scale-[0.985] sm:min-h-[128px] sm:gap-5 sm:p-4"
      >
        <Image
          src={app.iconPath}
          alt=""
          width={256}
          height={256}
          sizes="(max-width: 640px) 76px, 92px"
          className="size-[76px] shrink-0 rounded-[1.15rem] object-cover shadow-[0_8px_22px_rgba(45,28,50,0.12)] sm:size-[92px] sm:rounded-[1.35rem]"
        />

        <div className="min-w-0 flex-1 py-0.5">
          <p className="text-[0.68rem] font-semibold tracking-[0.12em] text-primary uppercase sm:text-xs">
            {copy.category}
          </p>
          <h2 className="mt-1 truncate text-base font-semibold tracking-[-0.025em] text-foreground sm:text-lg">
            {copy.name}
          </h2>
          <p className="mt-1 line-clamp-2 text-xs leading-5 text-muted-foreground sm:text-sm sm:leading-6">
            {copy.description}
          </p>
        </div>

        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground sm:size-10">
          <ArrowUpRight className="size-4" aria-hidden="true" />
        </span>
      </a>
    </li>
  );
}
