import { siteFontVariables } from "@/app/fonts";
import PrivacyPolicyPage from "@/features/legal/components/privacy-policy-page";
import {
  s2uPrivacyLanguageAlternates,
  s2uPrivacyLocalePaths,
  s2uPrivacyPolicies,
} from "@/features/legal/constants/s2u-privacy-copy";
import { createPrivacyMetadata } from "@/features/legal/utils/metadata";

export const metadata = createPrivacyMetadata({
  locale: "en",
  policies: s2uPrivacyPolicies,
  localePaths: s2uPrivacyLocalePaths,
  languageAlternates: s2uPrivacyLanguageAlternates,
});

export default function Page() {
  return (
    <PrivacyPolicyPage
      locale="en"
      fontClassName={siteFontVariables.en}
      policies={s2uPrivacyPolicies}
      localePaths={s2uPrivacyLocalePaths}
    />
  );
}
