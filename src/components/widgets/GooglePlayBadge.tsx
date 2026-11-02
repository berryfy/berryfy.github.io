import Image from "next/image";

interface GooglePlayBadgeProps {
  href: string;
  locale: string;
  label: string;
}

const GooglePlayBadge = ({ href, locale, label }: GooglePlayBadgeProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="inline-flex min-h-11 shrink-0 items-center rounded-sm transition-opacity outline-none hover:opacity-80 focus-visible:ring-3 focus-visible:ring-ring/60"
  >
    <Image
      src={`/images/stores/google-play-${locale}.webp`}
      alt={label}
      width={646}
      height={250}
      className="h-16 w-auto"
    />
  </a>
);

export default GooglePlayBadge;
