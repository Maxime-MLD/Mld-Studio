import { Helmet } from "react-helmet-async";
import { siteConfig } from "./siteConfig.js";

/**
 * Composant SEO réutilisable (react-helmet-async).
 * Toutes les valeurs par défaut proviennent de siteConfig.
 *
 * @param {string}  [title]        - titre de la page (sans le nom du site).
 * @param {string}  [description]  - meta description (défaut : siteConfig.description).
 * @param {string}  [path]         - chemin de la page pour la canonical (défaut : "").
 * @param {string}  [image]        - image Open Graph (défaut : siteConfig.ogImage).
 * @param {object}  [jsonLd]       - données structurées à injecter (Schema.org).
 * @param {boolean} [noindex]      - true = interdit l'indexation (défaut : false).
 */
export default function SEO({
  title,
  description = siteConfig.description,
  path = "",
  image = siteConfig.ogImage,
  imageAlt = siteConfig.ogImageAlt,
  jsonLd,
  noindex = false,
  type = "website",
  publishedTime,
  modifiedTime,
}) {
  const fullTitle = title ? `${title} — ${siteConfig.name}` : siteConfig.name;
  const canonical = `${siteConfig.url}${path}`;
  // L'image Open Graph doit être une URL absolue.
  const absoluteImage = image.startsWith("http")
    ? image
    : `${siteConfig.url}${image}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large"}
      />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:locale" content={siteConfig.locale} />
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === "article" && (
        <meta property="article:author" content={siteConfig.author} />
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />
      <meta name="twitter:image:alt" content={imageAlt} />

      {/* Données structurées */}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
