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

// 좁은 화면용 메뉴. 헤더 바로 아래로 펼쳐지고 언어 전환도 이 안에 둔다.
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

    document.addEventListener("keydown", handleKeyDown);
    desktopQuery.addEventListener("change", handleViewportChange);

    return () => {
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
        className="absolute inset-x-0 top-full border-b border-border bg-background px-4 pt-2 pb-6"
      >
        <nav aria-label={navigationLabel}>
          <ul className="grid">
            {items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={close}
                  className="flex min-h-13 items-center border-b border-border font-display text-title-sm font-bold outline-none focus-visible:ring-3 focus-visible:ring-ring/60"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="-mx-3 mt-5">
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
