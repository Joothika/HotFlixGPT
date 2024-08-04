import React, { useState } from "react";
import {
  EachContainer,
  EachHeaderContainer,
  EachItemContainer,
  useFetchDiscover,
  useFetchGenre,
} from "../../../utils/ExportComponents";
import { useSelector } from "react-redux";

const GenreMovieContainer = () => {
  const [showButton, setShowButton] = useState(false);
  const { genreMovieList, genreMovieCategories } = useSelector(
    (state) => state.dashboardReducer,
  );
  useFetchGenre("movie");
  useFetchDiscover("/discover/movie", genreMovieList);
  return (
    <section className="text-white lg:sticky lg:z-10 lg:ml-[7rem]">
      {genreMovieCategories?.map((eachGenreCatgory, i) => {
        return (
          <div
            key={i}
            className="relative"
            onMouseEnter={() => {
              setShowButton(true);
            }}
            onMouseLeave={() => {
              setTimeout(() => {
                setShowButton(false);
              }, 3000);
            }}
          >
            <EachHeaderContainer
              name={genreMovieList[i].name}
              type={"genre movies"}
            />
            <EachContainer
              category={eachGenreCatgory.results}
              showButton={showButton}
            />
          </div>
        );
      })}
    </section>
  );
};

export { GenreMovieContainer };
