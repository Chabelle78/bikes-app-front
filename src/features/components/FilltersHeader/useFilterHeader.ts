import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { removeFilterValue, clearFilters } from "@/features/bikes/bikesSlice";
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

  return {
    filters,
    activeFiltersCount,
    handleRemoveFilter,
    handleClearAll,
    filterLabels,
  };
}