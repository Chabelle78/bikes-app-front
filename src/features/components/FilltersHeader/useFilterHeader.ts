import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { removeFilterValue, clearFilters, updateFilter } from "@/features/bikes/bikesSlice";
import type { BikeFilters } from "@/features/bikes/bikesSlice";
import {
  selectActiveFiltersCount,
  selectFilters,
} from "@/features/bikes/bikes.selector";

export default function useFilterHeader() {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectFilters);
  const activeFiltersCount = useAppSelector(selectActiveFiltersCount);

  const handleRemoveFilter = (key: string, value: string) => {
    // Pour les filtres de poids, on supprime les deux valeurs min et max en même temps
    if (key === 'weight_min' || key === 'weight_max') {
      dispatch(updateFilter({ 
        weight_min: undefined, 
        weight_max: undefined 
      }));
      return;
    }
    
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
    weight_min: "Poids min",
    weight_max: "Poids max",
  };

  return {
    filters,
    activeFiltersCount,
    handleRemoveFilter,
    handleClearAll,
    filterLabels,
  };
}