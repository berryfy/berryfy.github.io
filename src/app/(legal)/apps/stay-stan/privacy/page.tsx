import { siteFontVariables } from "@/app/fonts";
import PrivacyPolicyPage from "@/features/legal/components/privacy-policy-page";
import {
  stayPrivacyLanguageAlternates,
  stayPrivacyLocalePaths,
  stayPrivacyPolicies,
} from "@/features/legal/constants/stay-privacy-copy";
import { createPrivacyMetadata } from "@/features/legal/utils/metadata";

export const metadata = createPrivacyMetadata({
  locale: "en",
  policies: stayPrivacyPolicies,
  localePaths: stayPrivacyLocalePaths,
  languageAlternates: stayPrivacyLanguageAlternates,
});

export default function Page() {
  return (
    <PrivacyPolicyPage
      locale="en"
      fontClassName={siteFontVariables.en}
      policies={stayPrivacyPolicies}
      localePaths={stayPrivacyLocalePaths}
    />
  );
}
