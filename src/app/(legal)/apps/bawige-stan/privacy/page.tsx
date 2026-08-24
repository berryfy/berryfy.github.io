import { siteFontVariables } from "@/app/fonts";
import PrivacyPolicyPage from "@/features/legal/components/privacy-policy-page";
import {
  bawigePrivacyLanguageAlternates,
  bawigePrivacyLocalePaths,
  bawigePrivacyPolicies,
} from "@/features/legal/constants/bawige-privacy-copy";
import { createPrivacyMetadata } from "@/features/legal/utils/metadata";

export const metadata = createPrivacyMetadata({
  locale: "en",
  policies: bawigePrivacyPolicies,
  localePaths: bawigePrivacyLocalePaths,
  languageAlternates: bawigePrivacyLanguageAlternates,
});

export default function Page() {
  return (
    <PrivacyPolicyPage
      locale="en"
      fontClassName={siteFontVariables.en}
      policies={bawigePrivacyPolicies}
      localePaths={bawigePrivacyLocalePaths}
    />
  );
}
