import { siteFontVariables } from "@/app/fonts";
import PrivacyPolicyPage from "@/features/legal/components/privacy-policy-page";
import {
  blinkPrivacyLanguageAlternates,
  blinkPrivacyLocalePaths,
  blinkPrivacyPolicies,
} from "@/features/legal/constants/blink-privacy-copy";
import { createPrivacyMetadata } from "@/features/legal/utils/metadata";

export const metadata = createPrivacyMetadata({
  locale: "en",
  policies: blinkPrivacyPolicies,
  localePaths: blinkPrivacyLocalePaths,
  languageAlternates: blinkPrivacyLanguageAlternates,
});

export default function Page() {
  return (
    <PrivacyPolicyPage
      locale="en"
      fontClassName={siteFontVariables.en}
      policies={blinkPrivacyPolicies}
      localePaths={blinkPrivacyLocalePaths}
    />
  );
}
