import React from "react";
import {
  AiringTodayContainer,
  OnTheAirContainer,
  PopularTvContainer,
  TopRatedTvContainer,
  TrendingTvContainer,
} from "../../../utils/ExportComponents";

const TvPageContainer = () => {
  return (
    <>
      <AiringTodayContainer />
      <OnTheAirContainer />
      <PopularTvContainer />
      <TopRatedTvContainer />
      <TrendingTvContainer />
    </>
  );
};

export default TvPageContainer;
