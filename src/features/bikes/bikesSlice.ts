import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import type { Bike } from '../../types/Bikes';
import { getBikes } from '../../services/api/bikes';

import { applyFiltersBikes } from '@/helpers/applyFilters';

export interface BikeFilters {
  brand?: string[];
  riding_type?: string[];
  frame_material?: string[];
  color?: string[];
  search_term?: string;
  weight_min?: number;
  weight_max?: number;
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
      
      // Si on supprime weight_min, on supprime aussi weight_max et vice versa
      if (action.payload === 'weight_min' || action.payload === 'weight_max') {
        delete state.filters.weight_min;
        delete state.filters.weight_max;
      }
      
      state.filteredBikes = applyFiltersBikes(state.bikes, state.filters);
    },
    removeFilterValue: (state, action: PayloadAction<{ key: keyof BikeFilters; value: string }>) => {
      const { key, value } = action.payload;
      const currentFilter = state.filters[key];
      
      if (Array.isArray(currentFilter)) {
        const updatedValues = currentFilter.filter(v => v !== value);
        if (updatedValues.length > 0) {
          state.filters = { ...state.filters, [key]: updatedValues };
        } else {
          delete state.filters[key];
        }
      } else {
        delete state.filters[key];
      }
      
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
export const { setFilters, updateFilter, clearFilters, removeFilter, removeFilterValue } = bikesSlice.actions;

// Export du reducer
export default bikesSlice.reducer;
