import Image from "next/image";

import { googlePlayUrlForLocale } from "@/lib/google-play-url";
import type { PublishedApp } from "@/types/app";
import type { SiteLocale } from "@/types/site";

interface AppTileProps {
  app: PublishedApp;
  locale: SiteLocale;
  storeLabel: string;
}

// 일반 앱·게임 한 칸. 아이콘·이름·분류만 두고 테두리 없이 hover 때만 표면을 띄운다.
const AppTile = ({ app, locale, storeLabel }: AppTileProps) => {
  const copy = app.copy[locale];

  return (
    <li>
      <a
        href={googlePlayUrlForLocale(app.storeUrl, locale)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${copy.name} — ${storeLabel}`}
        className="-mx-3 flex items-center gap-4 rounded-lg p-3 transition-colors outline-none hover:bg-card focus-visible:ring-3 focus-visible:ring-ring/60"
      >
        <Image
          src={app.iconPath}
          alt=""
          width={256}
          height={256}
          className="size-16 shrink-0 rounded-md object-cover"
        />
        <span className="min-w-0">
          <span className="block truncate text-title-sm font-semibold">
            {copy.name}
          </span>
          <span className="mt-0.5 block text-small text-muted-foreground">
            {copy.category}
          </span>
        </span>
      </a>
    </li>
  );
};

export default AppTile;
