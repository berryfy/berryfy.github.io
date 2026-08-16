import { siteFontVariables } from "@/app/fonts";
import PrivacyPolicyPage from "@/features/legal/components/privacy-policy-page";
import {
  caratPrivacyLanguageAlternates,
  caratPrivacyLocalePaths,
  caratPrivacyPolicies,
} from "@/features/legal/constants/carat-privacy-copy";
import { createPrivacyMetadata } from "@/features/legal/utils/metadata";

export const metadata = createPrivacyMetadata({
  locale: "en",
  policies: caratPrivacyPolicies,
  localePaths: caratPrivacyLocalePaths,
  languageAlternates: caratPrivacyLanguageAlternates,
});

export default function Page() {
  return (
    <PrivacyPolicyPage
      locale="en"
      fontClassName={siteFontVariables.en}
      policies={caratPrivacyPolicies}
      localePaths={caratPrivacyLocalePaths}
    />
  );
}
