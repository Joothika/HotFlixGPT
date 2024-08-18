import React from "react";
import {
  OverviewGenres,
  OverviewHeader,
  OverviewKeywords,
  OverviewLinkFooter,
  RatingAndOverview,
} from "../../../../utils/ExportComponents";

const OverviewContainer = () => {
  return (
    <section className="p-6 pb-24 text-white sm:p-0 sm:py-6 sm:pr-10 xl:w-[60%]">
      <OverviewHeader />
      <OverviewGenres />
      <RatingAndOverview />
      <OverviewKeywords />
      <OverviewLinkFooter />
    </section>
  );
};

export { OverviewContainer };
