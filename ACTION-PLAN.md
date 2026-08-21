# Plan d'action priorisé — MLD Studio

## P0 — Avant le prochain déploiement

| Priorité | Action | Critère de réussite |
|---|---|---|
| P0 | Choisir le domaine canonique | Toutes les URL, canonicals, sitemap, robots et JSON-LD utilisent `www` ou non-`www` de façon identique ; l'autre hôte redirige en 301/308 |
| P0 | Pré-rendre les 8 routes indexables | `curl` retourne le H1, un title, une description, une canonical et le JSON-LD propres à chaque page |
| P0 | Corriger les 404 | Une URL inconnue répond HTTP 404 avec une page utile et `noindex` |
| P0 | Corriger sitemap et alias | Les 8 URL canoniques figurent au sitemap ; l'alias prix redirige en 301 ou devient un vrai article |
| P0 | Brancher le SEO accueil | Canonical, OG/Twitter et graphe `Organization` + `WebSite` présents dans le HTML initial |
| P0 | Ajouter l'image OG | Image 1 200 × 630 accessible en 200 avec type MIME image |
| P0 | Unifier marque et coordonnées | Une enseigne, un email et, si souhaité, un téléphone identiques partout |
| P0 | Nettoyer les preuves provisoires | Aucun `[URL_SITE]`, `[TITRE_PROJET]`, avis ou chiffre non vérifiable publié |
| P0 | Rendre le formulaire réel | Envoi fonctionnel, erreurs/succès accessibles, lien de confidentialité correct, anti-spam et politique à jour |

## P1 — Première semaine après mise en ligne

1. Ajouter un vrai H1 à `/a-propos` et renforcer les titles de `/blog` et `/realisations`.
2. Raccourcir les trois titles d'articles dépassant environ 60–65 caractères.
3. Ajouter `BlogPosting`, `Person`, `Organization` et `BreadcrumbList`.
4. Transformer les quatre articles en contenus réellement complets, sourcés et signés.
5. Ajouter trois à cinq liens éditoriaux contextuels par article.
6. Transformer chaque réalisation en étude de cas vérifiable.
7. Corriger les liens d'ancres du footer sur les pages secondaires.
8. Passer les dates d'article en `<time datetime>` et afficher `dateModified` si nécessaire.
9. Déployer puis tester les en-têtes de sécurité ; faire passer la CSP de Report-Only à bloquante après validation.
10. Ajouter `.gitignore`, désindexer `node_modules` et `dist`, puis fixer les versions npm.

## P2 — Croissance locale

1. Confirmer l'éligibilité GBP : contacts clients en personne et adresse résidentielle masquée.
2. Relier visiblement la fiche Google au site et afficher uniquement des avis vérifiés.
3. Harmoniser le NAP sur GBP, Bing Places, Apple Business Connect et citations françaises pertinentes.
4. Créer des pages de services distinctes et substantielles avant toute page locale par ville.
5. Publier régulièrement des cas clients de Roanne/Loire avec autorisation.
6. Installer Google Search Console et Bing Webmaster Tools, soumettre le sitemap et surveiller l'indexation.
7. Envisager IndexNow pour Bing lors des nouvelles publications.
8. Mesurer les Core Web Vitals terrain et viser un LCP mobile inférieur à 2,5 s.

## Ordre d'exécution conseillé

1. Domaine canonique, rendu HTML et statuts HTTP à préparer avant déploiement.
2. Métadonnées, sitemap, schema et image OG.
3. Formulaire, identité, avis et portfolio réels.
4. Contenu, maillage et autorité locale.
5. CSP, hygiène Git et optimisation LCP.
