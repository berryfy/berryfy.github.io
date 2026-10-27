"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

import Button from "@/components/atoms/Button";
import { localeDetails, siteLocales } from "@/constants/site";
import { cn } from "@/lib/utils";
import type { SiteLocale } from "@/types/site";

interface LanguageMenuProps {
  locale: SiteLocale;
  label: string;
  paths: Record<SiteLocale, string>;
}

// 헤더용 언어 선택. 메뉴와 같은 글자 스타일로 현재 언어 이름을 보여 주고, 펼친 목록의 현재 언어는 굵고 밝은 글자로 표시한다.
const LanguageMenu = ({ locale, label, paths }: LanguageMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen]);

  return (
    <div ref={rootRef} className="relative">
      <Button
        ref={triggerRef}
        variant="ghost"
        size="sm"
        className="h-11 gap-1 px-3 font-medium text-muted-foreground hover:bg-transparent hover:text-foreground aria-expanded:text-foreground"
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-label={`${label}: ${localeDetails[locale].label}`}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span lang={locale}>{localeDetails[locale].label}</span>
        <ChevronDown
          aria-hidden="true"
          className={cn(
            "size-3.5 transition-transform duration-200",
            isOpen && "rotate-180",
          )}
        />
      </Button>

      <div
        id={panelId}
        hidden={!isOpen}
        className="absolute top-full right-0 z-10 mt-2 w-44 rounded-lg border border-border bg-popover p-1.5 text-popover-foreground shadow-overlay"
      >
        <ul>
          {siteLocales.map((item) => {
            const isActive = item === locale;

            return (
              <li key={item}>
                <Link
                  href={paths[item]}
                  hrefLang={item}
                  lang={item}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "flex min-h-11 items-center gap-3 rounded-sm px-3 text-small transition-colors outline-none hover:bg-accent focus-visible:ring-3 focus-visible:ring-ring/60",
                    isActive
                      ? "font-semibold text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <span className="flex-1">{localeDetails[item].label}</span>
                  <span
                    aria-hidden="true"
                    className="font-mono text-caption text-muted-foreground"
                  >
                    {localeDetails[item].shortLabel}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default LanguageMenu;
