import Link from "next/link";

import { businessInfo } from "@/constants/business";

interface BrandMarkProps {
  href: string;
}

export default function BrandMark({ href }: BrandMarkProps) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 sm:gap-2.5"
      aria-label={`${businessInfo.name} home`}
    >
      <span className="relative flex size-8 items-center justify-center rounded-xl bg-primary shadow-[0_8px_24px_rgba(217,45,99,0.24)] transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3 sm:size-9 sm:rounded-[14px]">
        <span className="absolute top-1.5 left-1/2 h-2 w-1.5 -translate-x-1/2 -rotate-12 rounded-full bg-[#7ce2b4]" />
        <span className="mt-1 text-xs font-bold text-white sm:text-sm">
          {businessInfo.name.charAt(0).toUpperCase()}
        </span>
      </span>
      <span className="text-base font-semibold tracking-[-0.035em] text-foreground sm:text-[1.05rem]">
        {businessInfo.name}
      </span>
    </Link>
  );
}
