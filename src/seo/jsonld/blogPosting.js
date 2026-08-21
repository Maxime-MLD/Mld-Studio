import { siteConfig } from "../siteConfig.js";

export function buildBlogPosting({
  headline,
  description,
  path,
  image,
  datePublished,
  dateModified = datePublished,
}) {
  const absoluteImage = image.startsWith("http")
    ? image
    : `${siteConfig.url}${image}`;

  return {
    "@type": "BlogPosting",
    "@id": `${siteConfig.url}${path}#article`,
    headline,
    description,
    mainEntityOfPage: `${siteConfig.url}${path}`,
    image: absoluteImage,
    datePublished,
    dateModified,
    inLanguage: "fr-FR",
    author: { "@id": `${siteConfig.url}/#maxime-lagraa` },
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
}

export default buildBlogPosting;
