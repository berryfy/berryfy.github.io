import SiteFooter from "@/components/widgets/SiteFooter";
import SiteHeader from "@/components/widgets/SiteHeader";
import { businessInfo } from "@/constants/business";
import { localeDetails, mainContentId } from "@/constants/site";
import PrivacySection from "@/features/legal/components/privacy-section";
import { privacyLinks } from "@/features/legal/constants/privacy-links";
import { privacyPolicyCopy } from "@/features/legal/constants/privacy-policy-copy";
import { zombieCarePrivacy } from "@/features/legal/constants/zombie-care-privacy";
import {
  zombieCarePrivacyCopy,
  zombieCarePrivacyLocalePaths,
} from "@/features/legal/constants/zombie-care-privacy-copy";
import type { PrivacyLocale } from "@/features/legal/types/privacy-policy";

interface ZombieCarePrivacyPageProps {
  locale: PrivacyLocale;
  fontClassName: string;
}

const ZombieCarePrivacyPage = ({
  locale,
  fontClassName,
}: ZombieCarePrivacyPageProps) => {
  const copy = zombieCarePrivacyCopy[locale];
  const { pageTitle, labels } = privacyPolicyCopy[locale];
  const homeHref = localeDetails[locale].path;
  const { appName, effectiveDate } = zombieCarePrivacy;

  return (
    <div
      lang={locale}
      className={`${fontClassName} min-h-screen bg-background font-sans text-foreground`}
    >
      <SiteHeader
        homeHref={homeHref}
        locale={locale}
        languagePaths={zombieCarePrivacyLocalePaths}
      />
      <main
        id={mainContentId}
        className="mx-auto max-w-4xl px-4 pt-16 pb-12 sm:px-8 sm:pt-24"
      >
        <header>
          <p className="text-caption text-muted-foreground">{appName}</p>
          <h1 className="mt-3 font-display text-display-md font-extrabold">
            {pageTitle}
          </h1>
          <p className="mt-5 text-body-lg text-muted-foreground">
            {copy.intro}
          </p>
          <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 text-small">
            <div>
              <dt className="inline text-muted-foreground">
                {labels.business}{" "}
              </dt>
              <dd className="inline font-semibold">{businessInfo.name}</dd>
            </div>
            <div>
              <dt className="inline text-muted-foreground">
                {labels.effectiveDate}{" "}
              </dt>
              <dd className="inline font-semibold">
                <time dateTime={effectiveDate}>{effectiveDate}</time>
              </dd>
            </div>
          </dl>
        </header>
        <article className="mt-12 space-y-12">
          <PrivacySection number="1" title={copy.localTitle} id="game-data">
            <p>{copy.local}</p>
          </PrivacySection>
          <PrivacySection number="2" title={copy.adsTitle} id="rewarded-ads">
            <p>{copy.ads}</p>
            <p>{copy.transfer}</p>
            <p>{copy.choices}</p>
            <ul>
              <li>
                <a
                  className="inline-flex min-h-11 items-center"
                  href={privacyLinks.googlePrivacy}
                >
                  {copy.googlePrivacy}
                </a>
              </li>
              <li>
                <a
                  className="inline-flex min-h-11 items-center"
                  href={privacyLinks.googleMobileAdsData}
                >
                  {copy.googleAdsData}
                </a>
              </li>
            </ul>
          </PrivacySection>
          <PrivacySection number="3" title={copy.supportTitle} id="support">
            <p>{copy.support}</p>
          </PrivacySection>
          <PrivacySection number="4" title={copy.rightsTitle} id="rights">
            <p>{copy.rights}</p>
            <p>
              <a
                className="inline-flex min-h-11 items-center break-all"
                href={`mailto:${businessInfo.contactEmail}`}
              >
                {businessInfo.contactEmail}
              </a>
            </p>
          </PrivacySection>
          <PrivacySection number="5" title={copy.changesTitle} id="changes">
            <p>{copy.changes}</p>
          </PrivacySection>
        </article>
      </main>
      <SiteFooter
        homeHref={homeHref}
        locale={locale}
        languagePaths={zombieCarePrivacyLocalePaths}
      />
    </div>
  );
};

export default ZombieCarePrivacyPage;
