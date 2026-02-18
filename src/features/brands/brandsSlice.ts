import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';


import { applyBrandFilters } from '@/helpers/applyFilters';
import type { Brand } from '@/types/Brand';
import { getbrands } from '@/services/api/brands';

export interface BrandFilters {
  name?: string;
  country?: string;
  founded_year?: number;
}

interface BrandsState {
  brands: Brand[];
  filteredBrands: Brand[];
  filters: BrandFilters;
  loading: boolean;
  error: string;
}

// État initial
const initialState: BrandsState = {
  brands: [],
  filteredBrands: [],
  filters: {},
  loading: false,
  error: '',
};

// Thunk asynchrone pour charger les brands
export const fetchBrands = createAsyncThunk(
  'brands/fetchBrands',
  async () => {
    const data = await getbrands();
    return data;
  }
);

// Création du slice
const brandsSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {
    setFilters: (state, action: PayloadAction<BrandFilters>) => {
      state.filters = action.payload;
      state.filteredBrands = applyBrandFilters(state.brands, state.filters);
    },
    updateFilter: (state, action: PayloadAction<Partial<BrandFilters>>) => {
      state.filters = { ...state.filters, ...action.payload };
      state.filteredBrands = applyBrandFilters(state.brands, state.filters);
    },
    clearFilters: (state) => {
      state.filters = {};
      state.filteredBrands = state.brands;
    },
    removeFilter: (state, action: PayloadAction<keyof BrandFilters>) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { [action.payload]: _, ...rest } = state.filters;
      state.filters = rest;
      state.filteredBrands = applyBrandFilters(state.brands, state.filters);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrands.pending, (state) => {        
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.error = '';
        state.brands = action.payload;
        state.filteredBrands = applyBrandFilters(action.payload, state.filters);
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Une erreur est survenue';
      });
  },
});

// Export des actions
export const { setFilters, updateFilter, clearFilters, removeFilter } = brandsSlice.actions;

// Export du reducer
export default brandsSlice.reducer;
