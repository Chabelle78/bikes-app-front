import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { 
  selectFilters, 
  selectActiveFiltersCount,
  removeFilter,
  clearFilters
} from '@/features/bikesSlice';
import styles from './FiltersHeader.module.scss';

// Mapping des valeurs techniques vers des labels lisibles
const RIDING_TYPE_LABELS: Record<string, string> = {
  'Road': 'Route',
  'VTT': 'VTT',
  'Mountain': 'Mountain',
  'Gravel': 'Gravel',
  'Urban': 'Ville',
  'Electric': 'Électrique',
  'Hybrid': 'Hybride',
  'Triathlon': 'Triathlon',
};

const MATERIAL_LABELS: Record<string, string> = {
  'Carbon': 'Carbone',
  'Aluminum': 'Aluminium',
  'Steel': 'Acier',
  'Titanium': 'Titane',
  'Carbon Fiber': 'Fibre de carbone',
};

export default function FiltersHeader() {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectFilters);
  const activeFiltersCount = useAppSelector(selectActiveFiltersCount);

  const handleRemoveFilter = (key: string) => {
    dispatch(removeFilter(key as keyof typeof filters));
  };

  const handleClearAll = () => {
    dispatch(clearFilters());
  };

  const filterLabels: Record<string, string> = {
    brand: 'Marque',
    riding_type: 'Type',
    frame_material: 'Matériau',
    colors: 'Couleur',
    q: 'Recherche',
  };

  // Fonction pour obtenir la valeur affichable
  const getDisplayValue = (key: string, value: string): string => {
    if (key === 'riding_type') {
      return RIDING_TYPE_LABELS[value] || value;
    }
    if (key === 'frame_material') {
      return MATERIAL_LABELS[value] || value;
    }
    return value;
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
                <div key={`${key}-${index}`} className={styles.filterTag}>
                  <span className={styles.filterLabel}>
                    {filterLabels[key] || key}:
                  </span>
                  <span className={styles.filterValue}>
                    {getDisplayValue(key, val)}
                  </span>
                  <button
                    className={styles.removeButton}
                    onClick={() => handleRemoveFilter(key)}
                    aria-label={`Supprimer le filtre ${filterLabels[key]}`}
                  >
                    ×
                  </button>
                </div>
              ));
            })}
          </div>
          <button
            className={styles.clearAllButton}
            onClick={handleClearAll}
          >
            Effacer tout
          </button>
        </div>
      )}
    </div>
  );
}