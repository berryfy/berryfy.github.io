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
  data: string;
  purpose: string;
  location: string;
  timingAndMethod: string;
  retention: string;
  policyUrl: string;
}
