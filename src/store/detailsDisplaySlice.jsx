import { createSlice } from "@reduxjs/toolkit";

const detailsDisplaySlice = createSlice({
  name: "details",
  initialState: {
    trailer: [],
    posters: [],
    content: [],
    tvContent: [],
    actorContent: [],
    keywords: [],
    genres: [],
    actordifferentnames: [],
    recommendations: [],
    cast: [],
    crew: [],
    seasons: [],
    companies: [],
    reviews: [],
  },
  reducers: {
    onDisplayTrailer(state, actions) {
      state.trailer = actions.payload;
    },
    onDisplayPoster(state, actions) {
      state.posters = actions.payload;
    },
    onDisplayTrailerOrPosterMovieContent(state, actions) {
      state.content = actions.payload;
    },
    onDisplayTrailerOrPosterTvContent(state, actions) {
      state.tvContent = actions.payload;
    },
    onDisplayActorContent(state, actions) {
      state.actorContent = actions.payload;
    },
    onDisplayKeywords(state, actions) {
      state.keywords = actions.payload;
    },
    onDisplayGenres(state, actions) {
      state.genres = actions.payload;
    },
    onDisplayKnownNames(state, actions) {
      state.actordifferentnames = actions.payload;
    },
    onDisplayRecommendations(state, actions) {
      state.recommendations = actions.payload;
    },
    onDisplayCast(state, actions) {
      state.cast = actions.payload;
    },
    onDisplayCrew(state, actions) {
      state.crew = actions.payload;
    },
    onDisplaySeasons(state, actions) {
      state.seasons = actions.payload;
    },
    onDisplayProducionCompanies(state, actions) {
      state.companies = actions.payload;
    },
    onDisplayReviews(state, actions) {
      state.reviews = actions.payload;
    },
  },
});

export const {
  onDisplayTrailer,
  onDisplayPoster,
  onDisplayTrailerOrPosterMovieContent,
  onDisplayTrailerOrPosterTvContent,
  onDisplayActorContent,
  onDisplayKeywords,
  onDisplayGenres,
  onDisplayKnownNames,
  onDisplayRecommendations,
  onDisplayCast,
  onDisplayCrew,
  onDisplaySeasons,
  onDisplayProducionCompanies,
  onDisplayReviews,
} = detailsDisplaySlice.actions;
export default detailsDisplaySlice.reducer;
