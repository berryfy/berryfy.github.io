import { siteFontVariables } from "@/app/fonts";
import PrivacyPolicyPage from "@/features/legal/components/privacy-policy-page";
import {
  oncePrivacyLanguageAlternates,
  oncePrivacyLocalePaths,
  oncePrivacyPolicies,
} from "@/features/legal/constants/once-privacy-copy";
import { createPrivacyMetadata } from "@/features/legal/utils/metadata";

export const metadata = createPrivacyMetadata({
  locale: "en",
  policies: oncePrivacyPolicies,
  localePaths: oncePrivacyLocalePaths,
  languageAlternates: oncePrivacyLanguageAlternates,
});

export default function Page() {
  return (
    <PrivacyPolicyPage
      locale="en"
      fontClassName={siteFontVariables.en}
      policies={oncePrivacyPolicies}
      localePaths={oncePrivacyLocalePaths}
    />
  );
}
