import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonVariant =
  "primary" | "secondary" | "outline" | "ghost" | "danger" | "link";
type ButtonSize = "sm" | "md" | "lg" | "icon-sm" | "icon" | "icon-lg";

interface ButtonStyleProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
}

type NativeButtonProps = ButtonStyleProps &
  Omit<ComponentProps<"button">, keyof ButtonStyleProps> & {
    href?: undefined;
  };

type LinkButtonProps = ButtonStyleProps &
  Omit<ComponentProps<"a">, keyof ButtonStyleProps | "href"> & {
    href: string;
    external?: boolean;
  };

export type ButtonProps = NativeButtonProps | LinkButtonProps;

const baseClassName =
  "inline-flex shrink-0 items-center justify-center rounded-full border border-transparent font-semibold whitespace-nowrap transition-[background-color,border-color,color,transform] duration-200 ease-standard outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/60 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4";

const variantClassNames: Record<ButtonVariant, string> = {
  primary: "bg-primary text-primary-foreground hover:bg-primary-hover",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary-hover",
  outline: "border-border text-foreground hover:bg-accent",
  ghost: "text-foreground hover:bg-accent",
  danger:
    "bg-destructive/12 text-destructive hover:bg-destructive/20 focus-visible:ring-destructive/30",
  link: "rounded-xs text-link underline-offset-4 hover:underline",
};

const sizeClassNames: Record<ButtonSize, string> = {
  sm: "h-9 gap-1.5 px-3.5 text-small",
  md: "h-11 gap-2 px-5 text-small",
  lg: "h-13 gap-2 px-6 text-body [&_svg:not([class*='size-'])]:size-[1.125rem]",
  "icon-sm": "size-9",
  icon: "size-11",
  "icon-lg": "size-13",
};

// 링크는 `href`를 주면 같은 모양으로 그린다. 외부 주소는 `external`로 새 탭에서 연다.
const Button = ({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) => {
  const classes = cn(
    baseClassName,
    variantClassNames[variant],
    variant === "link" ? "h-auto px-0" : sizeClassNames[size],
    className,
  );

  if (props.href !== undefined) {
    const { href, external, ...anchorProps } = props;

    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
          {...anchorProps}
        />
      );
    }

    return <Link href={href} className={classes} {...anchorProps} />;
  }

  const { type = "button", ...buttonProps } = props;

  return <button type={type} className={classes} {...buttonProps} />;
};

export default Button;
