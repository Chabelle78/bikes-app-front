import { createSlice } from "@reduxjs/toolkit";

import type { FrameMaterial } from "../../types/Bikes";
import { fetchBikes } from "../bikes/bikesSlice";

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
      // get unique frame materials
      const uniqueMaterials = Array.from(
        new Set(
          action.payload
            .map((bike) => bike.frame_material)
            .filter(
              (material): material is FrameMaterial => material !== undefined,
            ),
        ),
      );
      state.frameMaterials = uniqueMaterials.sort();
    });
  },
});

export default frameMaterialsSlice.reducer;
