import type { PublishedApp } from "@/types/app";
import type { SiteLocale } from "@/types/site";

interface ProductGroupProps {
  id: string;
  title: string;
  description: string;
  countLabel: string;
  apps: readonly PublishedApp[];
  locale: SiteLocale;
  compact?: boolean;
}

// 쓰임새 하나를 큰 섹션으로 소개한다. 영어 제목 + 언어별 설명 + 앱 이름 목록. 스토어 링크는 아직 달지 않는다.
// compact: 팬 앱처럼 수가 많을 때 이름을 한 줄로 흘려 쓴다.
const ProductGroup = ({
  id,
  title,
  description,
  countLabel,
  apps,
  locale,
  compact = false,
}: ProductGroupProps) => (
  <section
    aria-labelledby={`${id}-title`}
    className="grid gap-10 py-20 sm:py-28 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16"
  >
    <div>
      <h3
        id={`${id}-title`}
        lang="en"
        className="font-display text-display-lg font-extrabold tracking-[-0.045em]"
      >
        {title}
      </h3>
      <p className="mt-5 max-w-sm text-body-lg text-pretty text-muted-foreground">
        {description}
      </p>
      <p className="mt-6 font-mono text-caption text-muted-foreground">
        {countLabel.replace("{count}", String(apps.length))}
      </p>
    </div>

    {compact ? (
      <p className="self-end text-title-md leading-relaxed font-semibold text-pretty">
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
      <ul className="grid gap-8 self-end">
        {apps.map((app) => (
          <li key={app.packageName}>
            <p className="font-display text-title-lg font-extrabold tracking-[-0.03em]">
              {app.copy[locale].name}
            </p>
            <p className="mt-1 text-small text-muted-foreground">
              {app.copy[locale].category}
            </p>
          </li>
        ))}
      </ul>
    )}
  </section>
);

export default ProductGroup;
