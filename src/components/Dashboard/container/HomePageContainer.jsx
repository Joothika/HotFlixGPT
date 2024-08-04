import React from "react";
import {
  ComingSoonContainer,
  GenreMovieContainer,
  GenreTvContainer,
  MobileHomeLastContainer,
  PopularActorContainer,
  TopRatedContainer,
  TrendingAllContainer,
  useFetchActors,
  useFetchTrending,
} from "../../../utils/ExportComponents";
import * as styles from "./style.module.css";
import { PopularGenreContainer } from "./PopularGenreContainer";

const HomePageContainer = () => {
  useFetchActors("/person/popular");
  useFetchActors("/person/latest");

  return (
    <div className={`${styles} mb-24`}>
      <TrendingAllContainer />
      <ComingSoonContainer />
      <TopRatedContainer />
      <PopularGenreContainer />
      <GenreMovieContainer />
      <PopularActorContainer />
      <GenreTvContainer />
      <MobileHomeLastContainer />
    </div>
  );
};

export { HomePageContainer };
