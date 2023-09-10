import { configureStore } from "@reduxjs/toolkit";
import pokemon from "./pokemonSlice";
export const store = configureStore({
  reducer: {
    pokemon,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
