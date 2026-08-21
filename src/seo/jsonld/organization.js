import { siteConfig } from "../siteConfig.js";

export const organizationJsonLd = {
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  logo: `${siteConfig.url}/favicon.svg`,
  image: `${siteConfig.url}${siteConfig.ogImage}`,
  description: siteConfig.description,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.address.city,
    postalCode: siteConfig.address.postalCode,
    addressRegion: siteConfig.address.region,
    addressCountry: siteConfig.address.country,
  },
  areaServed: siteConfig.areaServed.map((name) => ({
    "@type": name === "France" ? "Country" : "AdministrativeArea",
    name,
  })),
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.phone,
    email: siteConfig.email,
    contactType: "customer service",
    availableLanguage: "French",
    areaServed: "FR",
  },
  founder: { "@id": `${siteConfig.url}/#maxime-lagraa` },
  sameAs: [siteConfig.social.linkedin, siteConfig.social.instagram],
};

export default organizationJsonLd;
