import { siteFontVariables } from "@/app/fonts";
import PrivacyPolicyPage from "@/features/legal/components/privacy-policy-page";
import {
  divePrivacyLanguageAlternates,
  divePrivacyLocalePaths,
  divePrivacyPolicies,
} from "@/features/legal/constants/dive-privacy-copy";
import { createPrivacyMetadata } from "@/features/legal/utils/metadata";

export const metadata = createPrivacyMetadata({
  locale: "en",
  policies: divePrivacyPolicies,
  localePaths: divePrivacyLocalePaths,
  languageAlternates: divePrivacyLanguageAlternates,
});

export default function Page() {
  return (
    <PrivacyPolicyPage
      locale="en"
      fontClassName={siteFontVariables.en}
      policies={divePrivacyPolicies}
      localePaths={divePrivacyLocalePaths}
    />
  );
}
