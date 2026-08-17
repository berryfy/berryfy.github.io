import { siteFontVariables } from "@/app/fonts";
import PrivacyPolicyPage from "@/features/legal/components/privacy-policy-page";
import {
  swithPrivacyLanguageAlternates,
  swithPrivacyLocalePaths,
  swithPrivacyPolicies,
} from "@/features/legal/constants/swith-privacy-copy";
import { createPrivacyMetadata } from "@/features/legal/utils/metadata";

export const metadata = createPrivacyMetadata({
  locale: "en",
  policies: swithPrivacyPolicies,
  localePaths: swithPrivacyLocalePaths,
  languageAlternates: swithPrivacyLanguageAlternates,
});

export default function Page() {
  return (
    <PrivacyPolicyPage
      locale="en"
      fontClassName={siteFontVariables.en}
      policies={swithPrivacyPolicies}
      localePaths={swithPrivacyLocalePaths}
    />
  );
}
