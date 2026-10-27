interface SkipLinkProps {
  href: string;
  label: string;
}

// 키보드로 처음 Tab을 누르면 나타나 본문으로 바로 이동시킨다.
const SkipLink = ({ href, label }: SkipLinkProps) => (
  <a
    href={href}
    className="fixed top-3 left-3 z-60 inline-flex h-11 -translate-y-24 items-center rounded-full bg-primary px-5 text-small font-semibold text-primary-foreground outline-none focus-visible:translate-y-[env(safe-area-inset-top)] focus-visible:ring-3 focus-visible:ring-ring/60"
  >
    {label}
  </a>
);

export default SkipLink;
