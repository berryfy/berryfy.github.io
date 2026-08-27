import { siteFontVariables } from "@/app/fonts";
import PrivacyPolicyPage from "@/features/legal/components/privacy-policy-page";
import {
  nswerPrivacyLanguageAlternates,
  nswerPrivacyLocalePaths,
  nswerPrivacyPolicies,
} from "@/features/legal/constants/nswer-privacy-copy";
import { createPrivacyMetadata } from "@/features/legal/utils/metadata";

export const metadata = createPrivacyMetadata({
  locale: "en",
  policies: nswerPrivacyPolicies,
  localePaths: nswerPrivacyLocalePaths,
  languageAlternates: nswerPrivacyLanguageAlternates,
});

export default function Page() {
  return (
    <PrivacyPolicyPage
      locale="en"
      fontClassName={siteFontVariables.en}
      policies={nswerPrivacyPolicies}
      localePaths={nswerPrivacyLocalePaths}
    />
  );
}
