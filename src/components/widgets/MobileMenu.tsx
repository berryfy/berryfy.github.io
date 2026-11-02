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
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const trigger = triggerRef.current;
    const menu = rootRef.current;
    if (!menu) return;

    // 메뉴를 포함하는 가지를 제외한 형제들을 비활성화하고 기존 값을 복원한다.
    const background: { element: HTMLElement; inert: boolean }[] = [];
    let branch: HTMLElement = menu;
    while (branch.parentElement) {
      for (const sibling of branch.parentElement.children) {
        if (sibling !== branch && sibling instanceof HTMLElement) {
          background.push({ element: sibling, inert: sibling.inert });
          sibling.inert = true;
        }
      }
      if (branch.parentElement === document.body) break;
      branch = branch.parentElement;
    }

    const focusable = () =>
      Array.from(
        menu.querySelectorAll<HTMLElement>("button:not(:disabled), a[href]"),
      ).filter((element) => element.getClientRects().length > 0);

    menu.querySelector<HTMLAnchorElement>("a[href]")?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setIsOpen(false);
      }
      if (event.key === "Tab") {
        const elements = focusable();
        const first = elements[0];
        const last = elements[elements.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
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
      for (const { element, inert } of background) element.inert = inert;
      trigger?.focus({ preventScroll: true });
      document.removeEventListener("keydown", handleKeyDown);
      desktopQuery.removeEventListener("change", handleViewportChange);
    };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  return (
    <div
      ref={rootRef}
      className="md:hidden"
      role={isOpen ? "dialog" : undefined}
      aria-modal={isOpen ? true : undefined}
      aria-label={isOpen ? navigationLabel : undefined}
    >
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
        onClick={(event) => {
          if (
            event.target instanceof Element &&
            event.target.closest("a[href]")
          )
            close();
        }}
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
