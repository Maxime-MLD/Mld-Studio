import { buildGraph } from "./jsonld/graph.js";
import { buildBreadcrumb } from "./jsonld/breadcrumb.js";
import { buildBlogPosting } from "./jsonld/blogPosting.js";
import { organizationJsonLd } from "./jsonld/organization.js";
import { personJsonLd } from "./jsonld/person.js";

export function buildArticleGraph(article) {
  return buildGraph(
    organizationJsonLd,
    personJsonLd,
    buildBlogPosting(article),
    buildBreadcrumb([
      { name: "Accueil", path: "/" },
      { name: "Conseils et actualités", path: "/blog" },
      { name: article.headline, path: article.path },
    ]),
  );
}

export default buildArticleGraph;
