import type { PublishedApp } from "@/types/app";
import type { SiteLocale } from "@/types/site";

interface ProductGroupProps {
  id: string;
  title: string;
  description: string;
  apps: readonly PublishedApp[];
  locale: SiteLocale;
  compact?: boolean;
}

// 제품 섹션의 한 열. 영어 제목 + 언어별 설명 + 앱 이름 목록. 스토어 링크는 아직 달지 않는다.
// compact: 팬 앱처럼 수가 많을 때 이름을 이어서 흘려 쓴다.
const ProductGroup = ({
  id,
  title,
  description,
  apps,
  locale,
  compact = false,
}: ProductGroupProps) => (
  <section aria-labelledby={`${id}-title`} className="flex flex-col">
    <h3
      id={`${id}-title`}
      lang="en"
      className="font-display text-title-lg font-extrabold tracking-[-0.03em]"
    >
      {title}
    </h3>
    <p className="mt-3 text-small text-pretty text-muted-foreground">
      {description}
    </p>

    {compact ? (
      <p className="mt-8 text-body leading-loose font-semibold">
        {apps.map((app, index) => (
          // 구분점이 줄 맨 앞에 오지 않도록 이름과 뒤 구분점을 한 덩어리로 묶는다.
          <span key={app.packageName}>
            <span className="whitespace-nowrap">
              {app.copy[locale].name.replace(/ Stan$/, "")}
              {index < apps.length - 1 ? (
                <span aria-hidden="true" className="text-muted-foreground">
                  {" ·"}
                </span>
              ) : null}
            </span>{" "}
          </span>
        ))}
      </p>
    ) : (
      <ul className="mt-8 grid gap-5">
        {apps.map((app) => (
          <li key={app.packageName}>
            <p className="text-title-sm font-semibold">
              {app.copy[locale].name}
            </p>
            <p className="mt-0.5 text-small text-muted-foreground">
              {app.copy[locale].category}
            </p>
          </li>
        ))}
      </ul>
    )}
  </section>
);

export default ProductGroup;
