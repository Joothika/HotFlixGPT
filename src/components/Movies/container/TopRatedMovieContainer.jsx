import React, { useState } from "react";
import { useSelector } from "react-redux";

import { TOP_RATED_HEADER } from "../../../utils/constants";
import {
  useFetchMoviesOrTvDashboardShow,
  EachHeaderContainer,
  EachContainer,
} from "../../../utils/ExportComponents";

const TopRatedMovieContainer = () => {
  const [showButton, setShowButton] = useState(false);

  const { topratedMovies } = useSelector((state) => state.movieReducer);
  useFetchMoviesOrTvDashboardShow("/movie/top_rated");
  return (
    <section
      className="text-white lg:sticky lg:z-10"
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
      <EachContainer category={topratedMovies} showButton={showButton}  />
    </section>
  );
};

export { TopRatedMovieContainer };
