import { businessInfo } from "@/constants/business";
import PrivacyPolicyLayout from "@/features/legal/components/PrivacyPolicyLayout";
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
  const { appName, effectiveDate } = zombieCarePrivacy;

  return (
    <PrivacyPolicyLayout
      locale={locale}
      fontClassName={fontClassName}
      localePaths={zombieCarePrivacyLocalePaths}
      appName={appName}
      businessName={businessInfo.name}
      effectiveDate={effectiveDate}
      pageTitle={pageTitle}
      intro={copy.intro}
      labels={labels}
      navigation={[
        { id: "game-data", label: copy.localTitle },
        { id: "rewarded-ads", label: copy.adsTitle },
        { id: "support", label: copy.supportTitle },
        { id: "rights", label: copy.rightsTitle },
        { id: "changes", label: copy.changesTitle },
      ]}
    >
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
    </PrivacyPolicyLayout>
  );
};

export default ZombieCarePrivacyPage;
