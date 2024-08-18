import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const OverviewHeader = () => {
  const { content, tvContent, actorContent } = useSelector(
    (state) => state.detailsReducer,
  );
  const { name } = useParams();

  return (
    <div className="flex">
      <h1 className="text-lg font-semibold tracking-wider text-sky-600 xl:text-xl">
        {name === "movie" && content?.original_title}
        {name === "tv" && tvContent?.original_name}
        {name === "person" && actorContent?.name}
      </h1>
    </div>
  );
};

export { OverviewHeader };
