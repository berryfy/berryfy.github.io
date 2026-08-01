import Image from "next/image";
import Link from "next/link";

import { siteAssets } from "@/constants/assets";
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
      <span className="relative size-8 overflow-hidden rounded-xl shadow-[0_8px_24px_rgba(45,28,50,0.2)] transition-transform duration-300 group-hover:scale-105 group-hover:-rotate-3 sm:size-9 sm:rounded-[14px]">
        <Image
          src={siteAssets.brandMark}
          alt=""
          width={36}
          height={36}
          className="size-full object-cover"
          aria-hidden="true"
        />
      </span>
      <span className="text-base font-semibold tracking-[-0.035em] text-foreground sm:text-[1.05rem]">
        {businessInfo.name}
      </span>
    </Link>
  );
}
