"use client";

import { useRef, type MouseEvent } from "react";
import { flushSync } from "react-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { themeToggleLabels } from "@/constants/theme";
import type { SiteLocale } from "@/types/site";

interface ThemeToggleProps {
  locale: SiteLocale;
}

const transitionDuration = 440;

export default function ThemeToggle({ locale }: ThemeToggleProps) {
  const { setTheme } = useTheme();
  const isTransitioning = useRef(false);

  function toggleTheme(event: MouseEvent<HTMLButtonElement>) {
    if (isTransitioning.current) {
      return;
    }

    const root = document.documentElement;
    const nextTheme = root.classList.contains("dark") ? "light" : "dark";
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const applyTheme = () => {
      root.classList.toggle("dark", nextTheme === "dark");
      root.style.colorScheme = nextTheme;
      flushSync(() => setTheme(nextTheme));
    };

    if (
      prefersReducedMotion ||
      typeof document.startViewTransition !== "function" ||
      typeof document.documentElement.animate !== "function"
    ) {
      root.dataset.themeTransition = "active";
      applyTheme();
      window.requestAnimationFrame(() => {
        delete root.dataset.themeTransition;
      });
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const hasPointerCoordinates = event.clientX !== 0 || event.clientY !== 0;
    const originX = hasPointerCoordinates
      ? event.clientX
      : bounds.left + bounds.width / 2;
    const originY = hasPointerCoordinates
      ? event.clientY
      : bounds.top + bounds.height / 2;
    const radius = Math.hypot(
      Math.max(originX, window.innerWidth - originX),
      Math.max(originY, window.innerHeight - originY),
    );

    isTransitioning.current = true;
    root.dataset.themeTransition = "active";

    const transition = document.startViewTransition(() => {
      applyTheme();
    });

    const revealFinished = transition.ready
      .then(() => {
        const reveal = root.animate(
          {
            clipPath: [
              `circle(0px at ${originX}px ${originY}px)`,
              `circle(${radius}px at ${originX}px ${originY}px)`,
            ],
          },
          {
            duration: transitionDuration,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            fill: "both",
            pseudoElement: "::view-transition-new(root)",
          },
        );

        return reveal.finished;
      })
      .catch(() => undefined);

    void Promise.allSettled([transition.finished, revealFinished]).finally(
      () => {
        delete root.dataset.themeTransition;
        isTransitioning.current = false;
      },
    );
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
