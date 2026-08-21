import Hero from "./components/sections/Hero.jsx";
import Constat from "./components/sections/Constat.jsx";
import Realisations from "./components/sections/Realisations.jsx";
import Stats from "./components/sections/Stats.jsx";
import Prestations from "./components/sections/Prestations.jsx";
import Methode from "./components/sections/Methode.jsx";
import Faq from "./components/sections/Faq.jsx";
import Prix from "./components/sections/Prix.jsx";
import AvisClients from "./components/sections/AvisClients.jsx";
import Conseils from "./components/sections/Conseils.jsx";
import Contact from "./components/sections/Contact.jsx";
import Footer from "./components/sections/Footer.jsx";
import { Navigate, Routes, Route } from "react-router-dom";
import SmoothScroll from "./components/layout/SmoothScroll.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import MentionsLegales from "./pages/MentionsLegales.jsx";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite.jsx";
import RealisationsPage from "./pages/RealisationsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import ArticleRoannePage from "./pages/ArticleRoannePage.jsx";
import ArticleGoogleMapsPage from "./pages/ArticleGoogleMapsPage.jsx";
import ArticleErreursSeoPage from "./pages/ArticleErreursSeoPage.jsx";
import ArticleMonopageMultipagePage from "./pages/ArticleMonopageMultipagePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import FloatingMenu from "./components/layout/FloatingMenu.jsx";
import SEO from "./seo/SEO.jsx";
import { buildGraph } from "./seo/jsonld/graph.js";
import { organizationJsonLd } from "./seo/jsonld/organization.js";
import { personJsonLd } from "./seo/jsonld/person.js";
import { websiteJsonLd } from "./seo/jsonld/website.js";
import { servicesJsonLd } from "./seo/jsonld/services.js";

// Page d'accueil : l'enchaînement de sections existant, inchangé.
export function Home() {
  return (
    <>
      <SEO
        title="Création de sites internet à Roanne"
        path="/"
        description="MLD Studio conçoit des sites internet modernes, rapides et sur mesure à Roanne, dans la Loire et partout en France."
        jsonLd={buildGraph(
          organizationJsonLd,
          personJsonLd,
          websiteJsonLd,
          servicesJsonLd,
        )}
      />
      <Hero />
      <Constat />
      <Realisations />
      <Stats />
      <Prestations />
      <Methode />
      <Faq />
      <Prix />
      <AvisClients />
      <Conseils />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <SmoothScroll>
      <FloatingMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/realisations" element={<RealisationsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route
          path="/blog/importance-site-internet-roanne-2026"
          element={<ArticleRoannePage />}
        />
        <Route
          path="/blog/prix-site-internet-roanne"
          element={<Navigate replace to="/blog/importance-site-internet-roanne-2026" />}
        />
        <Route
          path="/blog/google-maps-roanne-fiche-optimisee"
          element={<ArticleGoogleMapsPage />}
        />
        <Route
          path="/blog/erreurs-seo-local-roanne"
          element={<ArticleErreursSeoPage />}
        />
        <Route
          path="/blog/site-monopage-multipage-loire"
          element={<ArticleMonopageMultipagePage />}
        />
        <Route path="/a-propos" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route
          path="/politique-confidentialite"
          element={<PolitiqueConfidentialite />}
        />
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </SmoothScroll>
  );
}

export default App;
