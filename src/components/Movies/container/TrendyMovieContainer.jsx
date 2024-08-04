import React, { useState } from "react";
import { TRENDING_MOVIE_HEADER } from "../../../utils/constants";
import { useSelector } from "react-redux";
import {
  useFetchMoviesOrTvDashboardShow,
  EachHeaderContainer,
  EachContainer,
  useFetchTrending,
} from "../../../utils/ExportComponents";
const TrendyMovieContainer = () => {
  const [showButton, setShowButton] = useState(false);
  const { trendingMovies } = useSelector((state) => state.movieReducer);
  useFetchTrending("/trending/movie");
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
      <EachHeaderContainer name={TRENDING_MOVIE_HEADER} />
      <EachContainer category={trendingMovies} showButton={showButton} />
    </section>
  );
};

export { TrendyMovieContainer };
