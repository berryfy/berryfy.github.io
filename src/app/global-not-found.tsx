import type { Metadata } from "next";

import {
  displayFontVariable,
  monoFontVariable,
  siteFontVariables,
} from "@/app/fonts";
import SiteDocument from "@/components/widgets/SiteDocument";
import NotFoundPage from "@/features/not-found/components/NotFoundPage";
import "./globals.css";

export const metadata: Metadata = {
  title: "Page not found | Berryfy",
  description: "The page you are looking for could not be found.",
};

export default function GlobalNotFound() {
  return (
    <SiteDocument
      lang="en"
      fontClassName={`${siteFontVariables.en} ${monoFontVariable} ${displayFontVariable}`}
    >
      <NotFoundPage />
    </SiteDocument>
  );
}
