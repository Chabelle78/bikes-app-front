# Bikes App Front

## Français
### Ce que fait l’app
- Affiche une liste de vélos
- Permet de filtrer par marque, type, matériau, couleur, poids
- Interface responsive et fluide
- Maquette initiale réalisée avec Base44 pour visualisation

### Stack
- React + TypeScript
- Vite
- Redux Toolkit
- React Router
- SCSS Modules

### Comment le projet est organisé
- Code structuré par fonctionnalité plutôt que par type de fichiers
- L’état global (Redux) est utilisé uniquement pour les données partagées entre composants, comme la liste de vélos et les filtres, tandis que la logique locale reste dans des hooks pour garder les composants légers et réutilisables
- La logique est séparée de l’UI pour garder des composants simples
- Les styles sont isolés par composant
- Suivi des tâches via **GitHub Project**
- Plusieurs **pull requests** réalisées pour valider les évolutions

### Pourquoi ces choix
- Code plus facile à lire et à faire évoluer
- Moins de duplication
- Comportement prévisible côté UI
- Développement possible sans backend grâce à des données mockées

### Ce que j’améliorerais ensuite
- Ajouter des tests sur la logique de filtrage
- Mieux gérer les erreurs et les états de chargement
- Optimiser les performances sur de gros volumes de données
- API :
  - Ajouter une vraie API et gérer la pagination (pour remplacer l'appel aux moch bikes / brands etc.)
  - Continuer la connexion à une API cycling (POC en cours sur la branche) pour mettre en relation "matériel et équipe professionnelle"
- Mettre en place un design system plus structuré
- Améliorer le responsive
- Différencier les tags par couleurs
- Meilleure documentation du code (ex. nommer les useEffect)

---

## English
### What the app does
- Displays a list of bikes
- Allows filtering by brand, type, frame material, color, weight
- Responsive and smooth user interface
- Initial mockup created with **Base44** for visualization

### Stack
- React + TypeScript
- Vite
- Redux Toolkit
- React Router
- SCSS Modules

### Project organization
- Code organized by feature rather than by file type
- Global state used only when needed (list + filters)
- Logic separated from UI to keep components simple
- Styles scoped per component
- Task management using **GitHub Project**
- Multiple **pull requests** implemented for feature updates

### Why these choices
- Easier to read and maintain code
- Less duplication
- Predictable UI behavior
- Can develop without backend thanks to mock data

### What I would improve next
- Add tests for the filtering logic
- Global state (Redux) is used only for shared data, such as the bike list and filters, while local logic stays in hooks to keep components lightweight and reusable
- Optimize performance for large datasets
- API:
  - Add a real API and handle pagination (to replace calls to mock bikes/brands etc.)
  - Continue connecting to a cycling API (POC in progress on the branch) to link "equipment and professional teams"
- Implement a more structured design system
- Improve responsiveness
- Differentiate tags by color
- Better code documentation (e.g., naming useEffects)

---------------------------------------------------------

### En plus du "court Readme" lancement du projet et structure
## Installation & Run
Prérequis - Node.js ≥ 18 - npm ou yarn

# Lancement en mode développement
```bash 
npm run dev
```

## 📁 Structure du Projet
src/
├── app/ # Configuration Redux store
├── features/ # Features modulaires
│ ├── bikes/ # Gestion des vélos
│ ├── brands/ # Gestion des marques
│ ├── colors/ # Gestion des couleurs
│ ├── components/ # Composants métier
│ ├── frames/ #  Gestion des matériau
│ ├── ridingTypes/ #  Gestion des types de 'ride'
│ └── settings/ # Paramètres applicatifs
├── helpers/ # Fonctions utilitaires
├── hooks/ # Custom hooks React
├── layout/ # Composants de layout (NavBar, SideBar)
├── lib/ # Composants de layout (NavBar, SideBar)
├── pages/ # Pages de l'application
├── services/ # API client et mock data
├── types/ # Définitions TypeScript
├── ui-lib/ # Bibliothèque de composants UI réutilisables
└── utils/ # Utilitaires génériques
### In addition to the "short README" - Project launch and structure

## Installation & Run
Prerequisites: Node.js ≥ 18, npm or yarn

### Start in development mode
```bash
npm run dev
```

## Project Structure
src/
├── app/        # Redux store configuration
├── features/   # Modular features
│   ├── bikes/      # Bikes management
│   ├── brands/     # Brands management
│   ├── colors/     # Colors management
│   ├── components/ # Reusable filtering components
│   └── settings/   # Application settings
├── layout/     # Layout components (NavBar, SideBar)
├── pages/      # Application pages
├── services/   # API client and mock data
├── types/      # TypeScript definitions
├── ui-lib/     # Reusable UI component library
├── hooks/      # React custom hooks
├── helpers/    # Utility functions
└── utils/      # Generic utilities
