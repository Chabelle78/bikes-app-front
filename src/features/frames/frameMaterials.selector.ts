import type { RootState } from "../../app/store";

export const selectFrameMaterials = (state: RootState) =>
  state.frameMaterials.frameMaterials;