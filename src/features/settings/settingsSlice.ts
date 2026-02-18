import { createSlice } from "@reduxjs/toolkit";


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

export default settingsSlice.reducer;
