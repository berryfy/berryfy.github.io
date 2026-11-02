"use client";

import { useEffect, useRef } from "react";
import { legacyRedirectCopy } from "@/features/legacy-redirect/constants/targets";
import type { SiteLocale } from "@/types/site";

const LegacyRedirectPage = ({
  target,
  locale,
}: {
  target: string;
  locale: SiteLocale;
}) => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const copy = legacyRedirectCopy[locale];

  useEffect(() => {
    // 같은 origin의 정식 경로만 사용한다. WebView의 쿼리·해시와 뒤로가기 동작을 유지한다.
    const destination = target + window.location.search + window.location.hash;
    if (linkRef.current) linkRef.current.href = destination;
    window.location.replace(destination);
  }, [target]);

  return (
    <main lang={locale} className="mx-auto max-w-prose px-4 py-20 sm:px-8">
      <p className="text-body text-muted-foreground">{copy.message}</p>
      <a
        ref={linkRef}
        href={target}
        className="mt-4 inline-flex min-h-11 items-center rounded-xs text-link underline outline-none focus-visible:ring-3 focus-visible:ring-ring/60"
      >
        {copy.link}
      </a>
      <noscript>
        <meta httpEquiv="refresh" content={`0;url=${target}`} />
      </noscript>
    </main>
  );
};

export default LegacyRedirectPage;
