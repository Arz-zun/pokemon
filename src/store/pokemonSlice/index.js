import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fecthPokemon = createAsyncThunk(
  "pokemon/fecthPokemon",
  async (setUrl) => {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");
    setUrl(response.data.results);
    console.log("res", response);
  }
);
export const fecthPokemonList = createAsyncThunk(
  "pokemon/fecthPokemonList",
  async (url) => {
    const response = await axios.get(`${url}`);
    console.log("res", response);
  }
);

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    pokemonList: [],
    loading: true,
  },
  extraReducers: (builder) => {
    //add new project
    builder.addCase(fecthPokemonList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fecthPokemonList.fulfilled, (state, action) => {
      state.loading = false;
      state.pokemonList = action.payload;
    });
    builder.addCase(fecthPokemonList.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default pokemonSlice.reducer;
