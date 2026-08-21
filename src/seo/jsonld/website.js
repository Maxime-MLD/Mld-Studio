import { siteConfig } from "../siteConfig.js";

export const websiteJsonLd = {
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  inLanguage: "fr-FR",
  publisher: { "@id": `${siteConfig.url}/#organization` },
};

export default websiteJsonLd;
