"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

interface StickyHeaderProps {
  children: ReactNode;
}

// 헤더 높이만큼 내려간 뒤부터 숨기기 시작한다. 작은 흔들림으로 깜빡이지 않도록 이동량 기준을 둔다.
const hideAfterOffset = 96;
const directionThreshold = 8;

// 맨 위에서는 바탕과 이어지고, 스크롤하면 구분선 없이 반투명 흐림 바탕으로 본문과 구분한다.
// 아래로 내리면 숨기고 위로 올리면 다시 보인다. 메뉴가 열려 있거나 헤더 안에 포커스가 있으면 숨기지 않는다.
const StickyHeader = ({ children }: StickyHeaderProps) => {
  const headerRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    // 브라우저는 scroll 이벤트를 프레임마다 한 번씩 보내므로 따로 묶지 않는다.
    const update = () => {
      const y = Math.max(window.scrollY, 0);
      const delta = y - lastY;
      const header = headerRef.current;
      const isHeaderActive =
        header !== null &&
        (header.contains(document.activeElement) ||
          header.querySelector('[aria-expanded="true"]') !== null);

      setIsScrolled(y > 0);

      if (y <= hideAfterOffset || isHeaderActive) {
        setIsHidden(false);
        lastY = y;
        return;
      }

      if (Math.abs(delta) < directionThreshold) {
        return;
      }

      setIsHidden(delta > 0);
      lastY = y;
    };

    update();
    window.addEventListener("scroll", update, { passive: true });

    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header
      ref={headerRef}
      data-scrolled={isScrolled}
      data-hidden={isHidden}
      onFocus={() => setIsHidden(false)}
      className="sticky top-0 z-50 bg-background pt-[env(safe-area-inset-top)] transition-[translate,background-color] duration-300 ease-standard data-[hidden=true]:-translate-y-full data-[scrolled=true]:bg-background/80 data-[scrolled=true]:backdrop-blur-md"
    >
      {children}
    </header>
  );
};

export default StickyHeader;
