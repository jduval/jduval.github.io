# jduval.github.io

Site de présentation de mon activité de développeur freelance à Marseille : outils métier sur mesure pour les TPE et PME.

Construit avec [Astro](https://astro.build) et [Tailwind CSS](https://tailwindcss.com), publié sur GitHub Pages.

## Lancer en local

```sh
npm install
npm run dev
```

Le site est sur http://localhost:4321.

## Modifier les textes

- `src/data/site.ts` : nom, téléphone, email, lien de prise de rendez-vous.
- `src/data/content.ts` : métiers, étapes, offres, engagements, questions fréquentes.
- `src/pages/` : la page d'accueil et les pages légales.

## Mise en ligne

Chaque push sur `master` lance `.github/workflows/deploy.yml`, qui construit le site et le publie sur https://jduval.github.io.

À faire une seule fois : dans les réglages du dépôt, *Settings > Pages > Source*, choisir **GitHub Actions**.
