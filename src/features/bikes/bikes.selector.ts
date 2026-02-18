import type { RootState } from "../../app/store";

// Sélecteurs
export const selectAllBikes = (state: RootState) => state.bikes.bikes;
export const selectFilteredBikes = (state: RootState) =>
  state.bikes.filteredBikes;
export const selectFilters = (state: RootState) => state.bikes.filters;
export const selectBikesLoading = (state: RootState) => state.bikes.loading;
export const selectBikesError = (state: RootState) => state.bikes.error;
export const selectActiveFiltersCount = (state: RootState) =>
  Object.values(state.bikes.filters).filter((value) =>
    Array.isArray(value) ? value.length > 0 : Boolean(value),
  ).length;
export const selectBikeById = (state: RootState, bikeId: string) =>
  state.bikes.bikes.find((bike) => bike.id === bikeId);
