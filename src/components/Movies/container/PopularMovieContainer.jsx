import React, { useState } from "react";
import { useSelector } from "react-redux";
import { POPULAR_MOVIE_HEADER } from "../../../utils/constants";
import {
  useFetchMoviesOrTvDashboardShow,
  EachHeaderContainer,
  EachContainer,
} from "../../../utils/ExportComponents";
const PopularMovieContainer = () => {
  const [showButton, setShowButton] = useState(false);

  const { popularMovies } = useSelector((state) => state.movieReducer);
  useFetchMoviesOrTvDashboardShow("/movie/popular");
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
      <EachHeaderContainer name={POPULAR_MOVIE_HEADER} />
      <EachContainer category={popularMovies} showButton={showButton} />
    </section>
  );
};

export { PopularMovieContainer };
