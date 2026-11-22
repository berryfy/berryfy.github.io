import { siteFontVariables } from "@/app/fonts";
import ZombieCarePrivacyPage from "@/features/legal/components/ZombieCarePrivacyPage";
import {
  zombieCarePrivacyLanguageAlternates,
  zombieCarePrivacyLocalePaths,
  zombieCarePrivacyPolicies,
} from "@/features/legal/constants/zombie-care-privacy-copy";
import { createPrivacyMetadata } from "@/features/legal/utils/metadata";

export const metadata = createPrivacyMetadata({
  locale: "en",
  policies: zombieCarePrivacyPolicies,
  localePaths: zombieCarePrivacyLocalePaths,
  languageAlternates: zombieCarePrivacyLanguageAlternates,
});

export default function Page() {
  return (
    <ZombieCarePrivacyPage locale="en" fontClassName={siteFontVariables.en} />
  );
}
