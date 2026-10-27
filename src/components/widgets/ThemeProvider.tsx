"use client";

import type { ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import { themeConfig } from "@/constants/theme";

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => (
  <NextThemesProvider
    attribute="class"
    defaultTheme={themeConfig.defaultTheme}
    storageKey={themeConfig.storageKey}
    enableSystem
    enableColorScheme
  >
    {children}
  </NextThemesProvider>
);

export default ThemeProvider;
