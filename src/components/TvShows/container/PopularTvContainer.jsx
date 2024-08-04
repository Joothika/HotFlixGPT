import React from "react";
import { POPULAR_SHOW_HEADER } from "../../../utils/constants";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  useFetchMoviesOrTvDashboardShow,
  EachHeaderContainer,
  EachContainer,
} from "../../../utils/ExportComponents";
const PopularTvContainer = () => {
  const [showButton, setShowButton] = useState(false);

  const { popularShows } = useSelector((state) => state.TvShowReducer);

  useFetchMoviesOrTvDashboardShow("/tv/popular");
  return (
    <section
      className="text-white lg:sticky lg:z-10 lg:ml-[7rem]"
      onMouseEnter={() => {
        setShowButton(true);
      }}
      onMouseLeave={() => {
        setTimeout(() => {
          setShowButton(false);
        }, 3000);
      }}
    >
      <EachHeaderContainer name={POPULAR_SHOW_HEADER} />
      <EachContainer category={popularShows} showButton={showButton} />
    </section>
  );
};

export { PopularTvContainer };
