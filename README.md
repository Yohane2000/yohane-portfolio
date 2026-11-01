# Yohane Wagramale — Portfolio

Portfolio bilingue FR/EN, construit avec Next.js, React, TypeScript, Framer Motion et CSS responsive.

## Démarrage

1. Installer Node.js (version LTS récente).
2. Décompresser le dossier.
3. Ouvrir un terminal dans ce dossier.
4. Installer les dépendances :

   ```bash
   npm install
   ```

5. Lancer le serveur :

   ```bash
   npm run dev
   ```

6. Ouvrir http://localhost:3000

Pour Windows PowerShell, si `npm` est bloqué par la politique d'exécution, utiliser `npm.cmd install` et `npm.cmd run dev`.

## Avant publication

Dans `components/portfolio.tsx`, remplacer les éléments provisoires :

- `ton-adresse@email.com` par ton adresse réelle (deux occurrences).
- `TON-PROFIL` par tes identifiants GitHub et LinkedIn.
- Vérifier les URL des projets dans le tableau `urls`.
- Vérifier les textes de présentation et les informations de parcours dans `lib/translations.ts`.

Les aperçus de projets sont des compositions CSS intégrées, pas des captures d'écran réelles. Tu peux les remplacer par tes propres images lorsque tu en disposes.

## Responsive

La mise en page est pensée mobile-first : navigation repliée sur téléphone, grilles adaptées, titres fluides, zones tactiles et respect de `prefers-reduced-motion`.

## Note sur la référence visuelle

La direction artistique est une création originale inspirée de portfolios éditoriaux et typographiques contemporains. Elle ne reproduit pas le code, les textes ou les visuels d'un autre site.


## Mode clair / mode sombre

Le bouton soleil/lune dans la navigation permet de basculer entre les deux thèmes. Le choix est sauvegardé dans le navigateur (`localStorage`, clé `yohane-theme`) et conservé lors des prochaines visites. Le thème sombre est utilisé par défaut. Le bouton est disponible sur ordinateur et téléphone.
