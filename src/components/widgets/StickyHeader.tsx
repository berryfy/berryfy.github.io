"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";

interface StickyHeaderProps {
  children: ReactNode;
}

// 페이지 맨 위에서는 바탕과 이어지고, 본문이 헤더 아래로 지나갈 때만 구분선과 반투명 바탕을 보인다.
const StickyHeader = ({ children }: StickyHeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 0);

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  return (
    <header
      data-scrolled={isScrolled}
      className="sticky top-0 z-50 border-b border-transparent bg-background pt-[env(safe-area-inset-top)] transition-[background-color,border-color] duration-200 ease-standard data-[scrolled=true]:border-border data-[scrolled=true]:bg-background/85 data-[scrolled=true]:backdrop-blur-md"
    >
      {children}
    </header>
  );
};

export default StickyHeader;
