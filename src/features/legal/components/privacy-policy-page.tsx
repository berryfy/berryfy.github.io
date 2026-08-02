import SiteHeader from "@/components/site-header";
import { siteConfig } from "@/constants/site";
import PrivacyDataTable from "@/features/legal/components/privacy-data-table";
import PrivacyExternalService from "@/features/legal/components/privacy-external-service";
import PrivacySection from "@/features/legal/components/privacy-section";
import { privacyPolicyCopy } from "@/features/legal/constants/privacy-policy-copy";
import { privacyLinks } from "@/features/legal/constants/privacy-links";
import type {
  AppPrivacyPolicy,
  PrivacyLocale,
} from "@/features/legal/types/privacy-policy";

interface PrivacyPolicyPageProps {
  locale: PrivacyLocale;
  fontClassName: string;
  policies: Record<PrivacyLocale, AppPrivacyPolicy>;
  localePaths: Record<PrivacyLocale, string>;
}

export default function PrivacyPolicyPage({
  locale,
  fontClassName,
  policies,
  localePaths,
}: PrivacyPolicyPageProps) {
  const policy = policies[locale];
  const copy = privacyPolicyCopy[locale];
  const privacyRequestMailto = `mailto:${policy.contactEmail}?subject=${encodeURIComponent(`${policy.appName} privacy request`)}`;

  return (
    <div
      lang={locale}
      className={`${fontClassName} min-h-screen bg-background font-sans text-foreground`}
    >
      <SiteHeader
        homeHref={siteConfig.routes.home}
        locale={locale}
        languagePaths={localePaths}
      />

      <main className="mx-auto max-w-[900px] px-4 py-8 sm:px-8 sm:py-12 lg:py-14">
        <header>
          <p className="text-sm text-muted-foreground">{policy.appName}</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {copy.pageTitle}
          </h1>
          <p className="mt-4 max-w-[720px] leading-7 text-muted-foreground">
            {copy.intro}
          </p>
          <dl className="mt-6 grid gap-2 border-y border-border py-4 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <dt className="inline font-semibold">{copy.labels.app}: </dt>
              <dd className="inline">{policy.appName}</dd>
            </div>
            <div>
              <dt className="inline font-semibold">{copy.labels.business}: </dt>
              <dd className="inline">{policy.businessName}</dd>
            </div>
            <div>
              <dt className="inline font-semibold">
                {copy.labels.effectiveDate}:{" "}
              </dt>
              <dd className="inline">{policy.effectiveDate}</dd>
            </div>
          </dl>
        </header>

        <nav
          className="mt-8 rounded-2xl border border-border/80 bg-card/45 p-4 sm:p-5"
          aria-label={copy.labels.contents}
        >
          <h2 className="text-sm font-bold tracking-[-0.01em]">
            {copy.labels.contents}
          </h2>
          <ol className="mt-3 grid gap-x-5 gap-y-1 text-sm sm:grid-cols-2 lg:grid-cols-3">
            {policy.navigation.map((item, index) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block rounded-lg px-2 py-1.5 leading-5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                >
                  {index + 1}. {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <article className="mt-10 space-y-10">
          <section
            id="overview"
            className="scroll-mt-24 rounded-2xl bg-muted/70 p-5"
          >
            <h2 className="text-lg font-bold">1. {copy.overview.title}</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-muted-foreground">
              {copy.overview.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <PrivacySection number="2" title={copy.purposes.title} id="purpose">
            <p>{copy.purposes.intro}</p>
            <ul>
              {copy.purposes.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </PrivacySection>

          <PrivacySection number="3" title={copy.data.title} id="data">
            <p>{copy.data.intro}</p>
            <h3>{copy.data.serverTitle}</h3>
            <PrivacyDataTable items={policy.serverData} labels={copy.labels} />
            <p>{copy.data.localIntro}</p>
            <h3>{copy.data.localTitle}</h3>
            <PrivacyDataTable items={policy.localData} labels={copy.labels} />
          </PrivacySection>

          <PrivacySection
            number="4"
            title={copy.collection.title}
            id="collection"
          >
            <ul>
              {copy.collection.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>{copy.collection.permissions}</p>
            <p>{copy.collection.publicContent}</p>
          </PrivacySection>

          <PrivacySection
            number="5"
            title={copy.thirdParties.title}
            id="third-parties"
          >
            {copy.thirdParties.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </PrivacySection>

          <PrivacySection
            number="6"
            title={copy.external.title}
            id="external-services"
          >
            <p>{copy.external.intro}</p>
            <p>{copy.external.providerControl}</p>
            <div className="space-y-3">
              {policy.externalServices.map((service) => (
                <PrivacyExternalService
                  key={`${service.provider}-${service.service}`}
                  service={service}
                  labels={copy.labels}
                />
              ))}
            </div>
            <p>{copy.external.youtube}</p>
            <p>
              <a href={privacyLinks.youtubeTerms}>
                {copy.external.youtubeTerms}
              </a>
              {" · "}
              <a href={privacyLinks.googlePrivacy}>
                {copy.external.googlePrivacy}
              </a>
            </p>
          </PrivacySection>

          <PrivacySection number="7" title={copy.deletion.title} id="deletion">
            {copy.deletion.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </PrivacySection>

          <PrivacySection number="8" title={copy.rights.title} id="rights">
            <p>{copy.rights.beforeEmail}</p>
            <p>
              <a href={privacyRequestMailto}>{policy.contactEmail}</a>
            </p>
            {copy.rights.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </PrivacySection>

          <PrivacySection
            number="9"
            title={copy.automatic.title}
            id="automatic"
          >
            <p>{copy.automatic.intro.replace("{appName}", policy.appName)}</p>
            <ul>
              {copy.automatic.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </PrivacySection>

          <PrivacySection number="10" title={copy.security.title} id="security">
            <ul>
              {copy.security.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {copy.security.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </PrivacySection>

          <PrivacySection number="11" title={copy.contact.title} id="contact">
            <dl className="grid gap-2 rounded-xl border border-border bg-card/40 p-4 text-sm sm:grid-cols-2">
              <div>
                <dt className="inline font-semibold">
                  {copy.contact.department}:{" "}
                </dt>
                <dd className="inline">{policy.businessName}</dd>
              </div>
              <div>
                <dt className="inline font-semibold">{copy.contact.email}: </dt>
                <dd className="inline">
                  <a href={`mailto:${policy.contactEmail}`}>
                    {policy.contactEmail}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="inline font-semibold">{copy.contact.app}: </dt>
                <dd className="inline">{policy.appName}</dd>
              </div>
            </dl>
            <p>{copy.contact.intro}</p>
            <ul>
              {copy.contact.agencies.map((agency) => (
                <li key={agency.label}>
                  {agency.label}: <a href={agency.url}>{agency.displayUrl}</a> ·{" "}
                  {agency.phone}
                </li>
              ))}
            </ul>
          </PrivacySection>

          <PrivacySection number="12" title={copy.changes.title} id="changes">
            <p>{copy.changes.text.replace("{date}", policy.effectiveDate)}</p>
          </PrivacySection>
        </article>
      </main>

      <footer className="border-t border-border bg-background">
        <div className="mx-auto max-w-[900px] px-4 py-6 text-sm text-muted-foreground sm:px-8">
          <p>
            {policy.businessName} · {policy.contactEmail}
          </p>
        </div>
      </footer>
    </div>
  );
}
