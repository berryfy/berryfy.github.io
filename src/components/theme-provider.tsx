"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

import { themeConfig } from "@/constants/theme";

export default function ThemeProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme={themeConfig.defaultTheme}
      storageKey={themeConfig.storageKey}
      enableSystem
      enableColorScheme
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
