import { notFound } from "next/navigation";
import GameDetailPage from "@/features/game-detail/components/GameDetailPage";
import { createGameMetadata } from "@/features/game-detail/utils/metadata";
import { isSiteLocale } from "@/lib/locale";
export const dynamicParams = false;
export const generateStaticParams = () => [{ locale: "ko" }, { locale: "ja" }];
interface Props {
  params: Promise<{ locale: string }>;
}
export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  return isSiteLocale(locale) ? createGameMetadata(locale) : {};
}
export default async function Page({ params }: Props) {
  const { locale } = await params;
  if (!isSiteLocale(locale) || locale === "en") notFound();
  return <GameDetailPage locale={locale} />;
}
