import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    movieSearchResults: [],
    tvSearchResults: [],
    personSearchResults: [],
  },
  reducers: {
    onShowMovieSearchResults(state, actions) {
      state.movieSearchResults = actions.payload;
    },
    onShowTvSearchResults(state, actions) {
      state.tvSearchResults = actions.payload;
    },
    onShowPersonSearchResults(state, actions) {
      state.personSearchResults = actions.payload;
    },
  },
});

export const {
  onShowMovieSearchResults,
  onShowTvSearchResults,
  onShowPersonSearchResults,
} = searchSlice.actions;

export default searchSlice.reducer;
