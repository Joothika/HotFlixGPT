import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  EachHeaderContainer,
  useFetchMoviesOrTvDashboardShow,
  EachContainer,
} from "../../../utils/ExportComponents";
import { TOP_RATED_HEADER } from "../../../utils/constants";

const TopRatedContainer = () => {
  const [showButton, setShowButton] = useState(false);

  const { topRatedShows } = useSelector((state) => state.TvShowReducer);
  useFetchMoviesOrTvDashboardShow("/tv/top_rated");
  return (
    <section
      className=" text-white lg:sticky lg:z-10 lg:ml-[7rem]"
      onMouseEnter={() => {
        setShowButton(true);
      }}
      onMouseLeave={() => {
        setTimeout(() => {
          setShowButton(false);
        }, 3000);
      }}
    >
      <EachHeaderContainer name={TOP_RATED_HEADER} />
      <EachContainer category={topRatedShows} showButton={showButton} />
    </section>
  );
};

export { TopRatedContainer };
