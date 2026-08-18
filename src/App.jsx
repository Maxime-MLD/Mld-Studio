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
import { Routes, Route } from "react-router-dom";
import MentionsLegales from "./pages/MentionsLegales.jsx";
import PolitiqueConfidentialite from "./pages/PolitiqueConfidentialite.jsx";
import RealisationsPage from "./pages/RealisationsPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";

// Page d'accueil : l'enchaînement de sections existant, inchangé.
function Home() {
  return (
    <>
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
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/realisations" element={<RealisationsPage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/mentions-legales" element={<MentionsLegales />} />
      <Route
        path="/politique-confidentialite"
        element={<PolitiqueConfidentialite />}
      />
    </Routes>
  );
}

export default App;
