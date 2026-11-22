import { businessInfo } from "@/constants/business";
import PrivacyPolicyLayout from "@/features/legal/components/PrivacyPolicyLayout";
import PrivacyDataTable from "@/features/legal/components/privacy-data-table";
import PrivacySection from "@/features/legal/components/privacy-section";
import { privacyLinks } from "@/features/legal/constants/privacy-links";
import { privacyPolicyCopy } from "@/features/legal/constants/privacy-policy-copy";
import { zombieCarePrivacy } from "@/features/legal/constants/zombie-care-privacy";
import {
  zombieCarePolicySections,
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
  const policy = zombieCarePolicySections[locale];
  const { pageTitle, labels } = privacyPolicyCopy[locale];
  const contactLink = (
    <a href={`mailto:${businessInfo.contactEmail}`}>
      {businessInfo.contactEmail}
    </a>
  );
  const sections = [
    {
      id: "purpose",
      label: policy.purpose,
      content: (
        <>
          <p>{policy.emailData.purpose}</p>
          <p>{copy.local}</p>
        </>
      ),
    },
    {
      id: "data",
      label: policy.data,
      content: <PrivacyDataTable items={[policy.emailData]} labels={labels} />,
    },
    {
      id: "third-parties",
      label: policy.thirdParties,
      content: <p>{policy.thirdPartyText}</p>,
    },
    {
      id: "external-services",
      label: policy.transfer,
      content: (
        <div className="flex flex-col gap-3 rounded-lg bg-card p-5">
          <h3 className="m-0!">Google AdMob · UMP</h3>
          <p>{copy.transfer}</p>
          <p>
            <a href={privacyLinks.googlePrivacy}>{copy.googlePrivacy}</a>
          </p>
        </div>
      ),
    },
    {
      id: "deletion",
      label: policy.deletion,
      content: <p>{policy.deletionText}</p>,
    },
    {
      id: "rights",
      label: policy.rights,
      content: (
        <>
          <p>{copy.rights}</p>
          <p>{contactLink}</p>
        </>
      ),
    },
    {
      id: "security",
      label: policy.security,
      content: <p>{policy.securityText}</p>,
    },
    {
      id: "automatic",
      label: policy.automatic,
      content: (
        <>
          <p>{copy.ads}</p>
          <p>{copy.choices}</p>
          <p>
            <a href={privacyLinks.googleMobileAdsData}>{copy.googleAdsData}</a>
          </p>
        </>
      ),
    },
    {
      id: "contact",
      label: policy.contact,
      content: (
        <dl className="grid gap-2 rounded-lg bg-card p-5 text-small sm:grid-cols-2">
          <div>
            <dt className="font-semibold">{labels.business}</dt>
            <dd>{businessInfo.name}</dd>
          </div>
          <div>
            <dt className="font-semibold">
              {privacyPolicyCopy[locale].contact.email}
            </dt>
            <dd>{contactLink}</dd>
          </div>
        </dl>
      ),
    },
    {
      id: "remedies",
      label: policy.remedies,
      content: (
        <ul>
          <li>
            <a href={privacyLinks.kisaPrivacy}>{policy.complaint}</a>
          </li>
          <li>
            <a href={privacyLinks.privacyDispute}>{policy.dispute}</a>
          </li>
        </ul>
      ),
    },
    { id: "changes", label: policy.changes, content: <p>{copy.changes}</p> },
  ];

  return (
    <PrivacyPolicyLayout
      locale={locale}
      fontClassName={fontClassName}
      localePaths={zombieCarePrivacyLocalePaths}
      appName={zombieCarePrivacy.appName}
      businessName={businessInfo.name}
      effectiveDate={zombieCarePrivacy.effectiveDate}
      pageTitle={pageTitle}
      intro={copy.intro}
      labels={labels}
      navigation={[
        { id: "overview", label: policy.overview },
        ...sections.map(({ id, label }) => ({ id, label })),
      ]}
    >
      <section
        id="overview"
        className="scroll-mt-24 rounded-lg bg-card p-6 sm:p-8"
      >
        <h2 className="font-display text-title-md font-extrabold tracking-[-0.02em]">
          1. {policy.overview}
        </h2>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
          {policy.summary.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
      {sections.map(({ id, label, content }, index) => (
        <PrivacySection
          key={id}
          id={id}
          number={String(index + 2)}
          title={label}
        >
          {content}
        </PrivacySection>
      ))}
    </PrivacyPolicyLayout>
  );
};

export default ZombieCarePrivacyPage;
