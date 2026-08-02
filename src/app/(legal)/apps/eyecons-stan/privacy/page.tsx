import { siteFontVariables } from "@/app/fonts";
import PrivacyPolicyPage from "@/features/legal/components/privacy-policy-page";
import {
  eyeconsPrivacyLanguageAlternates,
  eyeconsPrivacyLocalePaths,
  eyeconsPrivacyPolicies,
} from "@/features/legal/constants/eyecons-privacy-copy";
import { createPrivacyMetadata } from "@/features/legal/utils/metadata";

export const metadata = createPrivacyMetadata({
  locale: "en",
  policies: eyeconsPrivacyPolicies,
  localePaths: eyeconsPrivacyLocalePaths,
  languageAlternates: eyeconsPrivacyLanguageAlternates,
});

export default function Page() {
  return (
    <PrivacyPolicyPage
      locale="en"
      fontClassName={siteFontVariables.en}
      policies={eyeconsPrivacyPolicies}
      localePaths={eyeconsPrivacyLocalePaths}
    />
  );
}
