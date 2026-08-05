import { siteFontVariables } from "@/app/fonts";
import PrivacyPolicyPage from "@/features/legal/components/privacy-policy-page";
import {
  fearnotPrivacyLanguageAlternates,
  fearnotPrivacyLocalePaths,
  fearnotPrivacyPolicies,
} from "@/features/legal/constants/fearnot-privacy-copy";
import { createPrivacyMetadata } from "@/features/legal/utils/metadata";

export const metadata = createPrivacyMetadata({
  locale: "en",
  policies: fearnotPrivacyPolicies,
  localePaths: fearnotPrivacyLocalePaths,
  languageAlternates: fearnotPrivacyLanguageAlternates,
});

export default function Page() {
  return (
    <PrivacyPolicyPage
      locale="en"
      fontClassName={siteFontVariables.en}
      policies={fearnotPrivacyPolicies}
      localePaths={fearnotPrivacyLocalePaths}
    />
  );
}
