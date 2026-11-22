import PrivacyPolicyLayout from "@/features/legal/components/PrivacyPolicyLayout";
import PrivacyDataTable from "@/features/legal/components/privacy-data-table";
import PrivacyExternalService from "@/features/legal/components/privacy-external-service";
import PrivacySection from "@/features/legal/components/privacy-section";
import { privacyPolicyCopy } from "@/features/legal/constants/privacy-policy-copy";
import { privacyLinks } from "@/features/legal/constants/privacy-links";
import type {
  AppPrivacyPolicy,
  PrivacyLocale,
  PrivacyPageCopy,
} from "@/features/legal/types/privacy-policy";

interface PrivacyPolicyPageProps {
  locale: PrivacyLocale;
  fontClassName: string;
  policies: Record<PrivacyLocale, AppPrivacyPolicy>;
  localePaths: Record<PrivacyLocale, string>;
  pageCopy?: PrivacyPageCopy;
}

export default function PrivacyPolicyPage({
  locale,
  fontClassName,
  policies,
  localePaths,
  pageCopy,
}: PrivacyPolicyPageProps) {
  const policy = policies[locale];
  const copy = pageCopy ?? privacyPolicyCopy[locale];
  const privacyRequestMailto = `mailto:${policy.contactEmail}?subject=${encodeURIComponent(`${policy.appName} privacy request`)}`;

  return (
    <PrivacyPolicyLayout
      locale={locale}
      fontClassName={fontClassName}
      localePaths={localePaths}
      appName={policy.appName}
      businessName={policy.businessName}
      effectiveDate={policy.effectiveDate}
      navigation={policy.navigation}
      pageTitle={copy.pageTitle}
      intro={copy.intro}
      labels={copy.labels}
    >
      <section
        id="overview"
        className="scroll-mt-24 rounded-lg bg-card p-6 sm:p-8"
      >
        <h2 className="font-display text-title-md font-extrabold tracking-[-0.02em]">
          1. {copy.overview.title}
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
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

      <PrivacySection number="4" title={copy.collection.title} id="collection">
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
        {copy.external.youtube ? <p>{copy.external.youtube}</p> : null}
        <p>
          {copy.external.youtubeTerms ? (
            <>
              <a href={privacyLinks.youtubeTerms}>
                {copy.external.youtubeTerms}
              </a>
              {" · "}
            </>
          ) : null}
          <a href={privacyLinks.googlePrivacy}>{copy.external.googlePrivacy}</a>
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

      <PrivacySection number="9" title={copy.automatic.title} id="automatic">
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
        <dl className="grid gap-2 rounded-lg bg-card p-5 text-small sm:grid-cols-2">
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
    </PrivacyPolicyLayout>
  );
}
