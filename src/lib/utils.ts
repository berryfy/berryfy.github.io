import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// globals.css의 타입 스케일 토큰을 글자 크기로 알려 줘야 `text-link` 같은 색 클래스와 충돌하지 않는다.
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: [
        "caption",
        "small",
        "body",
        "body-lg",
        "title-sm",
        "title-md",
        "title-lg",
        "display-md",
        "display-lg",
        "display-xl",
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
