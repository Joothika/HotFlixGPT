import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  onDisplayCast,
  onDisplayCrew,
  onDisplayGenres,
  onDisplayKeywords,
  onDisplayPoster,
  onDisplayProducionCompanies,
  onDisplayRecommendations,
  onDisplayReviews,
  onDisplaySeasons,
  onDisplayTrailer,
  onDisplayTrailerOrPosterMovieContent,
  onDisplayTrailerOrPosterTvContent,
  onShowAiringTodayShows,
  onShowNowPlayingMovies,
  onShowOnTheAirShows,
  onShowPopularMovies,
  onShowPopularShows,
  onShowTopRatedMovies,
  onShowTopRatedShows,
  onShowUpcomingMovies,
} from "../utils/ExportComponents";
import { TMDB_API_KEY, TMDB_URL } from "../utils/constants";

const page = 1;

export const useFetchMoviesOrTvDashboardShow = (endpoint) => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchMoviesCategory() {
      try {
        const res = await fetch(
          `${TMDB_URL}${endpoint}?api_key=${TMDB_API_KEY}`,
        );
        const data = await res.json();
        const { results } = data;
        /**** Dispatching Tv Shows Data  *****/
        if (endpoint === "/tv/top_rated") {
          return dispatch(onShowTopRatedShows(results));
        }
        if (endpoint === "/tv/airing_today") {
          return dispatch(onShowAiringTodayShows(results));
        }
        if (endpoint === "/tv/on_the_air") {
          return dispatch(onShowOnTheAirShows(results));
        }
        if (endpoint === "/tv/popular") {
          return dispatch(onShowPopularShows(results));
        }

        /**** Dispatching Movies Data  *****/
        if (endpoint === "/movie/now_playing") {
          return dispatch(onShowNowPlayingMovies(results));
        }
        if (endpoint === "/movie/popular") {
          return dispatch(onShowPopularMovies(results));
        }
        if (endpoint === "/movie/top_rated") {
          return dispatch(onShowTopRatedMovies(results));
        }
        if (endpoint === "/movie/upcoming") {
          return dispatch(onShowUpcomingMovies(results));
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchMoviesCategory();
  }, [endpoint]);
};

export const useFetchMovieOrTvInfo = (endpoint, id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchMovieorTvDetails() {
      try {
        const info = await fetch(
          `${TMDB_URL}${endpoint}${id}?append_to_response=videos,keywords,credits,recommendations,lists,images,reviews,similar&api_key=${TMDB_API_KEY}&page=${page}`,
        );
        const infoData = await info.json();
        console.log(infoData);
        let detailid = infoData.id;
        const {
          videos,
          images,
          keywords,
          genres,
          credits,
          seasons,
          production_companies,
          recommendations,
          reviews,
        } = infoData;
        const {
          poster_path,
          original_title,
          original_name,
          last_air_date,
          number_of_episodes,
          number_of_seasons,
          episode_run_time,
          release_date,
          original_language,
          runtime,
          vote_average,
          overview,
          tagline,
          homepage,
        } = infoData; // content for poster or trailer.....
        const movieContent = {
          id: detailid,
          poster_path,
          original_title,
          release_date,
          original_language,
          runtime,
          vote_average,
          overview,
          tagline,
          homepage,
        };
        const tvContent = {
          id: detailid,
          poster_path,
          original_name,
          last_air_date,
          episode_run_time,
          original_language,
          number_of_episodes,
          number_of_seasons,
          overview,
          vote_average,
          homepage,
          tagline,
        };
        console.log(infoData);
        if (endpoint === "/movie") {
          dispatch(onDisplayTrailer(videos?.results));
          dispatch(onDisplayPoster(images?.posters));
          dispatch(onDisplayTrailerOrPosterMovieContent(movieContent));
          dispatch(onDisplayKeywords(keywords.keywords));
          dispatch(onDisplayGenres(genres));
          dispatch(onDisplayCast(credits.cast));
          dispatch(onDisplayCrew(credits.crew));
          dispatch(onDisplayRecommendations(recommendations?.results));
          dispatch(onDisplayProducionCompanies(production_companies));
          dispatch(onDisplayReviews(reviews.results));
        }
        if (endpoint === "/tv") {
          dispatch(onDisplayTrailer(videos?.results));
          dispatch(onDisplayPoster(images?.posters));
          dispatch(onDisplayTrailerOrPosterTvContent(tvContent));
          dispatch(onDisplayKeywords(keywords.results));
          dispatch(onDisplayGenres(genres));
          dispatch(onDisplayCast(credits.cast));
          dispatch(onDisplayCrew(credits.crew));
          dispatch(onDisplaySeasons(seasons));
          dispatch(onDisplayRecommendations(recommendations?.results));
          dispatch(onDisplayProducionCompanies(production_companies));
          dispatch(onDisplayReviews(reviews.results));
        }
      } catch (err) {
        console.log(err, "info err");
      }
    }
    fetchMovieorTvDetails();
  }, [endpoint, id]);
};
