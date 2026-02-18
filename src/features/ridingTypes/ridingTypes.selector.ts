import type { RootState } from "@/app/store";

export const selectRidingTypes = (state: RootState) =>
  state.ridingTypes.ridingTypes;
