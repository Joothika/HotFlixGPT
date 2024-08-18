import React from "react";
import { useSelector } from "react-redux";
import {
  InsteadOfTrailerPoster,
  ReactPlayerTrailer,
} from "../../../utils/ExportComponents";
const Trailer = () => {
  const { trailer, posters } = useSelector((state) => state.detailsReducer);

  const primaryTrailer = trailer?.slice(0, 1);
  const secondaryTrailer = trailer?.slice(1, 2);
  const primaryPoster = posters?.slice(0, 1);
  const secondaryPoster = posters?.slice(1, 2);

  return (
    <div className="hidden sm:block">
      {primaryPoster ? (
        <InsteadOfTrailerPoster poster={primaryPoster} />
      ) : (
        <InsteadOfTrailerPoster poster={secondaryPoster} />
      )}
      {primaryTrailer
        ? primaryTrailer?.map((trailer, i) => (
            <ReactPlayerTrailer key={trailer.key} trailer={trailer?.key} />
          ))
        : secondaryTrailer?.map((trailer) => (
            <ReactPlayerTrailer key={trailer.key} trailer={trailer?.key} />
          ))}
    </div>
  );
};

export { Trailer };
