import { ArrowLeft } from "lucide-react";

import Button from "@/components/atoms/Button";
import SiteFooter from "@/components/widgets/SiteFooter";
import SiteHeader from "@/components/widgets/SiteHeader";
import { homeLocalePaths, mainContentId, siteConfig } from "@/constants/site";
import { notFoundCopy } from "@/features/not-found/constants/not-found-copy";

// 전역 404. 홈 첫 화면과 같은 큰 영어 제목 + 짧은 설명 + 홈으로 가는 행동 하나.
const NotFoundPage = () => (
  <div className="flex min-h-svh flex-col bg-background text-foreground">
    <SiteHeader
      homeHref={notFoundCopy.homePath}
      locale={siteConfig.defaultLocale}
      languagePaths={homeLocalePaths}
    />

    <main
      id={mainContentId}
      className="mx-auto flex w-full max-w-page flex-1 flex-col justify-center px-4 py-24 sm:px-8 sm:py-32"
    >
      <p className="font-mono text-caption text-muted-foreground">
        {notFoundCopy.code}
      </p>
      <h1 className="mt-4 font-display text-display-xl font-extrabold tracking-[-0.05em]">
        {notFoundCopy.title}
      </h1>
      <p className="mt-8 max-w-prose text-body-lg text-pretty text-muted-foreground">
        {notFoundCopy.description}
      </p>
      <Button
        href={notFoundCopy.homePath}
        variant="secondary"
        size="lg"
        className="mt-10 self-start"
      >
        <ArrowLeft aria-hidden="true" />
        {notFoundCopy.action}
      </Button>
    </main>

    <SiteFooter
      locale={siteConfig.defaultLocale}
      homeHref={notFoundCopy.homePath}
      languagePaths={homeLocalePaths}
    />
  </div>
);

export default NotFoundPage;
