import { createSlice } from "@reduxjs/toolkit";

import { fetchBikes } from "../bikes/bikesSlice";
import type { RidingType } from "@/types/Bikes";

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
      // Get unique riding types
      const uniqueRidingTypes = Array.from(
        new Set(action.payload.map((bike) => bike.riding_type)),
      );
      state.ridingTypes = uniqueRidingTypes.sort();
    });
  },
});

export default ridingTypesSlice.reducer;
