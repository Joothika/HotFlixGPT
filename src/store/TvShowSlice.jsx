import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const TvShowSlice = createSlice({
  name: "TvShow",
  initialState: {
    topRatedShows: [],
    airingTodayShows: [],
    airingTodayTrailer: [],
    onTheAirShows: [],
    popularShows: [],
    upcomingShows: [],
  },
  reducers: {
    onShowTopRatedShows(state, actions) {
      state.topRatedShows = actions.payload;
    },
    onShowAiringTodayShows(state, actions) {
      state.airingTodayShows = actions.payload;
    },
    onShowAiringTodayTrailer(state, actions) {
      state.airingTodayTrailer = actions.payload;
    },
    onShowOnTheAirShows(state, actions) {
      state.onTheAirShows = actions.payload;
    },
    onShowPopularShows(state, actions) {
      state.popularShows = actions.payload;
    },
    onShowUpcomingShows(state, actions) {
      state.upcomingShows = actions.payload;
    },
  },
});

export const {
  onShowTopRatedShows,
  onShowAiringTodayShows,
  onShowAiringTodayTrailer,
  onShowOnTheAirShows,
  onShowPopularShows,
  onShowUpcomingShows,
} = TvShowSlice.actions;
export default TvShowSlice.reducer;
