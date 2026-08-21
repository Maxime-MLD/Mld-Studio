const links = [
  {
    href: "/blog/importance-site-internet-roanne-2026",
    label: "Pourquoi créer un site internet professionnel à Roanne ?",
  },
  {
    href: "/blog/google-maps-roanne-fiche-optimisee",
    label: "Optimiser une fiche Google Business à Roanne",
  },
  {
    href: "/blog/erreurs-seo-local-roanne",
    label: "Les erreurs SEO qui limitent la visibilité locale",
  },
  {
    href: "/blog/site-monopage-multipage-loire",
    label: "Choisir entre un site monopage et multipage",
  },
  { href: "/realisations", label: "Découvrir les concepts créatifs de MLD Studio" },
  { href: "/a-propos", label: "En savoir plus sur Maxime et MLD Studio" },
  { href: "/#contact", label: "Présenter votre projet à MLD Studio" },
];

export default function ArticleRelatedLinks({ currentPath }) {
  return (
    <>
      <h2>À lire aussi</h2>
      <ul className="article-related-links">
        {links
          .filter((link) => link.href !== currentPath)
          .map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
      </ul>
    </>
  );
}
