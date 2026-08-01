"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import BrandMark from "@/components/brand-mark";
import LanguageSwitcher from "@/components/language-switcher";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { homeLocalePaths } from "@/constants/site";
import { homeSections } from "@/features/home/constants/sections";
import type { SiteCopy } from "@/features/home/types/home";
import { homePath } from "@/features/home/utils/locale";
import type { SiteLocale } from "@/types/site";

interface SiteHeaderProps {
  locale: SiteLocale;
  copy: SiteCopy;
}

export default function SiteHeader({ locale, copy }: SiteHeaderProps) {
  const basePath = homePath(locale);
  const navigation = [
    {
      label: copy.navigation.apps,
      href: `${basePath}#${homeSections.apps}`,
    },
    {
      label: copy.navigation.studio,
      href: `${basePath}#${homeSections.studio}`,
    },
    {
      label: copy.navigation.principles,
      href: `${basePath}#${homeSections.principles}`,
    },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-transparent bg-background/82 backdrop-blur-xl supports-backdrop-filter:bg-background/72">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <BrandMark href={basePath} />

        <nav className="hidden items-center gap-1 rounded-full border border-border/70 bg-white/70 p-1 shadow-[0_10px_35px_rgba(36,21,41,0.05)] md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white hover:text-foreground focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <LanguageSwitcher
            locale={locale}
            label={copy.languageMenuLabel}
            paths={homeLocalePaths}
          />

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon-lg"
                className="rounded-full bg-white/80 md:hidden"
                aria-label={copy.menuLabel}
              >
                <Menu aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent
              className="w-[min(88vw,360px)] border-l border-border bg-background p-6"
              closeLabel={copy.closeMenuLabel}
            >
              <SheetHeader className="p-0">
                <SheetTitle>
                  <BrandMark href={basePath} />
                </SheetTitle>
              </SheetHeader>
              <nav className="mt-12 flex flex-col gap-2">
                {navigation.map((item) => (
                  <SheetClose key={item.href} asChild>
                    <Link
                      href={item.href}
                      className="rounded-2xl px-4 py-3 text-lg font-medium text-foreground transition-colors hover:bg-secondary"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <p className="mt-auto border-t border-border pt-5 text-sm text-muted-foreground">
                {copy.footer.tagline}
              </p>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
