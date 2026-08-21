import { siteConfig } from "../siteConfig.js";

/**
 * Construit un BreadcrumbList à partir d'une liste d'étapes.
 * @param {{name: string, path: string}[]} items - fil d'Ariane ordonné.
 * @returns schéma BreadcrumbList prêt à passer à <SEO jsonLd={...} />.
 */
export function buildBreadcrumb(items = []) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

export default buildBreadcrumb;
