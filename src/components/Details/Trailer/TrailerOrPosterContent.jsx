import React from "react";
import { useSelector } from "react-redux";
import {
  TrailerLogo,
  TrailerTitle,
  TrailerTags,
  TrailerOverview,
  LearnMore,
} from "../../../utils/ExportComponents";

const TrailerOrPosterContent = () => {
  return (
    <section className="xl:top-30 lg::w-[35%] absolute z-[3] sm:left-8 sm:top-24 md:left-[3rem] md:top-24 md:w-[40%] lg:left-[7.5rem] lg:top-24">
      <TrailerLogo />
      <TrailerTitle />
      <TrailerTags />
      <TrailerOverview />
      <LearnMore />
    </section>
  );
};

export { TrailerOrPosterContent };
