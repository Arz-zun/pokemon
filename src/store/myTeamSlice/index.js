// pokemonSlice.js
// ...

import { createAction, createSlice } from "@reduxjs/toolkit";

export const addToTeam = createAction("myteam/addToTeam");
export const removeFromTeam = createAction("myteam/removeFromTeam");

const pokemonSlice = createSlice({
  name: "myteam",
  initialState: {
    myTeamList: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    // ...

    builder
      .addCase(addToTeam, (state, action) => {
        const pokemonToAdd = action.payload;
        state.myTeamList.push(pokemonToAdd);
      })
      .addCase(removeFromTeam, (state, action) => {
        const pokemonToRemove = action.payload;
        state.myTeamList = state.myTeamList.filter(
          (poke) => poke.id !== pokemonToRemove.id
        );
      });
  },
});
export default pokemonSlice.reducer;
