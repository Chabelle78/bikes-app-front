import { createSlice } from "@reduxjs/toolkit";
import { fetchBikes } from "../bikes/bikesSlice";
import type { RootState } from "@/app/store";

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
