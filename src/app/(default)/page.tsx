import type { Metadata } from "next";

import HomePage from "@/features/home/components/home-page";
import { siteCopy } from "@/features/home/constants/site-content";
import { createHomeMetadata } from "@/features/home/utils/metadata";

export const metadata: Metadata = createHomeMetadata("en", siteCopy.en);

export default function EnglishHomePage() {
  return <HomePage locale="en" copy={siteCopy.en} />;
}
