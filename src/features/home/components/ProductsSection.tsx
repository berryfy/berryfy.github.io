import { ArrowRight } from "lucide-react";

import Button from "@/components/atoms/Button";
import { publishedApps } from "@/constants/apps";
import AppTile from "@/features/home/components/AppTile";
import FanAppTile from "@/features/home/components/FanAppTile";
import {
  homeSections,
  moreAppsPaths,
} from "@/features/home/constants/sections";
import type { SiteCopy } from "@/features/home/types/home";
import type { SiteLocale } from "@/types/site";

interface ProductsSectionProps {
  locale: SiteLocale;
  label: string;
  copy: SiteCopy["products"];
}

const generalApps = publishedApps.filter((app) => app.group === "general");
const fanApps = publishedApps.filter((app) => app.group === "fandom");

// 출시된 앱·게임 목록. 제목은 페이지 언어로 두어 영어 큰 문장이 이어지는 첫 화면·소개와 구분한다.
const ProductsSection = ({ locale, label, copy }: ProductsSectionProps) => (
  <section
    id={homeSections.products}
    aria-labelledby={`${homeSections.products}-title`}
    className="scroll-mt-24 py-24 sm:py-32"
  >
    <div className="mx-auto max-w-page px-4 sm:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-mono text-caption text-muted-foreground">
            {label}
          </p>
          <h2
            id={`${homeSections.products}-title`}
            className="mt-3 font-display text-title-lg font-extrabold tracking-[-0.03em]"
          >
            {copy.title}
          </h2>
        </div>
        <Button
          href={moreAppsPaths[locale]}
          variant="ghost"
          className="-ml-5 sm:-mr-5 sm:ml-0"
        >
          {copy.viewAll}
          <ArrowRight aria-hidden="true" />
        </Button>
      </div>

      <ul className="mt-10 grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
        {generalApps.map((app) => (
          <AppTile
            key={app.packageName}
            app={app}
            locale={locale}
            storeLabel={copy.storeLabel}
          />
        ))}
      </ul>

      <h3 className="mt-16 text-small font-semibold text-muted-foreground">
        {copy.fandomTitle}
        <span className="ml-2 font-mono text-caption">{fanApps.length}</span>
      </h3>
      <ul className="mt-5 grid grid-cols-4 gap-x-3 gap-y-5 sm:grid-cols-7 lg:grid-cols-10">
        {fanApps.map((app) => (
          <FanAppTile
            key={app.packageName}
            app={app}
            locale={locale}
            storeLabel={copy.storeLabel}
          />
        ))}
      </ul>
    </div>
  </section>
);

export default ProductsSection;
