import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  onGetGenreMovieList,
  onGetGenreTvList,
  onShowGenreMovies,
  onShowGenreTv,
  onShowNowPlayingTrailer,
  onTrendingAll,
  onShowTrendingMovies,
  onShowTrendingShows,
} from "../utils/ExportComponents";
import { TMDB_API_KEY, TMDB_URL } from "../utils/constants";

const page = 1;

export const useFetchTrending = (endpoint) => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchTrendingAll() {
      try {
        const trendingAll = await fetch(
          `${TMDB_URL}${endpoint}/day?api_key=${TMDB_API_KEY}`,
        );
        const trendData = await trendingAll.json();
        const { results } = trendData;
        // console.log(results, "trenddata");
        if (endpoint === "/trending/all") {
          return dispatch(onTrendingAll(results));
        }
        if (endpoint === "/trending/movie") {
          return dispatch(onShowTrendingMovies(results));
        }
        if (endpoint === "/trending/tv") {
          return dispatch(onShowTrendingShows(results));
        }
      } catch (err) {
        console.log("Trending All", err);
      }
    }
    fetchTrendingAll();
  }, []);
};

export const usetFetchTrailer = (endpoint) => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchTrailer() {
      try {
        const res = await fetch(
          `${TMDB_URL}${endpoint}?api_key=${TMDB_API_KEY}`,
        );

        const data = await res.json();
        const movie = data.results;

        const movieTrailers = await Promise?.all(
          movie?.map(async (movie) => {
            const trailerData = await fetch(
              `${TMDB_URL}/movie/${movie.id}/videos?api_key=${TMDB_API_KEY}`,
            );
            const data = await trailerData.json();
            // console.log(data, "trailer");
            return data?.results[0];
          }),
        );
        const trailerKeys = movieTrailers;
        if (endpoint === "/movie/now_playing")
          return dispatch(onShowNowPlayingTrailer(trailerKeys));
        if (endpoint === "trending")
          return dispatch(onShowTrendingAllTrailer(trailerKeys));
      } catch (err) {
        console.log(err);
      }
    }
    fetchTrailer();
  }, []);
};

export const useFetchConfiguration = (endpoint) => {
  useEffect(() => {
    async function fetchCountriesOrLanguages() {
      const countries = await fetch(
        `https://api.themoviedb.org/3/configuration/${endpoint}?api_key=871123cff0917e0a5f987f7d414cdf0f`,
      );
      const configureData = await countries.json();
      console.log(configureData);
    }
    fetchCountriesOrLanguages();
  }, []);
};

export const useFetchGenre = (endpoint) => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchGenre() {
      try {
        const trendingAll = await fetch(
          `https://api.themoviedb.org/3/genre/${endpoint}/list?api_key=871123cff0917e0a5f987f7d414cdf0f`,
        );
        const genreData = await trendingAll.json();

        if (endpoint === "movie") {
          return dispatch(onGetGenreMovieList(genreData.genres));
        }
        if (endpoint === "tv") {
          return dispatch(onGetGenreTvList(genreData.genres));
        }
        return genreData;
      } catch (err) {
        console.log("Trending All", err);
      }
    }
    fetchGenre();
  }, []);
};

export const useFetchDiscover = (endpoint, genre) => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchDiscover() {
      try {
        const discoverMovies = await Promise.all(
          genre?.map(async (eachGenre, i) => {
            const genre = await fetch(
              `${TMDB_URL}${endpoint}?with_genres=${eachGenre.id}&api_key=${TMDB_API_KEY}`,
            );
            const data = await genre.json();
            return data;
          }),
        );
        const allGenres = discoverMovies;
        if (endpoint === "/discover/movie") {
          return dispatch(onShowGenreMovies(allGenres));
        }
        if (endpoint === "/discover/tv")
          return dispatch(onShowGenreTv(allGenres));
      } catch (err) {
        console.log(err, "dicover error");
      }
    }
    fetchDiscover();
  }, [genre]);
};
