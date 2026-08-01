import type { Metadata } from "next";

import { monoFontVariable, siteFontVariables } from "@/app/fonts";
import NotFoundPage from "@/features/not-found/components/not-found-page";
import "./globals.css";

export const metadata: Metadata = {
  title: "Page not found | Berryfy",
  description: "The page you are looking for could not be found.",
};

export default function GlobalNotFound() {
  return (
    <html
      lang="en"
      className={`${siteFontVariables.en} ${monoFontVariable} h-full antialiased`}
    >
      <body className="min-h-full">
        <NotFoundPage />
      </body>
    </html>
  );
}
