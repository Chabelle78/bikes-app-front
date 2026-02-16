import { configureStore } from "@reduxjs/toolkit";

import bikesReducer from "../features/bikesSlice";
import brandsReducer from "../features/brandsSlice";
import ridingTypesReducer from "../features/ridingTypesSlice";
import frameMaterialsReducer from "../features/frameMaterialSlice";
import colorsReducer from "../features/colorSlice";

export const store = configureStore({
  reducer: {
    bikes: bikesReducer,
    brands: brandsReducer,
    ridingTypes: ridingTypesReducer,
    frameMaterials: frameMaterialsReducer,
    colors: colorsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
