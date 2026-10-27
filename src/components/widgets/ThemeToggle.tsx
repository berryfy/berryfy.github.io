"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import Button from "@/components/atoms/Button";
import { themeToggleLabels } from "@/constants/theme";
import type { SiteLocale } from "@/types/site";

interface ThemeToggleProps {
  locale: SiteLocale;
}

const ThemeToggle = ({ locale }: ThemeToggleProps) => {
  const { setTheme } = useTheme();

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="relative text-muted-foreground hover:text-foreground"
      aria-label={themeToggleLabels[locale]}
      onClick={toggleTheme}
    >
      <Sun
        className="scale-0 rotate-90 transition-transform duration-300 dark:scale-100 dark:rotate-0"
        aria-hidden="true"
      />
      <Moon
        className="absolute scale-100 rotate-0 transition-transform duration-300 dark:scale-0 dark:-rotate-90"
        aria-hidden="true"
      />
    </Button>
  );
};

export default ThemeToggle;
