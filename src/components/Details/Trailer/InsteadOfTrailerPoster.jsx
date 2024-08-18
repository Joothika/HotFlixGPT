import React from "react";
import { useSelector } from "react-redux";
import { TMDB_IMG_URL, TMDB_TEMPIMG_URL } from "../../../utils/constants";

const InsteadOfTrailerPoster = ({ poster }) => {
  const { trailer } = useSelector((state) => state.detailsReducer);

  return (
    <>
      {trailer?.length === 0 && (
        <div className="w-full">
          {poster?.map((eachPoster) => (
            <img
              src={`${TMDB_IMG_URL}${eachPoster.file_path}`}
              className="aspect-video h-full w-full object-cover"
              key={eachPoster.id}
            />
          ))}
        </div>
      )}

      {poster?.length === 0 && trailer.length === 0 && (
        <div className="aspect-video h-screen w-full">
          <img
            src={`${TMDB_TEMPIMG_URL}`}
            className="w-full"
            key={`poster-1`}
          />
        </div>
      )}
    </>
  );
};

export { InsteadOfTrailerPoster };
