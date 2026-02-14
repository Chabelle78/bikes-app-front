# Composant Card Réutilisable

Un composant Card flexible et réutilisable avec modules SCSS pour React + TypeScript.

## 📦 Structure

```
src/
├── ui-lib/
│   └── Card/
│       ├── Card.tsx           # Composant principal
│       ├── Card.module.scss   # Styles en modules SCSS
│       └── index.ts          # Export des composants
├── features/components/Card/
│   ├── CardBikes.tsx          # Exemple d'utilisation pour vélos
│   ├── CardBikes.module.scss  # Styles spécifiques aux vélos
│   └── BikeCardsExample.tsx   # Exemple d'implémentation
└── lib/
    └── utils.ts              # Fonctions utilitaires
```

## 🎨 Composants disponibles

### Composants de base

- **Card** : Conteneur principal de la carte
- **CardHeader** : En-tête de la carte
- **CardImage** : Wrapper pour l'image avec overlay
- **CardBadges** : Conteneur pour les badges
- **CardBadge** : Badge individuel (avec variants)
- **CardTitle** : Titre de la carte
- **CardDescription** : Description texte avec ellipsis
- **CardInfo** : Info avec icône (poids, matériau, etc.)
- **CardInfoGroup** : Groupe d'infos
- **CardContent** : Contenu principal
- **CardFooter** : Pied de carte
- **CardFeature** : Caractéristique avec label et valeur

## 🚀 Utilisation basique

```tsx
import {
  Card,
  CardHeader,
  CardImage,
  CardBadges,
  CardBadge,
  CardTitle,
  CardDescription,
  CardInfoGroup,
  CardInfo,
  CardContent,
  CardFooter,
} from "@/ui-lib/Card";

function MyCard() {
  return (
    <Card>
      {/* Image avec badges superposés */}
      <CardImage src="/path/to/image.jpg" alt="Description" />
      <CardBadges>
        <CardBadge variant="primary">VTT</CardBadge>
        <CardBadge>Trek</CardBadge>
      </CardBadges>

      {/* En-tête */}
      <CardHeader>
        <CardTitle>Mon Titre</CardTitle>
        <CardInfoGroup>
          <CardInfo icon="⚖️">7.8 kg</CardInfo>
          <CardInfo icon="⚙️">Carbon wheels</CardInfo>
        </CardInfoGroup>
      </CardHeader>

      {/* Contenu */}
      <CardContent>
        <CardDescription>
          Une description détaillée du produit...
        </CardDescription>
      </CardContent>

      {/* Footer */}
      <CardFooter>
        <span>Informations supplémentaires</span>
        <button>Détails →</button>
      </CardFooter>
    </Card>
  );
}
```

## 🎨 Variants de Badge

Le composant `CardBadge` supporte plusieurs variants :

- `primary` : Bleu (par défaut)
- `secondary` : Gris
- `success` : Vert
- `warning` : Orange
- `info` : Rose

```tsx
<CardBadge variant="success">VTT</CardBadge>
<CardBadge variant="warning">Promo</CardBadge>
```

## 🚴 Exemple avec CardBikes

```tsx
import { CardBikes } from "@/features/components/Card/CardBikes";

function BikesList() {
  const bike = {
    id: "1",
    name: "Domane SLR 9",
    brand: "Trek",
    type: "Road",
    image: "/images/domane-slr-9.jpg",
    weight: "7.8 kg",
    wheelType: "Carbon wheels",
    color: "Red",
    description: "The Domane SLR 9 is Trek's flagship endurance road bike...",
    onDetailsClick: (id) => console.log(`Details: ${id}`),
  };

  return <CardBikes {...bike} />;
}
```

## 🎨 Personnalisation

### Avec className personnalisée

```tsx
<Card className="ma-classe-custom">
  {/* contenu */}
</Card>
```

### Styles personnalisés dans votre module SCSS

```scss
.maCartePersonnalisee {
  max-width: 500px;
  border: 2px solid blue;
  
  // Cibler les sous-composants
  :global(.cardTitle) {
    color: red;
  }
}
```

Puis utiliser :

```tsx
import styles from "./MonComposant.module.scss";

<Card className={styles.maCartePersonnalisee}>
  {/* contenu */}
</Card>
```

## 🎨 Variables SCSS personnalisables

Vous pouvez surcharger les styles en créant vos propres variables :

```scss
// Dans votre fichier de variables globales
$card-border-radius: 16px;
$card-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
$card-hover-transform: translateY(-4px);
```

## 📱 Responsive

Le composant est entièrement responsive avec des breakpoints optimisés :

- Desktop : Cartes standard
- Mobile (< 640px) : Layout adapté, boutons pleine largeur

## ✨ Fonctionnalités

- ✅ TypeScript natif avec typage complet
- ✅ Modules SCSS pour éviter les conflits de noms
- ✅ Animations fluides (hover, focus, active)
- ✅ Responsive design
- ✅ Accessibilité (ARIA labels, focus states)
- ✅ Composants modulaires et réutilisables
- ✅ Personnalisation facile via className
- ✅ Support des refs React

## 🔧 Dépendances

- React 18+
- TypeScript
- SCSS/Sass

## 📝 Notes

- Les images utilisent `object-fit: cover` pour un rendu optimal
- Les badges sont positionnés en absolu au-dessus de l'image
- La description est limitée à 3 lignes avec ellipsis
- Le hover applique une élévation et un zoom sur l'image
