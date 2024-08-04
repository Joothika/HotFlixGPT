import React, { useState } from "react";
import {
  EachHeaderContainer,
  EachContainer,
  useFetchDiscover,
  useFetchGenre,
} from "../../../utils/ExportComponents";
import { useSelector } from "react-redux";

const GenreTvContainer = () => {
  const [showButton, setShowButton] = useState(false);

  const { genreTvList, genreTvCategories } = useSelector(
    (state) => state.dashboardReducer,
  );
  useFetchGenre("tv");
  useFetchDiscover("/discover/tv", genreTvList);

  return (
    <section className="text-white lg:sticky lg:z-10 lg:ml-[7rem]">
      {genreTvCategories.map((eachGenreCatgory, i) => {
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
              name={genreTvList[i].name}
              type={"genre shows"}
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

export { GenreTvContainer };
