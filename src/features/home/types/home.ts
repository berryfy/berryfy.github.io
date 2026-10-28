import type { AppGroup } from "@/types/app";

export interface SiteCopy {
  // 쓰임새별 설명 + 앱 수 문구. countLabel의 {count}를 숫자로 바꾼다.
  products: Record<AppGroup, string> & { title: string; countLabel: string };
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
