import type { Metadata } from "next";

import { siteConfig } from "@/constants/site";
import HomePage from "@/features/home/components/home-page";
import { siteCopy } from "@/features/home/constants/site-content";
import { createHomeMetadata } from "@/features/home/utils/metadata";

const defaultLocale = siteConfig.defaultLocale;

export const metadata: Metadata = createHomeMetadata(
  defaultLocale,
  siteCopy[defaultLocale],
);

export default function EnglishHomePage() {
  return <HomePage locale={defaultLocale} copy={siteCopy[defaultLocale]} />;
}
