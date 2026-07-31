export interface PrivacyNavigationItem {
  id: string;
  label: string;
}

export interface PrivacyDataItem {
  category: string;
  data: string;
  purpose: string;
  retention: string;
}

export interface ExternalPrivacyService {
  provider: string;
  service: string;
  relationship: string;
  transferBasis: string;
  data: string;
  purpose: string;
  location: string;
  timingAndMethod: string;
  retention: string;
  refusalAndEffect: string;
  policyUrl: string;
}

export type PrivacyLocale = "ko" | "en" | "ja";

export interface EyeconsPrivacyPolicy {
  appName: string;
  businessName: string;
  contactEmail: string;
  effectiveDate: string;
  navigation: readonly PrivacyNavigationItem[];
  serverData: readonly PrivacyDataItem[];
  localData: readonly PrivacyDataItem[];
  externalServices: readonly ExternalPrivacyService[];
}

export interface PrivacyPageCopy {
  languageNavigationLabel: string;
  pageTitle: string;
  intro: string;
  labels: {
    app: string;
    business: string;
    effectiveDate: string;
    contents: string;
    category: string;
    dataItem: string;
    purpose: string;
    retention: string;
    providerPolicy: string;
    relationship: string;
    transferBasis: string;
    location: string;
    timingAndMethod: string;
    refusalAndEffect: string;
  };
  overview: {
    title: string;
    items: readonly string[];
  };
  purposes: {
    title: string;
    intro: string;
    items: readonly string[];
  };
  data: {
    title: string;
    intro: string;
    serverTitle: string;
    localIntro: string;
    localTitle: string;
  };
  collection: {
    title: string;
    items: readonly string[];
    permissions: string;
    publicContent: string;
  };
  thirdParties: {
    title: string;
    paragraphs: readonly string[];
  };
  external: {
    title: string;
    intro: string;
    providerControl: string;
    youtube: string;
    youtubeTerms: string;
    googlePrivacy: string;
  };
  deletion: {
    title: string;
    paragraphs: readonly string[];
  };
  rights: {
    title: string;
    beforeEmail: string;
    paragraphs: readonly string[];
  };
  automatic: {
    title: string;
    intro: string;
    items: readonly string[];
  };
  security: {
    title: string;
    items: readonly string[];
    paragraphs: readonly string[];
  };
  contact: {
    title: string;
    department: string;
    email: string;
    app: string;
    intro: string;
    agencies: readonly {
      label: string;
      url: string;
      displayUrl: string;
      phone: string;
    }[];
  };
  changes: {
    title: string;
    text: string;
  };
}
