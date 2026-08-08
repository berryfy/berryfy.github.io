import { siteFontVariables } from "@/app/fonts";
import PrivacyPolicyPage from "@/features/legal/components/privacy-policy-page";
import {
  engenePrivacyLanguageAlternates,
  engenePrivacyLocalePaths,
  engenePrivacyPolicies,
} from "@/features/legal/constants/engene-privacy-copy";
import { createPrivacyMetadata } from "@/features/legal/utils/metadata";

export const metadata = createPrivacyMetadata({
  locale: "en",
  policies: engenePrivacyPolicies,
  localePaths: engenePrivacyLocalePaths,
  languageAlternates: engenePrivacyLanguageAlternates,
});

export default function Page() {
  return (
    <PrivacyPolicyPage
      locale="en"
      fontClassName={siteFontVariables.en}
      policies={engenePrivacyPolicies}
      localePaths={engenePrivacyLocalePaths}
    />
  );
}
