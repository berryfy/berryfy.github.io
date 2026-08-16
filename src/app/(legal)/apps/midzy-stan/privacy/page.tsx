import { siteFontVariables } from "@/app/fonts";
import PrivacyPolicyPage from "@/features/legal/components/privacy-policy-page";
import {
  midzyPrivacyLanguageAlternates,
  midzyPrivacyLocalePaths,
  midzyPrivacyPolicies,
} from "@/features/legal/constants/midzy-privacy-copy";
import { createPrivacyMetadata } from "@/features/legal/utils/metadata";

export const metadata = createPrivacyMetadata({
  locale: "en",
  policies: midzyPrivacyPolicies,
  localePaths: midzyPrivacyLocalePaths,
  languageAlternates: midzyPrivacyLanguageAlternates,
});

export default function Page() {
  return (
    <PrivacyPolicyPage
      locale="en"
      fontClassName={siteFontVariables.en}
      policies={midzyPrivacyPolicies}
      localePaths={midzyPrivacyLocalePaths}
    />
  );
}
