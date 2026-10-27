import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

type BadgeVariant =
  "neutral" | "primary" | "outline" | "success" | "warning" | "danger";

interface BadgeProps extends ComponentProps<"span"> {
  variant?: BadgeVariant;
}

const variantClassNames: Record<BadgeVariant, string> = {
  neutral: "bg-secondary text-secondary-foreground",
  primary: "bg-primary text-primary-foreground",
  outline: "border-border text-muted-foreground",
  success: "bg-success/14 text-success",
  warning: "bg-warning/14 text-warning",
  danger: "bg-destructive/14 text-destructive",
};

// 상태·분류 칩. 강조색 배경은 `primary` 하나만 쓰고 나머지는 중립·상태색으로 표시한다.
const Badge = ({ variant = "neutral", className, ...props }: BadgeProps) => (
  <span
    className={cn(
      "inline-flex h-7 w-fit shrink-0 items-center gap-1.5 rounded-full border border-transparent px-3 text-caption font-semibold whitespace-nowrap [&>svg]:size-3.5",
      variantClassNames[variant],
      className,
    )}
    {...props}
  />
);

export default Badge;
