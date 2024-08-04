import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    upcomingMovies: [],
    popularMovies: [],
    topratedMovies: [],
    trendingMovies: [],
  },
  reducers: {
    onShowUpcomingMovies(state, actions) {
      state.upcomingMovies = actions.payload;
    },
    onShowPopularMovies(state, actions) {
      state.popularMovies = actions.payload;
    },
    onShowTopRatedMovies(state, actions) {
      state.topratedMovies = actions.payload;
    },
    onShowTrendingMovies(state, actions) {
      state.trendingMovies = actions.payload;
    },
  },
});

export const {
  onShowUpcomingMovies,
  onShowPopularMovies,
  onShowTopRatedMovies,
  onShowTrendingMovies,
} = movieSlice.actions;

export default movieSlice.reducer;
