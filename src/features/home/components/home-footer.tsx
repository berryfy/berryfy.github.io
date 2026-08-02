import dayjs from "dayjs";
import { Mail } from "lucide-react";

import BrandMark from "@/components/brand-mark";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { businessInfo } from "@/constants/business";
import { siteConfig } from "@/constants/site";
import type { SiteCopy } from "@/features/home/types/home";

interface HomeFooterProps {
  basePath: string;
  copy: SiteCopy["footer"];
}

export default function HomeFooter({ basePath, copy }: HomeFooterProps) {
  const year = dayjs().year();

  return (
    <footer className="px-5 pb-8 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-[1344px] rounded-[2rem] border border-border/70 bg-card/60 px-6 py-8 backdrop-blur-sm sm:px-8">
        <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <BrandMark href={basePath} />
            <p className="mt-4 text-sm text-muted-foreground">{copy.tagline}</p>
          </div>
          <Button
            asChild
            variant="outline"
            className="h-11 self-start rounded-full bg-card px-5 sm:self-auto"
          >
            <a href={`mailto:${businessInfo.contactEmail}`}>
              <Mail aria-hidden="true" />
              {copy.contact}
            </a>
          </Button>
        </div>
        <Separator className="my-7" />
        <p className="text-xs text-muted-foreground">
          © {year} {siteConfig.name}. {copy.rights}
        </p>
      </div>
    </footer>
  );
}
