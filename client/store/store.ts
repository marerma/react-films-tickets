import cartSlice from "./reducer/CartSlice";
import filtersSlice from "./reducer/FiltersSlice";
import { configureStore } from "@reduxjs/toolkit";
import { filmsApi } from "./reducer/FilmsApiSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    filter: filtersSlice,
    [filmsApi.reducerPath]: filmsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filmsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
