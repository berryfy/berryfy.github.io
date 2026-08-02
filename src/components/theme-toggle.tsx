"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { themeToggleLabels } from "@/constants/theme";
import type { SiteLocale } from "@/types/site";

interface ThemeToggleProps {
  locale: SiteLocale;
}

export default function ThemeToggle({ locale }: ThemeToggleProps) {
  const { setTheme } = useTheme();

  function toggleTheme() {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "light" : "dark");
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
