import { businessInfo } from "@/constants/business";
import { cn } from "@/lib/utils";

interface WordmarkProps {
  className?: string;
}

// 글자 로고: 소문자 브랜드명 + 코발트 점 하나. 크기는 font-size로 조절한다.
export default function Wordmark({ className }: WordmarkProps) {
  return (
    <span
      className={cn(
        "inline-flex items-baseline font-display leading-none font-extrabold tracking-[-0.04em] text-foreground",
        className,
      )}
    >
      {businessInfo.name}
      <span
        aria-hidden="true"
        className="ml-[0.06em] inline-block size-[0.28em] rounded-full bg-primary"
      />
    </span>
  );
}
