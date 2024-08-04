import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  onDisplayPoster,
  onDisplayTrailer,
  onDisplayTrailerOrPosterContent,
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
          `${TMDB_URL}${endpoint}${id}?append_to_response=videos,credits,keywords,recommendations,lists,images,reviews,similar&api_key=${TMDB_API_KEY}`,
        );
        const infoData = await info.json();
        console.log(infoData);
        const { videos } = infoData; // videos...
        const { images } = infoData; // images...
        const {
          poster_path,
          original_title,
          release_date,
          original_language,
          runtime,
          vote_average,
          overview,
        } = infoData; // content for poster or trailer.....
        const content = {
          poster_path,
          original_title,
          release_date,
          original_language,
          runtime,
          vote_average,
          overview,
        };
        console.log(content);
        dispatch(onDisplayTrailer(videos?.results));
        dispatch(onDisplayPoster(images?.posters));
        dispatch(onDisplayTrailerOrPosterContent(content));
      } catch (err) {
        console.log(err, "info err");
      }
    }
    fetchMovieorTvDetails();
  }, [id]);
};
