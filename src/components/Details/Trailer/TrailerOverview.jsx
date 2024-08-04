import React from "react";
import { useSelector } from "react-redux";

const TrailerOverview = () => {
  const { content } = useSelector((state) => state.detailsReducer);
  return (
    <p className="my-8 hidden text-justify tracking-tight text-stone-50/50 xl:block xl:text-xs">
      {content?.overview}
    </p>
  );
};

export { TrailerOverview };
