import { siteConfig } from "@/constants/site";

export const notFoundCopy = {
  eyebrow: "Lost in a small corner",
  title: "This page wandered off.",
  description:
    "The link may be outdated, or the page may have moved. Let's get you back to somewhere familiar.",
  action: "Back to home",
  homePath: siteConfig.routes.home,
} as const;
