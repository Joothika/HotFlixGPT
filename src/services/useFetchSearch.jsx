import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TMDB_API_KEY, TMDB_URL } from "../utils/constants";
import {
  onShowMovieSearchResults,
  onShowPersonSearchResults,
  onShowTvSearchResults,
} from "../utils/ExportComponents";

const page = 1;

const useFetchMovieSearch = (query) => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchMovieSearch() {
      try {
        const searchMovie = await fetch(
          `${TMDB_URL}/search/movie?query=${query}&api_key=${TMDB_API_KEY}&page=${page}`,
        );
        const searchMovieRes = await searchMovie.json();
        const { results } = searchMovieRes;
        console.log(results, "movie");
        dispatch(onShowMovieSearchResults(searchMovieRes.results));
      } catch (err) {
        console.log(err);
      }
    }
    fetchMovieSearch();
  }, [query]);
};
const useFetchTvSearch = (query) => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchTvSearch() {
      try {
        const searchTv = await fetch(
          `${TMDB_URL}/search/tv?query=${query}&api_key=${TMDB_API_KEY}&page=${page}`,
        );
        const searchTvRes = await searchTv.json();
        const { results } = searchTvRes;
        dispatch(onShowTvSearchResults(results));
        console.log(results, "tv");
      } catch (err) {
        console.log(err);
      }
    }
    fetchTvSearch();
  }, [query]);
};
const useFetchPersonSearch = (query) => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchPersonSearch() {
      try {
        const searchPerson = await fetch(
          `${TMDB_URL}/search/person?query=${query}&api_key=${TMDB_API_KEY}&page=${page}`,
        );
        const searchPersonRes = await searchPerson.json();
        const { results } = searchPersonRes;
        dispatch(onShowPersonSearchResults(results));
        console.log(results, "person");
        dispatch(onShowPersonSearchResults(results));
      } catch (err) {
        console.log(err);
      }
    }
    fetchPersonSearch();
  }, [query]);
};

export { useFetchMovieSearch, useFetchTvSearch, useFetchPersonSearch };
