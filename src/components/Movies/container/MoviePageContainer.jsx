import React from "react";
import {
  NowPlayingContainer,
  PopularMovieContainer,
  TopRatedMovieContainer,
  TrendyMovieContainer,
  UpcomingMovieContainer,
} from "../../../utils/ExportComponents";

const MoviePageContainer = () => {
  return (
    <>
      <NowPlayingContainer />
      <TopRatedMovieContainer />
      <PopularMovieContainer />
      <TrendyMovieContainer />
      <UpcomingMovieContainer />
    </>
  );
};

export default MoviePageContainer;
