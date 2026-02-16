import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { updateFilter, selectFilters } from '@/features/bikesSlice';
import styles from './SearchBar.module.scss';

export default function SearchBar() {
    const dispatch = useAppDispatch();
    const filters = useAppSelector(selectFilters);
    const [searchValue, setSearchValue] = useState(filters.q || '');

    // Débounce pour éviter trop de mises à jour
    useEffect(() => {
        const timer = setTimeout(() => {
            if (searchValue) {
                dispatch(updateFilter({ q: searchValue }));
            } else {
                // Si le champ est vide, on retire le filtre de recherche
                const { q, ...rest } = filters;
                dispatch(updateFilter(rest));
            }
        }, 300);

        return () => clearTimeout(timer);
    }, [searchValue, dispatch]);

    return (
        <div className={styles.searchContainer}>
            <div className={styles.searchWrapper}>
                <svg className={styles.searchIcon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                </svg>
                <input 
                    type="text" 
                    placeholder="Rechercher un vélo par nom..." 
                    className={styles.searchInput}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                {searchValue && (
                    <button
                        className={styles.clearButton}
                        onClick={() => setSearchValue('')}
                        aria-label="Effacer la recherche"
                    >
                        ×
                    </button>
                )}
            </div>
        </div>
    )
}