import { createSlice } from "@reduxjs/toolkit";

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    hoverMenu: false,
    nowplayingMovies: [],
    nowplayingTrailer: [],
    trendingAll: [],
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
    onShowNowPlayingMovies(state, actions) {
      state.nowplayingMovies = actions.payload;
    },
    onShowNowPlayingTrailer(state, actions) {
      state.nowplayingTrailer = actions.payload;
    },
    onTrendingAll(state, actions) {
      state.trendingAll = actions.payload;
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
  onShowNowPlayingMovies,
  onDispayTrailer,
  onShowNowPlayingTrailer,
  onTrendingAll,
  onShowTrendingAllTrailer,
  onGetGenreMovieList,
  onGetGenreTvList,
  onShowGenreMovies,
  onShowGenreTv,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;
