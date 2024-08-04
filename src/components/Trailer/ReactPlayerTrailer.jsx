import React, { useState } from "react";

const ReactPlayerTrailer = ({ trailer }) => {
  return (
    <iframe
      src={`https://www.youtube.com/embed/${trailer}?si=b9ToejpdmtH29FU8&mute=1&playlist=${trailer}&loop=1&autoplay=1&controls=0&rel=0`}
      className="sticky aspect-video h-full w-full"
      allowFullScreen
      style={{ pointerEvents: "none" }}
    />
  );
};

export default ReactPlayerTrailer;
