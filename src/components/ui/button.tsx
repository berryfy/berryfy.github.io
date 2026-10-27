import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

// 모든 버튼은 pill 형태다. 기본 높이 44px로 터치 영역을 보장한다.
const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding font-semibold whitespace-nowrap transition-[background-color,border-color,color,transform] duration-200 ease-standard outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/60 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/25 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary-hover",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary-hover aria-expanded:bg-secondary-hover",
        outline:
          "border-border bg-transparent text-foreground hover:bg-accent aria-expanded:bg-accent",
        ghost: "text-foreground hover:bg-accent aria-expanded:bg-accent",
        destructive:
          "bg-destructive/12 text-destructive hover:bg-destructive/20 focus-visible:ring-destructive/30",
        link: "h-auto rounded-xs px-0 text-link underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 gap-1.5 px-3.5 text-small",
        default: "h-11 gap-2 px-5 text-small",
        lg: "h-13 gap-2 px-6 text-body [&_svg:not([class*='size-'])]:size-[1.125rem]",
        icon: "size-11",
        "icon-sm": "size-9",
        "icon-lg": "size-13",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
