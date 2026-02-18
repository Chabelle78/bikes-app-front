import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";
import { fetchBikes } from "./bikes/bikesSlice";

interface ColorsState {
  colors: string[];
}

const initialState: ColorsState = {
  colors: [],
};

const colorsSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBikes.fulfilled, (state, action) => {
      // Extraire toutes les couleurs uniques (en filtrant les undefined)
      const uniqueColors = Array.from(
        new Set(
          action.payload
            .map((bike) => bike.color)
            .filter((color): color is string => color !== undefined)
        )
      );
      state.colors = uniqueColors.sort();
    });
  },
});

export const selectColors = (state: RootState) => state.colors.colors;

export default colorsSlice.reducer;
