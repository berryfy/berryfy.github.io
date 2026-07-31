export type SiteLocale = "en" | "ko" | "ja";

export type AppVisual = "potion" | "focus" | "prisma";

export interface FeaturedApp {
  name: string;
  category: string;
  description: string;
  visual: AppVisual;
}

export interface SiteCopy {
  languageName: string;
  languageMenuLabel: string;
  menuLabel: string;
  closeMenuLabel: string;
  navigation: {
    apps: string;
    studio: string;
    principles: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    primaryAction: string;
    secondaryAction: string;
    challengeLabel: string;
    challengeValue: string;
  };
  visual: {
    caption: string;
    play: string;
    focus: string;
    create: string;
  };
  apps: {
    eyebrow: string;
    title: string;
    description: string;
    featuredLabel: string;
    imageSlotLabel: string;
    items: FeaturedApp[];
  };
  studio: {
    eyebrow: string;
    title: string;
    description: string;
    note: string;
  };
  principles: {
    eyebrow: string;
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  footer: {
    tagline: string;
    contact: string;
    rights: string;
  };
}
