import Link from "next/link";

import Wordmark from "@/components/atoms/Wordmark";
import { businessInfo } from "@/constants/business";

interface BrandMarkProps {
  href: string;
}

const BrandMark = ({ href }: BrandMarkProps) => (
  <Link
    href={href}
    className="inline-flex min-h-11 items-center rounded-xs outline-none focus-visible:ring-3 focus-visible:ring-ring/60"
    aria-label={`${businessInfo.name} home`}
  >
    <Wordmark className="text-[1.375rem] sm:text-2xl" />
  </Link>
);

export default BrandMark;
