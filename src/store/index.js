// import { configureStore } from "@reduxjs/toolkit";
// import pokemon from "./pokemonSlice";
// import myteam from "./myTeamSlice";
// export const store = configureStore({
//   reducer: {
//     pokemon,
//     myteam,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// });

// store.js
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Use local storage

import pokemonReducer from "./pokemonSlice";
import myteamReducer from "./myTeamSlice"; // Import your myteam reducer
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
  // Specify the slices to persist
};
const rootReducer = combineReducers({
  pokemon: pokemonReducer,
  myteam: myteamReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export default store;
