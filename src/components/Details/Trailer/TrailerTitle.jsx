import React from "react";
import { useSelector } from "react-redux";

const TrailerTitle = () => {
  const { content } = useSelector((state) => state.detailsReducer);
  return (
    <h1 className="font-semibold text-stone-50/50 sm:my-4 sm:text-xs md:my-3 md:text-sm lg:my-6 lg:text-xl xl:mt-7 xl:text-xl">
      {content.original_title}
    </h1>
  );
};

export { TrailerTitle };
