import { siteFontVariables } from "@/app/fonts";
import PrivacyPolicyPage from "@/features/legal/components/privacy-policy-page";
import {
  pawmpawmPrivacyLanguageAlternates,
  pawmpawmPrivacyLocalePaths,
  pawmpawmPrivacyPolicies,
} from "@/features/legal/constants/pawmpawm-privacy-copy";
import { createPrivacyMetadata } from "@/features/legal/utils/metadata";

export const metadata = createPrivacyMetadata({
  locale: "en",
  policies: pawmpawmPrivacyPolicies,
  localePaths: pawmpawmPrivacyLocalePaths,
  languageAlternates: pawmpawmPrivacyLanguageAlternates,
});

export default function Page() {
  return (
    <PrivacyPolicyPage
      locale="en"
      fontClassName={siteFontVariables.en}
      policies={pawmpawmPrivacyPolicies}
      localePaths={pawmpawmPrivacyLocalePaths}
    />
  );
}
