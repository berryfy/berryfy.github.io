"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { Menu, X } from "lucide-react";

import Button from "@/components/atoms/Button";
import LanguageSwitcher from "@/components/widgets/LanguageSwitcher";
import type { NavigationItem } from "@/types/navigation";
import type { SiteLocale } from "@/types/site";

interface MobileMenuProps {
  items: readonly NavigationItem[];
  navigationLabel: string;
  openLabel: string;
  closeLabel: string;
  locale: SiteLocale;
  languageLabel: string;
  languagePaths: Record<SiteLocale, string>;
}

// 좁은 화면용 메뉴. 헤더 아래 화면 전체를 덮고, 구분선 없이 큰 글자와 여백으로 메뉴와 언어 목록을 나눈다.
const MobileMenu = ({
  items,
  navigationLabel,
  openLabel,
  closeLabel,
  locale,
  languageLabel,
  languagePaths,
}: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
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

    const desktopQuery = window.matchMedia("(min-width: 48rem)");
    const handleViewportChange = () => {
      if (desktopQuery.matches) {
        setIsOpen(false);
      }
    };

    // 패널이 화면 전체를 덮는 동안 뒤 페이지가 스크롤되지 않게 한다.
    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";

    document.addEventListener("keydown", handleKeyDown);
    desktopQuery.addEventListener("change", handleViewportChange);

    return () => {
      root.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      desktopQuery.removeEventListener("change", handleViewportChange);
    };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      <Button
        ref={triggerRef}
        variant="ghost"
        size="icon"
        aria-expanded={isOpen}
        aria-controls={panelId}
        aria-label={isOpen ? closeLabel : openLabel}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
      </Button>

      <div
        id={panelId}
        hidden={!isOpen}
        className="absolute inset-x-0 top-full h-svh overflow-y-auto bg-background px-4 pt-4 pb-10"
      >
        <nav aria-label={navigationLabel}>
          <ul className="grid">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={close}
                  className="flex min-h-14 items-center rounded-xs font-display text-title-md font-bold outline-none focus-visible:ring-3 focus-visible:ring-ring/60"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="-mx-3 mt-10">
          <LanguageSwitcher
            locale={locale}
            label={languageLabel}
            paths={languagePaths}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
