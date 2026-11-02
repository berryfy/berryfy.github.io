import GameDetailPage from "@/features/game-detail/components/GameDetailPage";
import { createGameMetadata } from "@/features/game-detail/utils/metadata";
export const metadata = createGameMetadata("en");
export default function Page() {
  return <GameDetailPage locale="en" />;
}
