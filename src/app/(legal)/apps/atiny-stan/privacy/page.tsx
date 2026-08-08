import { siteFontVariables } from "@/app/fonts";
import PrivacyPolicyPage from "@/features/legal/components/privacy-policy-page";
import {
  atinyPrivacyLanguageAlternates,
  atinyPrivacyLocalePaths,
  atinyPrivacyPolicies,
} from "@/features/legal/constants/atiny-privacy-copy";
import { createPrivacyMetadata } from "@/features/legal/utils/metadata";

export const metadata = createPrivacyMetadata({
  locale: "en",
  policies: atinyPrivacyPolicies,
  localePaths: atinyPrivacyLocalePaths,
  languageAlternates: atinyPrivacyLanguageAlternates,
});

export default function Page() {
  return (
    <PrivacyPolicyPage
      locale="en"
      fontClassName={siteFontVariables.en}
      policies={atinyPrivacyPolicies}
      localePaths={atinyPrivacyLocalePaths}
    />
  );
}
