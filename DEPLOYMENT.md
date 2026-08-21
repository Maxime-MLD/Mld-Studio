# Déploiement du nouveau site MLD Studio sur Vercel

## Formulaire de contact

Le formulaire appelle la fonction Vercel `/api/contact`. Cette fonction valide
les champs, applique une limitation basique des envois et transmet le message à
Web3Forms. La clé Web3Forms reste côté serveur et n'apparaît jamais dans le
navigateur.

1. Dans Web3Forms, créer ou récupérer une clé liée à l'adresse qui doit recevoir
   les demandes.
2. Dans Vercel : **Project Settings → Environment Variables**.
3. Ajouter la variable `WEB3FORMS_ACCESS_KEY` pour Production, Preview et
   Development.
4. Coller la clé uniquement dans Vercel. Ne jamais la placer dans le code, Git
   ou un message public.
5. Redéployer puis effectuer un véritable envoi depuis le formulaire.

Une fonction Vercel standard fonctionne avec l'offre Hobby gratuite. Web3Forms
reste le service d'acheminement des emails ; Vercel protège simplement la clé et
valide les données avant leur transmission.

## Domaine

- Définir `www.mld-studio.fr` comme domaine principal du nouveau projet.
- Faire rediriger `mld-studio.fr` (sans www) vers `https://www.mld-studio.fr`.
- Faire rediriger les anciens domaines `mld-dev.com` et `www.mld-dev.com` vers `https://www.mld-studio.fr`.
- Vérifier que les domaines possèdent un certificat HTTPS valide.

## Paramètres de construction

- Build command : `npm run build`
- Output directory : `dist`
- Install command : `npm install`

Le build génère une page HTML pré-rendue pour chaque route indexable, ainsi
qu'un véritable fichier `404.html`.

## Contrôles après déploiement

1. Ouvrir directement chaque URL depuis une nouvelle fenêtre.
2. Vérifier `/blog`, `/a-propos`, les quatre articles et les deux pages légales.
3. Vérifier que `/blog/prix-site-internet-roanne` redirige vers l'article canonique.
4. Vérifier qu'une URL inexistante renvoie bien le statut HTTP 404.
5. Vérifier `https://www.mld-studio.fr/sitemap.xml` et `robots.txt`.
6. Tester un envoi réel du formulaire et sa protection en cas d'erreur.
7. Contrôler les en-têtes CSP, HSTS, `nosniff` et anti-framing.
