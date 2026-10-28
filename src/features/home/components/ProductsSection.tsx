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

// 출시된 앱을 쓰임새별 큰 섹션(Play · Tools · Fandom)으로 나눠 소개한다.
const ProductsSection = ({ locale, label, copy }: ProductsSectionProps) => (
  <section
    id={homeSections.products}
    aria-labelledby={`${homeSections.products}-title`}
    className="scroll-mt-24 pt-12"
  >
    <div className="mx-auto max-w-page px-4 sm:px-8">
      <h2
        id={`${homeSections.products}-title`}
        className="font-mono text-caption text-muted-foreground"
      >
        {label}
      </h2>
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
  </section>
);

export default ProductsSection;
