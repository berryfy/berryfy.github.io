import { siteFontVariables } from "@/app/fonts";
import PrivacyPolicyPage from "@/features/legal/components/privacy-policy-page";
import {
  potionPrivacyLanguageAlternates,
  potionPrivacyLocalePaths,
  potionPrivacyPageCopy,
} from "@/features/legal/constants/potion-privacy-copy";
import { potionPrivacyPolicies } from "@/features/legal/constants/potion-privacy";
import { createPrivacyMetadata } from "@/features/legal/utils/metadata";
export const metadata = createPrivacyMetadata({
  locale: "en",
  policies: potionPrivacyPolicies,
  localePaths: potionPrivacyLocalePaths,
  languageAlternates: potionPrivacyLanguageAlternates,
});
export default function Page() {
  return (
    <PrivacyPolicyPage
      locale="en"
      fontClassName={siteFontVariables.en}
      policies={potionPrivacyPolicies}
      localePaths={potionPrivacyLocalePaths}
      pageCopy={potionPrivacyPageCopy.en}
    />
  );
}
