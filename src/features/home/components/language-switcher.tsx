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
}

export default function LanguageSwitcher({
  locale,
  label,
}: LanguageSwitcherProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="h-10 rounded-full px-3 text-sm text-muted-foreground hover:bg-white hover:text-foreground"
          aria-label={label}
        >
          <Globe2 aria-hidden="true" />
          {localeDetails[locale].shortLabel}
          <ChevronDown className="size-3.5 opacity-60" aria-hidden="true" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-44 rounded-2xl border border-border/70 bg-white/95 p-1.5 shadow-[0_20px_60px_rgba(36,21,41,0.14)] backdrop-blur-xl"
      >
        <DropdownMenuLabel className="px-2.5 py-2">{label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {siteLocales.map((item) => (
          <DropdownMenuItem key={item} asChild>
            <Link
              href={localeDetails[item].path}
              hrefLang={item}
              lang={item}
              className="flex min-h-9 cursor-pointer items-center justify-between rounded-xl px-2.5"
            >
              {localeDetails[item].label}
              {item === locale ? (
                <Check className="size-4 text-primary" aria-hidden="true" />
              ) : null}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
