import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  EachHeaderContainer,
  EachContainer,
  useFetchMoviesOrTvDashboardShow,
} from "../../../utils/ExportComponents";
import { AIRING_TODAY_SHOW_HEADER } from "../../../utils/constants";

const AiringTodayContainer = () => {
  const [showButton, setShowButton] = useState(false);
  const { airingTodayShows } = useSelector((state) => state.TvShowReducer);
  useFetchMoviesOrTvDashboardShow("/tv/airing_today");
  console.log(airingTodayShows);
  return (
    <section
      className={`2xl:mt[-5rem] hover: relative border-white text-white lg:sticky lg:z-10 lg:ml-[7.5rem] lg:mt-[-1rem] xl:sticky xl:z-10 xl:mt-[-5rem] 2xl:sticky 2xl:mt-[-10rem]`}
      onMouseEnter={() => {
        setShowButton(true);
      }}
      onMouseLeave={() => {
        setTimeout(() => {
          setShowButton(false);
        }, 3000);
      }}
    >
      <EachHeaderContainer name={AIRING_TODAY_SHOW_HEADER} />
      <EachContainer category={airingTodayShows} showButton={showButton} />
    </section>
  );
};

export { AiringTodayContainer };
