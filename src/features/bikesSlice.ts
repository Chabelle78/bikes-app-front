import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { Bike } from '../types/Bikes';
import { getBikes } from '../services/api/bikes';
import type { RootState } from '../app/store';
import { applyFiltersBikes } from '@/helpers/applyFilters';

export interface BikeFilters {
  brand?: string[];
  riding_type?: string[];
  frame_material?: string[];
  color?: string[];
  q?: string;
}

interface BikesState {
  bikes: Bike[];
  filteredBikes: Bike[];
  filters: BikeFilters;
  loading: boolean;
  error: string;
}

// État initial
const initialState: BikesState = {
  bikes: [],
  filteredBikes: [],
  filters: {},
  loading: false,
  error: '',
};

// Thunk asynchrone pour charger les bikes
export const fetchBikes = createAsyncThunk(
  'bikes/fetchBikes',
  async () => {
    const data = await getBikes();
    return data;
  }
);


// Création du slice
const bikesSlice = createSlice({
  name: 'bikes',
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<BikeFilters>) => {
      state.filters = action.payload;
      state.filteredBikes = applyFiltersBikes(state.bikes, state.filters);
    },
    updateFilter: (state, action: PayloadAction<Partial<BikeFilters>>) => {
      state.filters = { ...state.filters, ...action.payload };
      state.filteredBikes = applyFiltersBikes(state.bikes, state.filters);
    },
    clearFilters: (state) => {
      state.filters = {};
      state.filteredBikes = state.bikes;
    },
    removeFilter: (state, action: PayloadAction<keyof BikeFilters>) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [action.payload]: _, ...rest } = state.filters;
      state.filters = rest;
      state.filteredBikes = applyFiltersBikes(state.bikes, state.filters);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBikes.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchBikes.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.bikes = action.payload;
        state.filteredBikes = applyFiltersBikes(action.payload, state.filters);
      })
      .addCase(fetchBikes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Une erreur est survenue';
      });
  },
});

// Export des actions
export const { setFilters, updateFilter, clearFilters, removeFilter } = bikesSlice.actions;

// Sélecteurs
export const selectAllBikes = (state: RootState) => state.bikes.bikes;
export const selectFilteredBikes = (state: RootState) => state.bikes.filteredBikes;
export const selectFilters = (state: RootState) => state.bikes.filters;
export const selectBikesLoading = (state: RootState) => state.bikes.loading;
export const selectBikesError = (state: RootState) => state.bikes.error;
export const selectActiveFiltersCount = (state: RootState) => 
  Object.values(state.bikes.filters).filter(value => 
    Array.isArray(value) ? value.length > 0 : Boolean(value)
  ).length;

// Export du reducer
export default bikesSlice.reducer;
