import { useState, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { updateFilter } from "@/features/bikes/bikesSlice";

import { selectFilters } from "@/features/bikes/bikes.selector";

import styles from "./SearchBar.module.scss";
interface SearchBarProps {
  disabled?: boolean;
}

export default function SearchBar({ disabled = false }: SearchBarProps) {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectFilters);
  const [searchValue, setSearchValue] = useState(filters.search_term || "");

  useEffect(() => {
    if (disabled) return;
    
    const timer = setTimeout(() => {
      if (searchValue) {
        dispatch(updateFilter({ search_term: searchValue }));
      } else {
        const { ...rest } = filters;
        dispatch(updateFilter(rest));
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchValue, dispatch, disabled]);

  return (
    <div className={`${styles.searchContainer} ${disabled ? styles.disabled : ''}`}>
      <div className={styles.searchWrapper}>
        <svg
          className={styles.searchIcon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          type="text"
          placeholder="Rechercher un vélo par nom..."
          className={styles.searchInput}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          disabled={disabled}
        />
        {searchValue && (
          <button
            className={styles.clearButton}
            onClick={() => setSearchValue("")}
            aria-label="Effacer la recherche"
            disabled={disabled}
          >
            ×
          </button>
        )}
      </div>
    </div>
  );
}
