import SearchBar from "@/features/components/SearchBar/SearchBar";
import Filters from "@/features/components/Filters/Filters";
import { useAppDispatch } from "@/app/hooks";
import { clearFilters } from "@/features/bikesSlice";

import styles from './FiltersBar.module.scss';

export default function FiltersBar() {
    const dispatch = useAppDispatch();

    const handleReset = () => {
        dispatch(clearFilters());
    };

    return (
        <div className={styles.filtersContainer}>
            <div className={styles.header}>
                <h2 className={styles.title}>Filtres</h2>
                <button className={styles.resetButton} onClick={handleReset}>Réinitialiser</button>
            </div>
            
            <div className={styles.filtersContent}>
                <SearchBar />   
                <Filters />
            </div>
        </div>
    )
}