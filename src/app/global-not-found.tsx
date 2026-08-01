import type { Metadata } from "next";

import { monoFontVariable, siteFontVariables } from "@/app/fonts";
import SiteDocument from "@/components/site-document";
import NotFoundPage from "@/features/not-found/components/not-found-page";
import "./globals.css";

export const metadata: Metadata = {
  title: "Page not found | Berryfy",
  description: "The page you are looking for could not be found.",
};

export default function GlobalNotFound() {
  return (
    <SiteDocument
      lang="en"
      fontClassName={`${siteFontVariables.en} ${monoFontVariable}`}
    >
      <NotFoundPage />
    </SiteDocument>
  );
}
