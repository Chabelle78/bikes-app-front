import { configureStore } from "@reduxjs/toolkit";

import bikesReducer from "../features/bikes/bikesSlice";
import brandsReducer from "../features/brands/brandsSlice";
import ridingTypesReducer from "../features/ridingTypes/ridingTypesSlice";
import frameMaterialsReducer from "../features/frames/frameMaterialsSlice";
import colorsReducer from "../features/colors/colorsSlice";
import settingsReducer from "../features/settings/settingsSlice";

export const store = configureStore({
  reducer: {
    bikes: bikesReducer,
    brands: brandsReducer,
    colors: colorsReducer,
    frameMaterials: frameMaterialsReducer,
    ridingTypes: ridingTypesReducer,
    settings: settingsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
