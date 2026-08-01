import { redirect } from "next/navigation";

import { siteConfig } from "@/constants/site";

export default function Page() {
  redirect(siteConfig.routes.eyeconsPrivacy);
}
