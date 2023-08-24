import { createSlice } from "@reduxjs/toolkit";

const initialPokemanState = {
  pokemansDetails: [],
};

const pokemanSlice = createSlice({
  name: "pokeman",
  initialState: initialPokemanState,
  reducers: {
    setPokemansDetails: (state, action) => {
      return { ...state, pokemansDetails: action.payload };
    },
  },
});

export const pokemanActions = pokemanSlice.actions;

export default pokemanSlice.reducer;
