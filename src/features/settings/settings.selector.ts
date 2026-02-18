import type { RootState } from "@/app/store";

export const selectAreFiltersDisabled = (state: RootState) =>
  state.settings.areFiltersDisabled;
