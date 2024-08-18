import React, { useState } from "react";
import { TRENDING_ALL_HEADER } from "../../../utils/constants";
import {
  EachHeaderContainer,
  EachContainer,
  useFetchTrending,
} from "../../../utils/ExportComponents";
import { useSelector } from "react-redux";

const TrendingAllContainer = () => {
  const [showButton, setShowButton] = useState(false);
  const { trendAll } = useSelector((state) => state.dashboardReducer);
  useFetchTrending("/trending/all");
  return (
    <>
      <section
        className={`2xl:mt[-5rem] hover: relative border-white text-white sm:sticky sm:z-10 sm:mt-[-1rem] xl:sticky xl:z-10 xl:mt-[-8rem] 2xl:sticky 2xl:mt-[-10rem]`}
        onMouseEnter={() => {
          setShowButton(true);
        }}
        onMouseLeave={() => {
          setTimeout(() => {
            setShowButton(false);
          }, 3000);
        }}
      >
        <EachHeaderContainer name={TRENDING_ALL_HEADER} />
        <EachContainer category={trendAll} showButton={showButton} />
      </section>
    </>
  );
};

export { TrendingAllContainer };

// relative flex justify-center overflow-x-scroll
