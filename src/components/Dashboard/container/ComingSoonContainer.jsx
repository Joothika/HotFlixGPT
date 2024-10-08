import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  EachContainer,
  EachHeaderContainer,
  useFetchMoviesOrTvDashboardShow,
} from "../../../utils/ExportComponents";
import { UPCOMING_HEADER } from "../../../utils/constants";

const ComingSoonContainer = () => {
  const [showButton, setShowButton] = useState(false);

  useFetchMoviesOrTvDashboardShow("/movie/upcoming");
  const { upcomingMovies } = useSelector((state) => state.movieReducer);
  return (
    <section
      className="text-white sm:sticky sm:z-10"
      onMouseEnter={() => {
        setShowButton(true);
      }}
      onMouseLeave={() => {
        setTimeout(() => {
          setShowButton(false);
        }, 3000);
      }}
    >
      <EachHeaderContainer name={UPCOMING_HEADER} />
      <EachContainer category={upcomingMovies} showButton={showButton} />
    </section>
  );
};

export { ComingSoonContainer };
