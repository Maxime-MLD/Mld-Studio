import { siteConfig } from "../siteConfig.js";

export const personJsonLd = {
  "@type": "Person",
  "@id": `${siteConfig.url}/#maxime-lagraa`,
  name: siteConfig.author,
  jobTitle: "Designer et développeur web",
  url: `${siteConfig.url}/a-propos`,
  worksFor: { "@id": `${siteConfig.url}/#organization` },
  sameAs: [siteConfig.social.linkedin],
};

export default personJsonLd;
