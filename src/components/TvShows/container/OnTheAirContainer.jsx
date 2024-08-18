import React, { useState } from "react";
import { ON_AIR_SHOW_HEADER } from "../../../utils/constants";
import { useSelector } from "react-redux";
import {
  useFetchMoviesOrTvDashboardShow,
  EachHeaderContainer,
  EachContainer,
} from "../../../utils/ExportComponents";

const OnTheAirContainer = () => {
  const [showButton, setShowButton] = useState(false);

  const { onTheAirShows } = useSelector((state) => state.TvShowReducer);

  useFetchMoviesOrTvDashboardShow("/tv/on_the_air");
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
      <EachHeaderContainer name={ON_AIR_SHOW_HEADER} />
      <EachContainer category={onTheAirShows} showButton={showButton} />
    </section>
  );
};

export { OnTheAirContainer };
