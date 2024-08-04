import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  EachContainer,
  EachHeaderContainer,
} from "../../../utils/ExportComponents";
import {
  GENRE_MOVIE_IMG_URL,
  POPULAR_MOVIE_GENRE_HEADER,
} from "../../../utils/constants";

const PopularGenreContainer = () => {
  const [showButton, setShowButton] = useState(false);

  const { genreMovieList, genreTvList } = useSelector(
    (state) => state.dashboardReducer,
  );

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
      <EachHeaderContainer name={POPULAR_MOVIE_GENRE_HEADER} />
      <EachContainer category={genreMovieList} showButton={showButton} />
    </section>
  );
};

export { PopularGenreContainer };
