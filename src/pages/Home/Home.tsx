import { Card } from "@/features/components/Card/Card";
import type { Bike } from "@/types/Bikes";

import useHome from "./useHome";

import styles from "./Home.module.scss";
import FiltersHeader from "@/features/components/FilltersHeader/FiltersHeader";

export default function Home() {
  const { bikes, loading, error, handleDetailsClick } = useHome();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <FiltersHeader />
      </div>
      {loading && <p>Chargement...</p>}
      {error && <p style={{ color: "red" }}>Erreur: {error}</p>}
      <div className={styles.content}>
        <div className={styles.demoContainer}>
          <div className={styles.grid}>
            {bikes.map((bike: Bike) => (
              <Card key={bike.id} item={bike} onClick={handleDetailsClick} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
