import { createSlice } from "@reduxjs/toolkit";

const TvShowSlice = createSlice({
  name: "TvShow",
  initialState: {
    topRatedShows: [],
    airingTodayShows: [],
    onTheAirShows: [],
    popularShows: [],
    trendingShows: [],
    upcomingShows: [],
  },
  reducers: {
    onShowTopRatedShows(state, actions) {
      state.topRatedShows = actions.payload;
    },
    onShowAiringTodayShows(state, actions) {
      state.airingTodayShows = actions.payload;
    },
    onShowOnTheAirShows(state, actions) {
      state.onTheAirShows = actions.payload;
    },
    onShowPopularShows(state, actions) {
      state.popularShows = actions.payload;
    },
    onShowTrendingShows(state, actions) {
      state.trendingShows = actions.payload;
    },
    onShowUpcomingShows(state, actions) {
      state.upcomingShows = actions.payload;
    },
  },
});

export const {
  onShowTopRatedShows,
  onShowAiringTodayShows,
  onShowOnTheAirShows,
  onShowPopularShows,
  onShowTrendingShows,
  onShowUpcomingShows,
} = TvShowSlice.actions;
export default TvShowSlice.reducer;
