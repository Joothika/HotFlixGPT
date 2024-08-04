import React, { useState } from "react";
import { useSelector } from "react-redux";
import { UPCOMING_MOVIE_HEADER } from "../../../utils/constants";
import {
  useFetchMoviesOrTvDashboardShow,
  EachHeaderContainer,
  EachContainer,
} from "../../../utils/ExportComponents";
const UpcomingMovieContainer = () => {
  const [showButton, setShowButton] = useState(false);
  const { upcomingMovies } = useSelector((state) => state.movieReducer);
  useFetchMoviesOrTvDashboardShow("/movie/upcoming");
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
      <EachHeaderContainer name={UPCOMING_MOVIE_HEADER} />
      <EachContainer category={upcomingMovies} showButton={showButton} />
    </section>
  );
};

export { UpcomingMovieContainer };
