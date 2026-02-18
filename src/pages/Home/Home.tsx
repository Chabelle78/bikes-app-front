
import useHome from "./useHome";

import type { Bike } from "@/types/Bikes";
import { NotFound } from "@/ui-lib";
import { BikeCard } from "@/features/bikes/BikeCard";
import FiltersHeader from "@/features/components/FilltersHeader/FiltersHeader";

import styles from "./Home.module.scss";

export default function Home() {
  const { bikes, loading, error, handleDetailsClick, handleResetFilters } = useHome();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <FiltersHeader />
      </div>
      {loading && <p>Chargement...</p>}
      {error && <p style={{ color: "red" }}>Erreur: {error}</p>}
      <div className={styles.content}>
        <div className={styles.demoContainer}>
          {bikes.length === 0 && !loading && (
            <NotFound
              message="Aucun vélo ne correspond à vos critères. Essayez de modifier vos filtres ou de les réinitialiser avec le bouton ci-dessous."
              actionButton={{
                label: "Réinitialiser les filtres",
                onClick: handleResetFilters,
              }}
            />
          )}
          {bikes.length > 0 && (
            <div className={styles.grid}>
              {bikes.map((bike: Bike) => (
                <BikeCard
                  key={bike.id}
                  bike={bike}
                  onClick={handleDetailsClick}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
