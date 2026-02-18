import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";
import type { RidingType } from "../types/Bikes";
import { fetchBikes } from "./bikes/bikesSlice";

interface RidingTypesState {
  ridingTypes: RidingType[];
}

const initialState: RidingTypesState = {
  ridingTypes: [],
};

const ridingTypesSlice = createSlice({
  name: "ridingTypes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBikes.fulfilled, (state, action) => {
      // Extraire tous les riding types uniques
      const uniqueRidingTypes = Array.from(
        new Set(action.payload.map((bike) => bike.riding_type)),
      );
      state.ridingTypes = uniqueRidingTypes.sort();
    });
  },
});

export const selectRidingTypes = (state: RootState) =>
  state.ridingTypes.ridingTypes;

export default ridingTypesSlice.reducer;
