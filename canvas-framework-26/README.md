# Canvas Framework

## Description

Le Canvas Framework est une bibliothèque JavaScript conçue pour faciliter la création et la manipulation de graphiques 2D sur un canevas HTML. Il fournit des classes et des utilitaires pour gérer les formes, les animations et les effets visuels, permettant aux développeurs de créer des applications interactives et dynamiques.

## Structure du projet

Le projet est organisé comme suit :

```
canvas-framework-26
├── src
│   ├── index.ts               # Point d'entrée de l'application
│   ├── core
│   │   ├── Canvas.ts          # Classe pour gérer le canevas
│   │   ├── Renderer.ts        # Classe pour le rendu des éléments
│   │   └── Animation.ts       # Classe pour gérer les animations
│   ├── components
│   │   ├── Shape.ts           # Classe représentant une forme géométrique
│   │   ├── Sprite.ts          # Classe pour gérer les images et animations
│   │   └── ParticleSystem.ts   # Classe pour gérer un système de particules
│   ├── utils
│   │   ├── Vector2D.ts        # Classe pour les opérations vectorielles
│   │   └── Color.ts           # Classe pour la gestion des couleurs
│   └── types
│       └── index.ts           # Types et interfaces utilisés dans le projet
├── public
│   └── index.html             # Page HTML principale
├── package.json               # Configuration npm
├── tsconfig.json              # Configuration TypeScript
└── README.md                  # Documentation du projet
```

## Installation

Pour installer les dépendances du projet, exécutez la commande suivante :

```
npm install
```

## Utilisation

1. Ouvrez le fichier `public/index.html` dans un navigateur pour voir le canevas en action.
2. Modifiez les fichiers dans le dossier `src` pour personnaliser le comportement et l'apparence de votre application.

## Contribuer

Les contributions sont les bienvenues ! Si vous souhaitez contribuer, veuillez suivre ces étapes :

1. Forkez le projet.
2. Créez une nouvelle branche (`git checkout -b feature/YourFeature`).
3. Apportez vos modifications et validez (`git commit -m 'Add some feature'`).
4. Poussez vers la branche (`git push origin feature/YourFeature`).
5. Ouvrez une Pull Request.

## License

Ce projet est sous licence MIT. Consultez le fichier LICENSE pour plus de détails.