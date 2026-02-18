import type { RootState } from "@/app/store";


// Sélecteurs
export const selectAllBrands = (state: RootState) => state.brands.brands;
export const selectFilteredBrands = (state: RootState) => state.brands.filteredBrands;
export const selectBrandFilters = (state: RootState) => state.brands.filters;
export const selectBrandsLoading = (state: RootState) => state.brands.loading;
export const selectBrandsError = (state: RootState) => state.brands.error;
export const selectActiveFiltersCount = (state: RootState) => {
  return Object.keys(state.brands.filters).length;
};