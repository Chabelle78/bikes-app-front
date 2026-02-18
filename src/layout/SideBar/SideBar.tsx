import SearchBar from "@/features/components/SearchBar/SearchBar";
import Filters from "@/features/components/Filters/Filters";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { clearFilters } from "@/features/bikesSlice";
import { selectAreFiltersDisabled } from "@/features/settingsSlice";

import styles from "./SideBar.module.scss";

export default function SidesBar() {
  const dispatch = useAppDispatch();
  const areFiltersDisabled = useAppSelector(selectAreFiltersDisabled);

  const handleReset = () => {
    if (!areFiltersDisabled) {
      dispatch(clearFilters());
    }
  };

  return (
    <div className={styles.filtersContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>Filtres</h2>
        <button
          className={styles.resetButton}
          onClick={handleReset}
          disabled={areFiltersDisabled}
        >
          Réinitialiser
        </button>
      </div>

      <div className={styles.filtersContent}>
        <SearchBar disabled={areFiltersDisabled} />
        <Filters disabled={areFiltersDisabled} />
      </div>
      <div className={styles.versionning}>
        <p>V1.0.0</p>
      </div>
    </div>
  );
}
