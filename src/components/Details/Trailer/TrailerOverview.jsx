import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const TrailerOverview = () => {
  const { content, tvContent } = useSelector((state) => state.detailsReducer);
  const { name } = useParams();
  return (
    <p className="hidden text-justify tracking-tight text-stone-50/50 lg:mb-5 lg:block lg:text-xs">
      {name === "movie" && content?.overview}
      {name === "tv" && tvContent?.overview}
    </p>
  );
};

export { TrailerOverview };
