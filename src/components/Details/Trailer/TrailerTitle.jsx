import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const TrailerTitle = () => {
  const { content, tvContent, actorContent } = useSelector(
    (state) => state.detailsReducer,
  );
  const { name } = useParams();
  return (
    <h1 className="text-md my-4 font-semibold tracking-wide text-stone-200 sm:mt-4 sm:text-sm sm:text-stone-50/50 md:my-4 md:text-lg lg:text-xl xl:text-xl">
      {name === "movie" && content.original_title}
      {name === "tv" && tvContent.original_name}
      {name === "person" && actorContent.name}
    </h1>
  );
};

export { TrailerTitle };
