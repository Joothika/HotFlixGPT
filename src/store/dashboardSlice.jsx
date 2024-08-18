import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    hoverMenu: false,
    trendAll: [],
    trendingMovies: [],
    trendingShows: [],
    trendingMoviesTrailer: [],
    trendingShowsTrailer: [],
    trendingAllTrailer: [],
    genreMovieList: [],
    genreTvList: [],
    genreMovieCategories: [],
    genreTvCategories: [],
  },
  reducers: {
    onhoverMenu(state, actions) {
      state.hoverMenu = actions.payload;
    },
    onTrendingAll(state, actions) {
      state.trendAll = actions.payload;
    },
    onShowTrendingMovies(state, actions) {
      state.trendingMovies = actions.payload;
    },
    onShowTrendingShows(state, actions) {
      state.trendingShows = actions.payload;
    },
    onShowTrendingMoviesTrailer(state, actions) {
      state.trendingMoviesTrailer = actions.payload;
    },
    onShowTrendingShowsTrailer(state, actions) {
      state.trendingShowsTrailer = actions.payload;
    },
    onShowTrendingAllTrailer(state, actions) {
      state.trendingAllTrailer = actions.payload;
    },
    onGetGenreMovieList(state, actions) {
      state.genreMovieList = actions.payload;
    },
    onGetGenreTvList(state, actions) {
      state.genreTvList = actions.payload;
    },
    onShowGenreMovies(state, actions) {
      state.genreMovieCategories = actions.payload;
    },
    onShowGenreTv(state, actions) {
      state.genreTvCategories = actions.payload;
    },
  },
});

export const {
  onhoverMenu,
  onTrendingAll,
  onShowTrendingMoviesTrailer,
  onShowTrendingShowsTrailer,
  onShowTrendingAllTrailer,
  onShowTrendingMovies,
  onShowTrendingShows,
  onGetGenreMovieList,
  onGetGenreTvList,
  onShowGenreMovies,
  onShowGenreTv,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
