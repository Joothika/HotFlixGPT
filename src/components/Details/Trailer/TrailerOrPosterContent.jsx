import React from "react";
import { useSelector } from "react-redux";
import {
  TrailerLogo,
  TrailerTitle,
  TrailerTags,
  TrailerOverview,
  WatchMore,
} from "../../../utils/ExportComponents";

const TrailerOrPosterContent = () => {
  return (
    <section className="absolute bottom-12 left-[20%] right-[20%] z-[4] flex flex-col items-center sm:bottom-10 sm:left-[7rem] sm:w-[40%] sm:items-start md:bottom-20 lg:bottom-10 lg:left-[7.5rem] lg:w-[35%] xl:bottom-28">
      <TrailerLogo />
      <TrailerTitle />
      <TrailerTags />
      <TrailerOverview />
      <WatchMore />
    </section>
  );
};

export { TrailerOrPosterContent };
