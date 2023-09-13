import { configureStore } from "@reduxjs/toolkit";
import pokemon from "./pokemonSlice";
import myteam from "./myTeamSlice";
export const store = configureStore({
  reducer: {
    pokemon,
    myteam,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
