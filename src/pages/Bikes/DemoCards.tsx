import { CardBikes } from "@/features/components/Card/CardBikes";
import styles from "./DemoCards.module.scss";
import type { Bike } from "@/types/Bikes";

interface BikesProps {
  bikes: Bike[];
}
export function DemoCards({ bikes }: BikesProps) {
  const handleDetailsClick = (id: string) => {
    console.log(`Voir les détails du vélo ${id}`);
    // Ici vous pouvez ajouter votre logique de navigation
    // Par exemple: navigate(`/bikes/${id}`)
  };

  return (
    <div className={styles.demoContainer}>
      <div className={styles.grid}>
        {bikes.map((bike: Bike) => (
          <CardBikes
            key={bike.id}
            bike={bike}
            onDetailsClick={handleDetailsClick}
          />
        ))}
      </div>
    </div>
  );
}
