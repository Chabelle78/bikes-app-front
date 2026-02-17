import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "@/app/store";

interface SettingsState {
    areFiltersDisabled: boolean;
}

const initialState: SettingsState = {
  areFiltersDisabled: false,
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    enableFilters: (state) => {
      state.areFiltersDisabled = false;
    },
    disableFilters: (state) => {
      state.areFiltersDisabled = true;
    },
  },
});

export const { 
  enableFilters,
  disableFilters,
} = settingsSlice.actions;

// Selectors
export const selectAreFiltersDisabled = (state: RootState) => state.settings.areFiltersDisabled;

export default settingsSlice.reducer;
