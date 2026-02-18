import { useAppDispatch, useAppSelector } from "@/app/hooks";
import FilterTag from "../FilterTag/FilterTag";

import { removeFilterValue, clearFilters } from "@/features/bikes/bikesSlice";
import type { BikeFilters } from "@/features/bikes/bikesSlice";
import {
  selectActiveFiltersCount,
  selectFilters,
} from "@/features/bikes/bikes.selector";

import styles from "./FiltersHeader.module.scss";
import { getDisplayValue } from "@/utils/getDisplayValue";

export default function FiltersHeader() {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectFilters);
  const activeFiltersCount = useAppSelector(selectActiveFiltersCount);

  const handleRemoveFilter = (key: string, value: string) => {
    dispatch(
      removeFilterValue({
        key: key as keyof BikeFilters,
        value,
      }),
    );
  };

  const handleClearAll = () => {
    dispatch(clearFilters());
  };

  const filterLabels: Record<string, string> = {
    brand: "Marque",
    riding_type: "Type",
    frame_material: "Matériau",
    color: "Couleur",
    search_term: "Recherche",
  };

  return (
    <div className={styles.containerFiltersHeader}>
      <h2>
        Filtres actifs
        {activeFiltersCount > 0 && (
          <span className={styles.count}>({activeFiltersCount})</span>
        )}
      </h2>

      {activeFiltersCount > 0 && (
        <div className={styles.filtersContainer}>
          <div className={styles.filterTags}>
            {Object.entries(filters).map(([key, value]) => {
              // Gérer les tableaux et les chaînes
              const values = Array.isArray(value) ? value : [value];
              return values.map((val, index) => (
                <FilterTag
                  key={`${key}-${index}`}
                  label={filterLabels[key] || key}
                  value={getDisplayValue(key, val)}
                  onRemove={() => handleRemoveFilter(key, val)}
                />
              ));
            })}
          </div>
          <button className={styles.clearAllButton} onClick={handleClearAll}>
            Effacer tout
          </button>
        </div>
      )}
    </div>
  );
}
