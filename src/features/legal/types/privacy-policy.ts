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
