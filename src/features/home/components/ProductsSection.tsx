import { publishedApps } from "@/constants/apps";
import ProductGroup from "@/features/home/components/ProductGroup";
import { productGroups } from "@/features/home/constants/products";
import { homeSections } from "@/features/home/constants/sections";
import type { SiteCopy } from "@/features/home/types/home";
import type { SiteLocale } from "@/types/site";

interface ProductsSectionProps {
  locale: SiteLocale;
  label: string;
  copy: SiteCopy["products"];
}

// 출시된 앱을 쓰임새별 세 열(Play · Tools · Fandom)로 정리한 목차.
// 큰 영어 문장이 이어지는 첫 화면·소개 사이에서 리듬을 바꾸도록 제목은 페이지 언어로, 크기는 한 단계 낮게 둔다.
const ProductsSection = ({ locale, label, copy }: ProductsSectionProps) => (
  <section
    id={homeSections.products}
    aria-labelledby={`${homeSections.products}-title`}
    className="scroll-mt-24 py-24 sm:py-32"
  >
    <div className="mx-auto max-w-page px-4 sm:px-8">
      <p className="font-mono text-caption text-muted-foreground">{label}</p>
      <h2
        id={`${homeSections.products}-title`}
        className="mt-3 font-display text-display-md font-extrabold tracking-[-0.04em]"
      >
        {copy.title}
      </h2>
      <div className="mt-16 grid gap-16 md:grid-cols-3 md:gap-10 lg:gap-16">
        {productGroups.map(({ group, title }) => (
          <ProductGroup
            key={group}
            id={`${homeSections.products}-${group}`}
            title={title}
            description={copy[group]}
            countLabel={copy.countLabel}
            apps={publishedApps.filter((app) => app.group === group)}
            locale={locale}
            compact={group === "fandom"}
          />
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
