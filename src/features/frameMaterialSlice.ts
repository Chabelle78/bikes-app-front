import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";
import type { FrameMaterial } from "../types/Bikes";
import { fetchBikes } from "./bikesSlice";

interface FrameMaterialsState {
  frameMaterials: FrameMaterial[];
}

const initialState: FrameMaterialsState = {
  frameMaterials: [],
};

const frameMaterialsSlice = createSlice({
  name: "frameMaterials",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBikes.fulfilled, (state, action) => {
      // Extraire tous les matériaux uniques (en filtrant les undefined)
      const uniqueMaterials = Array.from(
        new Set(
          action.payload
            .map((bike) => bike.frame_material)
            .filter((material): material is FrameMaterial => material !== undefined)
        )
      );
      state.frameMaterials = uniqueMaterials.sort();
    });
  },
});

export const selectFrameMaterials = (state: RootState) =>
  state.frameMaterials.frameMaterials;

export default frameMaterialsSlice.reducer;
