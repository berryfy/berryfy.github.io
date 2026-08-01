import { notFound } from "next/navigation";

import MoreAppsPage from "@/features/more-apps/components/more-apps-page";
import { moreAppsLocales } from "@/features/more-apps/constants/more-apps-copy";
import { isMoreAppsLocale } from "@/features/more-apps/utils/locale";
import { createMoreAppsMetadata } from "@/features/more-apps/utils/metadata";

export const dynamicParams = false;

export function generateStaticParams() {
  return moreAppsLocales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isMoreAppsLocale(locale)) {
    notFound();
  }

  return createMoreAppsMetadata(locale);
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isMoreAppsLocale(locale)) {
    notFound();
  }

  return <MoreAppsPage locale={locale} />;
}
