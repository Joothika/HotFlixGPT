import { useEffect } from "react";
import { TMDB_API_KEY, TMDB_URL } from "../utils/constants";
import { onShowPopularActors } from "../utils/ExportComponents";
import { useDispatch } from "react-redux";

export const useFetchActors = (endpoint) => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchActorsByCategory() {
      try {
        const actors = await fetch(
          `${TMDB_URL}${endpoint}?api_key=${TMDB_API_KEY}`,
        );
        const actorsData = await actors.json();
        const { results } = actorsData;

        if (endpoint === "/person/popular")
          return dispatch(onShowPopularActors(results));
      } catch (err) {
        console.log(err, "actors category error");
      }
    }
    fetchActorsByCategory();
  }, [endpoint]);
};
