# Audit SEO, métadonnées, sécurité et performance — MLD Studio

Date : 20 août 2026  
Périmètre : uniquement le projet local `MLD-Studio` et son aperçu Vite local. L'ancien site actuellement en production est explicitement exclu de cet audit.  
Méthode : inspection du code, réponses HTTP brutes, routes rendues, rapports Lighthouse existants, dépendances npm, SEO local, contenu et données structurées.

## Résumé exécutif

**Score de préparation SEO global : 49/100.**

Ce score ne juge pas le design. Le site est visuellement abouti, rapide et accessible, mais il n'est pas encore prêt à être déployé tel quel pour maximiser l'indexation et la confiance locale.

| Domaine | Score | Verdict |
|---|---:|---|
| Technique / indexabilité | 48/100 | Rendu initial React trop pauvre, soft 404 |
| Contenu | 49/100 | Bon ciblage local, articles trop fins et non sourcés |
| On-page | 52/100 | H1 accueil solide, métadonnées et maillage à corriger |
| Données structurées | 10/100 | Fichiers présents mais aucun schema rendu |
| Performance | 88/100 | Très bon ensemble, LCP mobile encore améliorable |
| Préparation citations IA | 34/100 | `llms.txt` utile, preuves et sources insuffisantes |
| Images | 72/100 | Formats optimisés, OG absente et dimensions à renforcer |

## Ce qui est déjà bon

- H1 d'accueil bien ciblé : « Création de site internet à Roanne ».
- Positionnement Roanne / Loire clair dans les textes et les articles.
- Lighthouse local : accueil mobile 94, blog mobile 95, article mobile 92, accueil desktop 100.
- Accessibilité Lighthouse : 100 sur les pages testées.
- CLS à 0 et temps de blocage très faibles.
- Une configuration Vercel d'en-têtes de sécurité est déjà préparée pour le futur déploiement.
- `npm audit --omit=dev` : aucune vulnérabilité détectée sur 54 dépendances.
- Aucun usage applicatif détecté de `eval`, `dangerouslySetInnerHTML`, cookies ou stockage navigateur.
- Pages légales, `robots.txt`, `sitemap.xml` et `llms.txt` déjà prévus dans le projet.
- Images majoritairement en WebP avec lazy-loading et alternatives textuelles raisonnables.

## Constats critiques

### 1. Toutes les routes locales servent le même HTML initial

Les réponses brutes de `/`, `/blog`, `/a-propos` et des articles renvoient toutes le même document de 1 353 octets avec :

- le title générique de l'accueil ;
- la description générique de l'accueil ;
- aucune canonical ;
- aucun contenu principal ;
- aucun JSON-LD.

Les métadonnées spécifiques sont ajoutées après exécution de JavaScript par `react-helmet-async`. Google peut rendre JavaScript, mais le traitement est plus lent et les robots sociaux exécutent rarement l'application. Les aperçus de partage, l'indexation des articles et les directives `noindex` sont donc fragiles.

**Correction recommandée :** pré-rendre ou générer statiquement chaque route indexable. Avec JavaScript désactivé, chaque URL doit déjà contenir son H1, son title, sa description, sa canonical et ses données structurées.

### 2. Métadonnées dupliquées et accueil incomplet

Après rendu client, les pages secondaires conservent les balises génériques d'`index.html` et ajoutent leurs balises spécifiques. Plusieurs routes ont donc deux titles et deux descriptions.

L'accueil ne monte aucun composant `SEO` et n'a pas de canonical, Open Graph ou JSON-LD dans le DOM React. De plus, l'image Open Graph déclarée dans `siteConfig.js`, `/og/og-default.jpg`, n'existe pas.

Critère de validation par route :

- exactement un `<title>` ;
- exactement une meta description ;
- une canonical auto-référente ;
- une image OG accessible en `200 image/*`, idéalement 1 200 × 630 px.

### 3. Sitemap incomplet et domaine canonique à définir

Le sitemap local ne contient que quatre URL et omet les quatre articles indexables. Avant le futur déploiement, il faut aussi choisir définitivement `https://www.mld-dev.com` ou `https://mld-dev.com`, puis utiliser exactement ce domaine dans `siteConfig.js`, les canonicals, `robots.txt`, le sitemap, `llms.txt` et les JSON-LD.

Les pages légales `noindex` doivent rester hors sitemap. L'alias `/blog/prix-site-internet-roanne` doit devenir une vraie redirection HTTP 301 vers l'article canonique, ou recevoir un véritable article sur les prix.

### 4. Soft 404 global

Une URL inconnue est réécrite vers l'application et répond `200`, puis React n'affiche aucune route. Il faut obtenir un vrai statut HTTP `404`. Une simple page React `path="*"` améliore l'expérience, mais ne remplace pas le statut serveur.

### 5. Aucun JSON-LD réellement rendu dans le projet React

Les modules `WebSite`, `ProfessionalService` et `BreadcrumbList` existent, mais ne sont importés par aucune page.

Architecture recommandée :

- accueil : `Organization` + `WebSite` avec des `@id` stables ;
- activité locale : `LocalBusiness` générique seulement si l'éligibilité GBP est confirmée ;
- À propos : `Person` pour Maxime, reliée à l'organisation ;
- articles : `BlogPosting`, auteur, éditeur, dates ISO et image absolue ;
- pages internes : fil d'Ariane visible + `BreadcrumbList` ;
- futures pages de prestations : `Service` avec `provider` et `areaServed`.

Éviter `ProfessionalService`, déprécié par Schema.org. Pour une entreprise de zone de service domiciliée chez son dirigeant, ne pas publier de géolocalisation résidentielle précise.

### 6. Identité, coordonnées et signaux locaux incohérents

Le site emploie à la fois `MLD Studio`, `MLD Dev` et `MLD.`. Le contact visible affiche `contact@mld-studio.fr`, alors que la configuration, les mentions légales et `llms.txt` utilisent `contact@mld-dev.com`. Le téléphone configuré n'est pas visible.

Il faut définir :

- une enseigne principale unique ;
- éventuellement un `legalName` différent uniquement dans les mentions/schema ;
- un seul email public ;
- un téléphone commercial visible et cliquable, s'il est réellement utilisé ;
- les mêmes valeurs sur le site, le GBP et les citations locales.

L'activité ressemble à une entreprise de zone de service. Une fiche Google Business Profile n'est pertinente que si l'entreprise rencontre ou visite réellement des clients en personne. Dans ce cas, l'adresse résidentielle doit rester masquée.

### 7. Portfolio, avis et chiffres encore provisoires

Le portfolio contient des placeholders tels que `[URL_SITE]`, `[TITRE_PROJET]` et `[SECTEUR]`. Les projets génériques ne donnent pas de client, problème, solution ni résultat vérifiable.

Les témoignages, la note « 4.9+ » et « 80 % de recommandations » ne possèdent ni source ni lien de preuve. Le bouton « Nos avis » mène au formulaire de contact au lieu de la fiche Google.

Avant publication :

- remplacer tous les placeholders ;
- n'afficher que des avis réels et autorisés ;
- relier la note à la fiche Google et préciser le nombre d'avis ;
- transformer les réalisations en mini études de cas avec URL réelle et résultats démontrables ;
- ne pas ajouter `aggregateRating` tant que les données ne sont pas vérifiées.

### 8. Le formulaire ne fonctionne pas et la politique affichée ne correspond pas au code

Le formulaire exécute uniquement `preventDefault()` : aucun message n'est envoyé. Pourtant les mentions légales annoncent un acheminement par Web3Forms.

Autres incohérences :

- le lien « politique de confidentialité » du formulaire pointe vers `#confidentialite`, ancre absente ;
- la politique indique nom, email et message, mais le formulaire collecte aussi le service ;
- aucun état de succès/erreur, anti-spam, rate limiting ou validation serveur n'est présent.

Lors de l'activation : connecter réellement le formulaire, ajouter validation, honeypot ou protection anti-spam, retour accessible, et mettre à jour la politique avec le sous-traitant et la durée de conservation réels.

## Contenu et E-E-A-T

### Articles trop fins

Les quatre articles contiennent environ 199 à 281 mots de corps éditorial. Chaque H2 est généralement suivi d'un seul paragraphe, sans procédure détaillée, cas réel, tableau, capture ou source.

Ils doivent être approfondis selon l'intention de recherche, sans viser artificiellement un nombre de mots : exemples roannais, étapes concrètes, erreurs, critères de décision, cas avant/après et FAQ utile.

### Chiffres non sourcés

Les articles comportent plusieurs chiffres et affirmations algorithmiques sans aucun lien externe : 88 %, 70 %, 42 %, 53 %, etc. Chaque donnée doit être reliée à une source primaire datée et contextualisée, ou être supprimée/nuancée.

### Auteur et fraîcheur

Les articles n'affichent pas de signature, bio, qualification, date de modification ou bibliographie. Les dates sont dans un `<strong>` au lieu d'un `<time datetime>`.

Ajouter une fiche auteur Maxime Lagraa, des preuves d'expérience, une date de publication/modification, des sources et le schema `BlogPosting`.

### Maillage interne faible

Chaque article ne renvoie pratiquement que vers la liste du blog. Ajouter trois à cinq liens contextuels utiles vers :

- un article connexe ;
- une prestation pertinente ;
- une réalisation réelle ;
- la page À propos/auteur ;
- le contact lorsque l'intention est commerciale.

Dans le footer des pages secondaires, les ancres `#accueil`, `#services` et `#journal` ciblent des sections absentes. Elles doivent pointer vers `/#accueil`, `/#services` et `/#journal`.

## On-page

- `/` : H1 et title pertinents, canonical manquante.
- `/blog` : title « Blog » et H1 « Derniers articles » trop génériques.
- `/a-propos` : aucun H1 ; « MLD Studio » est un H2.
- Titles trop longs : Google Maps (70 caractères), erreurs SEO (74), monopage/multipage (66).
- Articles : structure H1 puis H2 correcte.
- Pages légales : structure correcte et `noindex` approprié.
- Images de fond décoratives en `alt=""` : généralement correct. Les images éditoriales principales ont de bons alts.

## Performance et images

| Page | Performance | LCP | TBT | CLS |
|---|---:|---:|---:|---:|
| Accueil mobile | 94 | 2,9 s | 10 ms | 0 |
| Blog mobile | 95 | 2,8 s | 0 ms | 0 |
| Article mobile | 92 | 3,2 s | 20 ms | 0 |
| Accueil desktop | 100 | 0,6 s | 0 ms | 0 |

Le LCP mobile est dans la zone « à améliorer ». Les pages d'article découvrent leur image hero après le chargement du bundle lazy, tandis que `index.html` précharge les images de l'accueil sur toutes les routes.

À faire :

- préchargement spécifique à chaque route grâce au pré-rendu ;
- ne pas précharger le hero accueil sur les articles ;
- réduire le JavaScript inutilisé du bundle principal ;
- ajouter dimensions intrinsèques ou `aspect-ratio` à tous les médias ;
- supprimer des ressources publiques les lourdes copies inutilisées (`hero.png`, anciens PNG clients) si elles ne sont réellement référencées nulle part.

## Sécurité et hygiène du dépôt

### En-têtes

La configuration locale prévoit HSTS, `nosniff`, anti-framing, Referrer Policy, Permissions Policy et une CSP. La CSP est toutefois en `Report-Only` et autorise `unsafe-inline`.

Avant puis après le futur déploiement :

1. vérifier toutes les routes et l'envoi du formulaire ;
2. corriger les violations ;
3. passer la CSP en mode bloquant ;
4. retirer `unsafe-inline` pour les scripts si possible ;
5. contrôler les en-têtes réels avec `curl -I`.

### Dépendances et Git

- Aucune vulnérabilité npm connue détectée.
- `package.json` utilise plusieurs versions `latest`, ce qui réduit la reproductibilité ; préférer des versions explicites et Renovate/Dependabot.
- Aucun `.gitignore` n'existe.
- 632 fichiers `node_modules` et 37 fichiers `dist` sont suivis par Git.

Ajouter un `.gitignore` et retirer `node_modules`, `dist`, rapports Lighthouse, logs et `.env*` de l'index Git sans supprimer les sources locales. Ne jamais versionner de clé de formulaire ou secret serveur.

## SEO local recommandé

- Confirmer l'éligibilité réelle de la fiche Google Business Profile.
- Si éligible, utiliser une catégorie principale décrivant exactement l'activité, par exemple « Concepteur de sites Web », à tester selon les catégories disponibles.
- Rendre visible un lien direct vers le profil Google et les avis.
- Harmoniser le NAP sur GBP, Bing Places, Apple Business Connect, PagesJaunes et profils sociaux pertinents.
- Créer d'abord des pages de services réellement distinctes : site vitrine, optimisation GBP, maintenance.
- Éviter les pages locales clonées pour Roanne, Riorges, Mably, etc. Une page par ville n'est justifiée que par du contenu et des preuves réellement uniques.
- Obtenir des liens/citations locaux : CCI, réseaux d'entrepreneurs, partenaires et médias locaux.

## Limites de l'audit

- Aucun accès à Google Search Console, GA4, Insights GBP, profils de backlinks exhaustifs ou données CrUX terrain.
- Aucun environnement de préproduction Vercel du nouveau projet n'a été testé ; les en-têtes et statuts HTTP devront donc être validés au moment du futur déploiement.
- Les scores Lighthouse SEO et Best Practices n'étaient pas inclus dans les rapports existants ; les valeurs `0` de ces catégories signifient « non exécuté », pas un échec.
- La conformité juridique finale doit être validée selon le traitement de données réellement mis en place.
