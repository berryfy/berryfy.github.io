import Link from "next/link";

import type { NavigationItem } from "@/types/navigation";

interface HeaderNavigationProps {
  items: readonly NavigationItem[];
  label: string;
}

// 넓은 화면의 가로 메뉴. 좁은 화면에서는 MobileMenu가 대신한다.
const HeaderNavigation = ({ items, label }: HeaderNavigationProps) => (
  <nav aria-label={label} className="hidden md:block">
    <ul className="flex items-center gap-1">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="inline-flex h-11 items-center rounded-full px-4 text-small font-medium text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/60"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default HeaderNavigation;
