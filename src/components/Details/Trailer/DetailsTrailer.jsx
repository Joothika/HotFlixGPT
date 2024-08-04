import React from "react";
import {
  Poster,
  Trailer,
  TrailerOrPosterContent,
} from "../../../utils/ExportComponents";

const DetailsTrailer = () => {
  return (
    <>
      <section className="hidden overflow-y-hidden before:absolute before:top-0 before:z-[1] before:w-full before:overflow-x-hidden before:bg-gradient-to-bl before:from-white/20 before:to-black sm:block before:sm:h-full before:lg:h-full">
        <Trailer />
        <TrailerOrPosterContent />
      </section>
      <Poster />
    </>
  );
};

export default DetailsTrailer;
