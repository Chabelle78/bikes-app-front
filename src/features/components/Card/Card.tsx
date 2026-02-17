import type { Bike } from "@/types/Bikes";

import { Description, HeaderBadges, Footer } from "@/ui-lib";

import styles from "./Card.module.scss";

interface BikeCardProps {
  item: Bike;
  onClick?: (id: string) => void;
}

export function Card({ item, onClick }: BikeCardProps) {
  return (
    <div className={styles.bikeCard}>
      <HeaderBadges
        imageSrc={item.image_url}
        type={item.riding_type}
        brand={item.brand}
      />
      <Description
        title={item.name}
        description={item.description}
        weight={item.weight}
        wheel={item.wheel_type}
      />
      <Footer
        color={item.color}
        wheel={item.wheel_type}
        onClick={() => onClick?.(item.id)}
      />
    </div>
  );
}
