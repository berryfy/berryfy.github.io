"use client";

import Link from "next/link";
import { Check, ChevronDown, Globe2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { localeDetails, siteLocales } from "@/constants/site";
import type { SiteLocale } from "@/types/site";

interface LanguageSwitcherProps {
  locale: SiteLocale;
  label: string;
  paths: Record<SiteLocale, string>;
}

export default function LanguageSwitcher({
  locale,
  label,
  paths,
}: LanguageSwitcherProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-9 gap-1.5 rounded-full px-2.5 text-xs text-muted-foreground hover:bg-secondary hover:text-foreground sm:h-10 sm:px-3 sm:text-sm"
          aria-label={label}
        >
          <Globe2 aria-hidden="true" />
          {localeDetails[locale].shortLabel}
          <ChevronDown className="size-3.5 opacity-60" aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="w-44 rounded-2xl border border-border/70 bg-background/95 p-1.5 shadow-[0_20px_60px_rgba(36,21,41,0.14)] backdrop-blur-xl"
      >
        <DropdownMenuLabel className="px-2.5 py-2">{label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {siteLocales.map((item) => {
          const isActive = item === locale;

          return (
            <DropdownMenuItem key={item} asChild>
              <Link
                href={paths[item]}
                hrefLang={item}
                lang={item}
                aria-current={isActive ? "page" : undefined}
                className={`flex min-h-11 cursor-pointer items-center justify-between rounded-xl px-2.5 ${
                  isActive ? "bg-secondary/70 font-medium" : ""
                }`}
              >
                {localeDetails[item].label}
                {isActive ? (
                  <Check className="size-4 text-primary" aria-hidden="true" />
                ) : null}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
