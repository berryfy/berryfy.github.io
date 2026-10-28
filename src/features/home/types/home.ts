import type { AppGroup } from "@/types/app";

export interface SiteCopy {
  // 쓰임새별 설명 + 섹션 제목 + 전체 앱 목록 링크 문구
  products: Record<AppGroup, string> & { title: string; viewAll: string };
  hero: {
    description: string;
  };
  about: {
    description: string;
  };
  description: string;
  navigationLabel: string;
  navigation: {
    products: string;
    about: string;
    contact: string;
  };
}
