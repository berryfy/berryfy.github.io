"use client";

import type { MouseEvent } from "react";
import { flushSync } from "react-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { themeToggleLabels } from "@/constants/theme";
import type { SiteLocale } from "@/types/site";

interface ThemeToggleProps {
  locale: SiteLocale;
}

const transitionDuration = 520;

export default function ThemeToggle({ locale }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();

  function toggleTheme(event: MouseEvent<HTMLButtonElement>) {
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (
      prefersReducedMotion ||
      typeof document.startViewTransition !== "function" ||
      typeof document.documentElement.animate !== "function"
    ) {
      setTheme(nextTheme);
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const originX = bounds.left + bounds.width / 2;
    const originY = bounds.top + bounds.height / 2;
    const radius = Math.hypot(
      Math.max(originX, window.innerWidth - originX),
      Math.max(originY, window.innerHeight - originY),
    );

    const transition = document.startViewTransition(() => {
      flushSync(() => setTheme(nextTheme));
    });

    void transition.ready
      .then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${originX}px ${originY}px)`,
              `circle(${radius}px at ${originX}px ${originY}px)`,
            ],
          },
          {
            duration: transitionDuration,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            pseudoElement: "::view-transition-new(root)",
          },
        );
      })
      .catch(() => undefined);
  }

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon-lg"
      className="relative size-10 rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground"
      aria-label={themeToggleLabels[locale]}
      title={themeToggleLabels[locale]}
      onClick={toggleTheme}
    >
      <Moon
        className="scale-100 rotate-0 transition-transform duration-300 dark:scale-0 dark:-rotate-90"
        aria-hidden="true"
      />
      <Sun
        className="absolute scale-0 rotate-90 transition-transform duration-300 dark:scale-100 dark:rotate-0"
        aria-hidden="true"
      />
    </Button>
  );
}
