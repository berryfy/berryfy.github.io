import { siteFontVariables } from "@/app/fonts";
import PrivacyPolicyPage from "@/features/legal/components/privacy-policy-page";
import {
  moaPrivacyLanguageAlternates,
  moaPrivacyLocalePaths,
  moaPrivacyPolicies,
} from "@/features/legal/constants/moa-privacy-copy";
import { createPrivacyMetadata } from "@/features/legal/utils/metadata";

export const metadata = createPrivacyMetadata({
  locale: "en",
  policies: moaPrivacyPolicies,
  localePaths: moaPrivacyLocalePaths,
  languageAlternates: moaPrivacyLanguageAlternates,
});

export default function Page() {
  return (
    <PrivacyPolicyPage
      locale="en"
      fontClassName={siteFontVariables.en}
      policies={moaPrivacyPolicies}
      localePaths={moaPrivacyLocalePaths}
    />
  );
}
