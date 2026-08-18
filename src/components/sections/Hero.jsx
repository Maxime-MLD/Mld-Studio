import { useState } from "react";
import Noise from "../Noise.jsx";
import Header from "../layout/Header.jsx";
import { useMenuBodyLock } from "../../scripts/hero.js";

function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  useMenuBodyLock(menuOpen);

  return (
    <main id="accueil" className="hero">
      <img className="hero-image" src="/assets/hero.png" alt="Ordinateur en aluminium posé sur un bloc de pierre noire" />
      <div className="hero-shade" aria-hidden="true" />
      <Noise className="hero-noise" opacity={0.11} />

      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <div className="hero-axis-lines" aria-hidden="true">
        <i className="axis-v-top" />
        <i className="axis-v-bottom" />
        <i className="axis-h-left" />
        <i className="axis-h-right" />
      </div>

      <section className="hero-frame" aria-labelledby="hero-title">
        <Noise className="hero-frame-noise" opacity={0.11} />

        <i className="corner-marker marker-top-left" aria-hidden="true" />
        <i className="corner-marker marker-top-right" aria-hidden="true" />
        <i className="corner-marker marker-bottom-left" aria-hidden="true" />
        <i className="corner-marker marker-bottom-right" aria-hidden="true" />

        <div className="hero-frame-content">

        <p className="version">(2026 — Version 1.0.2)</p>

        <div className="title-wrap">
          <p className="hero-brand-title" aria-label="MLD. Studio">
            <span className="title-main">MLD.</span>
            <span className="title-studio">Studio</span>
          </p>
        </div>

        <div className="hero-copy">
          <p>
            Nous réunissons <strong>stratégie, design et ingénierie</strong> dans une seule boucle
            <strong> haute performance</strong>. <strong>Votre vision</strong>, exécutée avec
            <strong> précision</strong> et pensée d’abord pour la <strong>conversion</strong>.
          </p>
        </div>

        <div className="profile">
          <span className="profile-avatar" aria-hidden="true">ML</span>
          <p><strong>Maxime Lagraa</strong><br />Designer & développeur</p>
        </div>

        <h1 id="hero-title" className="hero-seo-title">Création de site internet à Roanne.</h1>

        <div className="disciplines" aria-label="Nos expertises">
          <span>Design</span>
          <i>/</i>
          <span>Développement</span>
          <i>/</i>
          <span>Marketing</span>
        </div>
        </div>
      </section>

      <div className="hero-signature" aria-label="Site signature">
        <span>SITE</span>
        <em>Signature.</em>
      </div>

      <div className="local-time">
        <span>Heure locale :</span>
        <time>Paris — 13:30</time>
      </div>

    </main>
  );
}

export default Hero;
