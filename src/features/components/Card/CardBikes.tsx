import {
  Card,
  CardHeader,
  CardImage,
  CardBadge,
  CardBadges,
  CardTitle,
  CardDescription,
  CardInfo,
  CardInfoGroup,
  CardContent,
  CardFooter,
  CardFeature,
} from "@/ui-lib/Card";
import styles from "./CardBikes.module.scss";
import type { Bike } from "@/types/Bikes";
import { getBadgeVariant } from "@/utils/getBadgeVariant";

interface BikeCardProps {
  bike: Bike;
  onDetailsClick?: (id: string) => void;
}

export function CardBikes({ bike, onDetailsClick }: BikeCardProps) {
  return (
    <Card className={styles.bikeCard}>
      {/* Image avec badges superposés */}
      <CardImage src={bike.image_url ?? './src/assets/no-image.png'} alt={bike.name} />
      <CardBadges>
        <CardBadge type="ride" variant={getBadgeVariant(bike.riding_type)}>
          {bike.riding_type}
        </CardBadge>
        <CardBadge type="brand" variant="standard">
          {bike.brand.name}
        </CardBadge>
        {bike.wheel_type && (
          <CardBadge type="wheel" variant="road">
            {bike.wheel_type}
          </CardBadge>
        )}
      </CardBadges>

      {/* Header avec titre et infos */}
      <CardHeader>
        <CardTitle>{bike.name}</CardTitle>
        <CardInfoGroup>
          <CardInfo icon="⚖️">{bike.weight}</CardInfo>
          <CardInfo icon="⚙️">{bike.wheel_type}</CardInfo>
        </CardInfoGroup>
      </CardHeader>

      {/* Contenu avec description */}
      <CardContent>
        <CardDescription>{bike.description}</CardDescription>
      </CardContent>

      {/* Footer avec couleur, type de roues et bouton */}
      <CardFooter>
        <div className={styles.features}>
          {bike.color && <CardFeature label={bike.color} />}
          {bike.wheel_type && <CardFeature label={bike.wheel_type} />}
        </div>
        <button
          className={styles.detailsButton}
          onClick={() => onDetailsClick?.(bike.id)}
          aria-label={`View details for ${name}`}
        >
          <span className={styles.detailsIcon}>ⓘ</span>
          Details
          <span className={styles.detailsArrow}>→</span>
        </button>
      </CardFooter>
    </Card>
  );
}
