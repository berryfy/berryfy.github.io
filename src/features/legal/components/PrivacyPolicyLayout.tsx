import type { ReactNode } from "react";

import SiteFooter from "@/components/widgets/SiteFooter";
import SiteHeader from "@/components/widgets/SiteHeader";
import { localeDetails, mainContentId } from "@/constants/site";
import type {
  AppPrivacyPolicy,
  PrivacyLocale,
  PrivacyPageCopy,
} from "@/features/legal/types/privacy-policy";

interface PrivacyPolicyLayoutProps
  extends
    Pick<
      AppPrivacyPolicy,
      "appName" | "businessName" | "effectiveDate" | "navigation"
    >,
    Pick<PrivacyPageCopy, "pageTitle" | "intro" | "labels"> {
  locale: PrivacyLocale;
  fontClassName: string;
  localePaths: Record<PrivacyLocale, string>;
  children: ReactNode;
}

const PrivacyPolicyLayout = ({
  appName,
  businessName,
  effectiveDate,
  navigation,
  pageTitle,
  intro,
  labels,
  locale,
  fontClassName,
  localePaths,
  children,
}: PrivacyPolicyLayoutProps) => (
  <div
    lang={locale}
    className={`${fontClassName} min-h-screen bg-background font-sans text-foreground`}
  >
    <SiteHeader
      homeHref={localeDetails[locale].path}
      locale={locale}
      languagePaths={localePaths}
    />

    <main
      id={mainContentId}
      className="mx-auto max-w-4xl px-4 pt-16 pb-8 sm:px-8 sm:pt-24"
    >
      <header>
        <p className="font-mono text-caption text-muted-foreground">
          {appName}
        </p>
        <h1 className="mt-3 font-display text-display-md font-extrabold tracking-[-0.04em]">
          {pageTitle}
        </h1>
        <p className="mt-5 max-w-prose text-body-lg text-pretty text-muted-foreground">
          {intro}
        </p>
        <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-small text-muted-foreground">
          <div>
            <dt className="inline">{labels.app} </dt>
            <dd className="inline font-semibold text-foreground">{appName}</dd>
          </div>
          <div>
            <dt className="inline">{labels.business} </dt>
            <dd className="inline font-semibold text-foreground">
              {businessName}
            </dd>
          </div>
          <div>
            <dt className="inline">{labels.effectiveDate} </dt>
            <dd className="inline font-semibold text-foreground">
              {effectiveDate}
            </dd>
          </div>
        </dl>
      </header>

      <nav
        className="mt-12 rounded-lg bg-card p-5 sm:p-6"
        aria-label={labels.contents}
      >
        <h2 className="font-mono text-caption text-muted-foreground">
          {labels.contents}
        </h2>
        <ol className="mt-3 grid gap-x-6 text-small sm:grid-cols-2 lg:grid-cols-3">
          {navigation.map((item, index) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="-mx-2 flex min-h-11 items-center rounded-sm px-2 text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/60"
              >
                {index + 1}. {item.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <article className="mt-16 space-y-16">{children}</article>
    </main>

    <SiteFooter
      locale={locale}
      homeHref={localeDetails[locale].path}
      languagePaths={localePaths}
    />
  </div>
);

export default PrivacyPolicyLayout;
