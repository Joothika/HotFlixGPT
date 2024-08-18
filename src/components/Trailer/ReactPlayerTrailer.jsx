import React, { useState } from "react";

const ReactPlayerTrailer = ({ trailer }) => {
  return (
    <div className="before:absolute before:top-0 before:z-[2] before:w-full before:overflow-x-hidden before:bg-gradient-to-l before:from-transparent before:to-black/40 before:lg:h-[130vh]">
      <iframe
        src={`https://www.youtube.com/embed/${trailer}?si=b9ToejpdmtH29FU8&mute=1&playlist=${trailer}&loop=1&autoplay=1&controls=0&rel=0`}
        className="sticky aspect-video h-full w-full"
        allowFullScreen
        style={{ pointerEvents: "none" }}
      />
    </div>
  );
};

export default ReactPlayerTrailer;
