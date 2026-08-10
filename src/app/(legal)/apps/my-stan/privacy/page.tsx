import { siteFontVariables } from "@/app/fonts";
import PrivacyPolicyPage from "@/features/legal/components/privacy-policy-page";
import {
  myPrivacyLanguageAlternates,
  myPrivacyLocalePaths,
  myPrivacyPolicies,
} from "@/features/legal/constants/my-privacy-copy";
import { createPrivacyMetadata } from "@/features/legal/utils/metadata";

export const metadata = createPrivacyMetadata({
  locale: "en",
  policies: myPrivacyPolicies,
  localePaths: myPrivacyLocalePaths,
  languageAlternates: myPrivacyLanguageAlternates,
});

export default function Page() {
  return (
    <PrivacyPolicyPage
      locale="en"
      fontClassName={siteFontVariables.en}
      policies={myPrivacyPolicies}
      localePaths={myPrivacyLocalePaths}
    />
  );
}
