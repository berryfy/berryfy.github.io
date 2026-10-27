import Image from "next/image";

import { googlePlayUrlForLocale } from "@/lib/google-play-url";
import type { PublishedApp } from "@/types/app";
import type { SiteLocale } from "@/types/site";

interface FanAppTileProps {
  app: PublishedApp;
  locale: SiteLocale;
  storeLabel: string;
}

// 팬 앱 시리즈 한 칸. 수가 많아 아이콘을 작게 두고 이름은 한 줄로 줄인다.
const FanAppTile = ({ app, locale, storeLabel }: FanAppTileProps) => {
  const copy = app.copy[locale];

  return (
    <li>
      <a
        href={googlePlayUrlForLocale(app.storeUrl, locale)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${copy.name} — ${storeLabel}`}
        className="group flex flex-col items-center gap-2 rounded-md p-1 text-center outline-none focus-visible:ring-3 focus-visible:ring-ring/60"
      >
        <Image
          src={app.iconPath}
          alt=""
          width={256}
          height={256}
          className="aspect-square w-full max-w-16 rounded-md object-cover transition-transform duration-200 ease-standard group-hover:-translate-y-0.5"
        />
        <span className="w-full truncate text-caption text-muted-foreground transition-colors group-hover:text-foreground">
          {copy.name.replace(/ Stan$/, "")}
        </span>
      </a>
    </li>
  );
};

export default FanAppTile;
