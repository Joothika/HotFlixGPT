import { useEffect } from "react";
import { TMDB_API_KEY, TMDB_URL } from "../utils/constants";
import {
  onDisplayActorContent,
  onDisplayKeywords,
  onDisplayKnownNames,
  onDisplayPoster,
  onDisplayRecommendations,
  onShowPopularActors,
} from "../utils/ExportComponents";
import { useDispatch } from "react-redux";
const page = 1;

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

export const useFetchActorsShow = (endpoint, id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchActorsShow() {
      try {
        const actors = await fetch(
          `${TMDB_URL}${endpoint}${id}?append_to_response=changes,images,latest,combined_credits,movie_credits,tv_credits.tagged_images,translations&api_key=${TMDB_API_KEY}&page=${page}`,
        );
        const actorsData = await actors.json();
        const { images, translations, also_known_as, combined_credits } =
          actorsData;
        const {
          name,
          birthday,
          known_for_department,
          biography,
          imdb_id,
          profile_path,
          place_of_birth,
          homepage,
        } = actorsData;
        const actorContent = {
          imdb_id,
          name,
          birthday,
          known_for_department,
          biography,
          profile_path,
          place_of_birth,
          homepage,
        };
        console.log(actorsData);
        if (endpoint === "/person") {
          dispatch(onDisplayPoster(images?.profiles));
          dispatch(onDisplayActorContent(actorContent));
          dispatch(onDisplayKeywords(translations.translations));
          dispatch(onDisplayKnownNames(also_known_as));
          dispatch(onDisplayRecommendations(combined_credits?.cast));
        }
      } catch (err) {
        console.log(err, "actors show error");
      }
    }
    fetchActorsShow();
  }, [endpoint, id]);
};
