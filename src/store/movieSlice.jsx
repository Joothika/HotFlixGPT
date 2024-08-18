import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    upcomingMovies: [],
    popularMovies: [],
    topratedMovies: [],
    nowplayingMovies: [],
    nowplayingTrailer: [],
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
    onShowNowPlayingMovies(state, actions) {
      state.nowplayingMovies = actions.payload;
    },
    onShowNowPlayingTrailer(state, actions) {
      state.nowplayingTrailer = actions.payload;
    },
  },
});

export const {
  onShowUpcomingMovies,
  onShowPopularMovies,
  onShowTopRatedMovies,
  onShowNowPlayingMovies,
  onShowNowPlayingTrailer,
} = movieSlice.actions;

export default movieSlice.reducer;
