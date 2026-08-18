import LegalPage from "./LegalPage.jsx";

// Route /mentions-legales : rend la page légale combinée (mentions +
// confidentialité), avec sa propre balise <title> et sa canonical.
export default function MentionsLegales() {
  return <LegalPage seoTitle="Mentions légales" path="/mentions-legales" />;
}
