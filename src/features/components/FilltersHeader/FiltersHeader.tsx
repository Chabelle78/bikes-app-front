import FilterTag from "../FilterTag/FilterTag";

import { getDisplayValue } from "@/utils/getDisplayValue";

import styles from "./FiltersHeader.module.scss";
import useFilterHeader from "./useFilterHeader";

export default function FiltersHeader() {
  const {
    filters,
    activeFiltersCount,
    handleRemoveFilter,
    handleClearAll,
    filterLabels,
  } = useFilterHeader();

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
              // Handle both single and multiple values for filters
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
