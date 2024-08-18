import React from "react";
import { useSelector } from "react-redux";
import {
  EachItemContainer,
  NoOverviewDisplay,
} from "../../../../utils/ExportComponents";

const RecommendationContainer = () => {
  const { recommendations } = useSelector((state) => state.detailsReducer);
  console.log(recommendations);
  return (
    <section className="m-10 pb-20 text-white sm:m-0 sm:p-0 sm:py-6 sm:pb-28 sm:pr-10 xl:w-full">
      <div className="grid grid-cols-2 justify-items-center gap-8 sm:grid-cols-4 sm:gap-x-1 sm:gap-y-8 md:grid-cols-5 md:gap-x-10 lg:grid-cols-6 xl:grid-cols-7 xl:gap-x-10">
        {recommendations?.map((eachitem) => (
          <EachItemContainer recommendation={eachitem} key={eachitem.id} />
        ))}
      </div>
      {recommendations.length === 0 && (
        <NoOverviewDisplay key={1}>
          No such recommendation found !
        </NoOverviewDisplay>
      )}
    </section>
  );
};

export { RecommendationContainer };
