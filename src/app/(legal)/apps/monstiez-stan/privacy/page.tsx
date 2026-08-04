import { siteFontVariables } from "@/app/fonts";
import PrivacyPolicyPage from "@/features/legal/components/privacy-policy-page";
import {
  monstiezPrivacyLanguageAlternates,
  monstiezPrivacyLocalePaths,
  monstiezPrivacyPolicies,
} from "@/features/legal/constants/monstiez-privacy-copy";
import { createPrivacyMetadata } from "@/features/legal/utils/metadata";

export const metadata = createPrivacyMetadata({
  locale: "en",
  policies: monstiezPrivacyPolicies,
  localePaths: monstiezPrivacyLocalePaths,
  languageAlternates: monstiezPrivacyLanguageAlternates,
});

export default function Page() {
  return (
    <PrivacyPolicyPage
      locale="en"
      fontClassName={siteFontVariables.en}
      policies={monstiezPrivacyPolicies}
      localePaths={monstiezPrivacyLocalePaths}
    />
  );
}
