import { BikeCard } from "@/features/bikes/BikeCard";
import type { Bike } from "@/types/Bikes";

import styles from "./BikesGrid.module.scss";

interface BikesGridProps {
  bikes: Bike[];
}

export function BikesGrid({ bikes }: BikesGridProps) {
  return (
    <div className={styles.demoContainer}>
      <div className={styles.grid}>
        {bikes.map((bike: Bike) => (
          <BikeCard key={bike.id} bike={bike} />
        ))}
      </div>
    </div>
  );
}
