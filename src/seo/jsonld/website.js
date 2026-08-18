import { siteConfig } from "../siteConfig.js";

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: "fr-FR",
};

export default websiteJsonLd;
