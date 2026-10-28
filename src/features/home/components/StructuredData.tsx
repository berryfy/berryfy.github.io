import { berryfyGooglePlayUrl } from "@/constants/apps";
import { businessInfo } from "@/constants/business";
import { siteConfig, siteSlogan } from "@/constants/site";
import type { SiteLocale } from "@/types/site";

interface StructuredDataProps {
  locale: SiteLocale;
  description: string;
}

// 검색엔진용 구조화 데이터(JSON-LD). 회사(Organization)와 사이트(WebSite) 정보를 알린다.
const StructuredData = ({ locale, description }: StructuredDataProps) => {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: businessInfo.name,
        url: `${siteConfig.url}/`,
        logo: `${siteConfig.url}/icon.png`,
        slogan: siteSlogan,
        email: businessInfo.contactEmail,
        sameAs: [berryfyGooglePlayUrl],
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        name: siteConfig.name,
        url: `${siteConfig.url}/`,
        description,
        inLanguage: locale,
        publisher: { "@id": `${siteConfig.url}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
};

export default StructuredData;
