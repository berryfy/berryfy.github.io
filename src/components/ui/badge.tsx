import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

// 상태·분류 칩. 강조색 배경은 `primary` 한 가지만 쓰고 나머지는 중립·상태색으로 표시한다.
const badgeVariants = cva(
  "group/badge inline-flex h-7 w-fit shrink-0 items-center justify-center gap-1.5 overflow-hidden rounded-full border border-transparent px-3 text-caption font-semibold whitespace-nowrap transition-colors focus-visible:ring-3 focus-visible:ring-ring/60 [&>svg]:pointer-events-none [&>svg]:size-3.5!",
  {
    variants: {
      variant: {
        default: "bg-secondary text-secondary-foreground",
        primary: "bg-primary text-primary-foreground",
        outline: "border-border text-muted-foreground",
        success: "bg-success/14 text-success",
        warning: "bg-warning/14 text-warning",
        destructive: "bg-destructive/14 text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span";

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
