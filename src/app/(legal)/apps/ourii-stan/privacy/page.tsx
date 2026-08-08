import { siteFontVariables } from "@/app/fonts";
import PrivacyPolicyPage from "@/features/legal/components/privacy-policy-page";
import {
  ouriiPrivacyLanguageAlternates,
  ouriiPrivacyLocalePaths,
  ouriiPrivacyPolicies,
} from "@/features/legal/constants/ourii-privacy-copy";
import { createPrivacyMetadata } from "@/features/legal/utils/metadata";

export const metadata = createPrivacyMetadata({
  locale: "en",
  policies: ouriiPrivacyPolicies,
  localePaths: ouriiPrivacyLocalePaths,
  languageAlternates: ouriiPrivacyLanguageAlternates,
});

export default function Page() {
  return (
    <PrivacyPolicyPage
      locale="en"
      fontClassName={siteFontVariables.en}
      policies={ouriiPrivacyPolicies}
      localePaths={ouriiPrivacyLocalePaths}
    />
  );
}
