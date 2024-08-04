import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  EachHeaderContainer,
  EachContainer,
} from "../../../utils/ExportComponents";
import { NOWPLAYING_MOVIE_HEADER } from "../../../utils/constants";

const NowPlayingContainer = () => {
  const [showButton, setShowButton] = useState(false);
  const { nowplayingMovies } = useSelector((state) => state.dashboardReducer);
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
      <EachHeaderContainer name={NOWPLAYING_MOVIE_HEADER} />
      <EachContainer category={nowplayingMovies} showButton={showButton} />
    </section>
  );
};

export { NowPlayingContainer };
