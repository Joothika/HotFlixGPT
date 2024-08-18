import React from "react";
import { useSelector } from "react-redux";
import { TMDB_IMG_URL } from "../../../utils/constants";
import { useParams } from "react-router-dom";

const TrailerLogo = () => {
  const { content, tvContent } = useSelector((state) => state.detailsReducer);
  const { name } = useParams();
  return (
    <div className="hidden before:absolute before:rounded-full before:bg-black/40 sm:block before:sm:h-16 before:sm:w-16 before:md:h-24 before:md:w-24 before:lg:h-32 before:lg:w-32 before:xl:h-36 before:xl:w-36">
      <img
        src={
          name === "movie"
            ? `${TMDB_IMG_URL}${content?.poster_path}`
            : `${TMDB_IMG_URL}${tvContent?.poster_path}`
        }
        className="rounded-full object-cover shadow-lg shadow-white/10 sm:h-16 sm:w-16 md:h-24 md:w-24 lg:h-32 lg:w-32 xl:h-36 xl:w-36"
      />
    </div>
  );
};

export { TrailerLogo };
