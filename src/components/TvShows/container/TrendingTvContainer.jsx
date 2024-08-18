import React from "react";
import { TRENDING_SHOW_HEADER } from "../../../utils/constants";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  useFetchTrending,
  EachHeaderContainer,
  EachContainer,
} from "../../../utils/ExportComponents";

const TrendingTvContainer = () => {
  const [showButton, setShowButton] = useState(false);
  const { trendingShows } = useSelector((state) => state.dashboardReducer);
  useFetchTrending("/trending/tv");
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
      <EachHeaderContainer name={TRENDING_SHOW_HEADER} />
      <EachContainer category={trendingShows} showButton={showButton} />
    </section>
  );
};

export { TrendingTvContainer };
