import React from "react";
import {
  Poster,
  Trailer,
  TrailerOrPosterContent,
} from "../../../utils/ExportComponents";

const DetailsTrailer = () => {
  return (
    <>
      <section className="relative overflow-y-hidden before:absolute before:top-0 before:z-[1] before:w-full before:overflow-x-hidden before:bg-gradient-to-bl before:from-white/20 before:to-black before:sm:h-[70vh] before:md:h-[90vh] before:lg:h-[110vh] before:xl:h-[130vh]">
        <Trailer />
        <TrailerOrPosterContent />
        <Poster />
      </section>
    </>
  );
};

export default DetailsTrailer;
