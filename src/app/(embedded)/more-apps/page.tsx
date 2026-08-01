import { siteConfig } from "@/constants/site";
import MoreAppsPage from "@/features/more-apps/components/more-apps-page";
import { createMoreAppsMetadata } from "@/features/more-apps/utils/metadata";

const defaultLocale = siteConfig.defaultLocale;

export const metadata = createMoreAppsMetadata(defaultLocale);

export default function Page() {
  return <MoreAppsPage locale={defaultLocale} />;
}
