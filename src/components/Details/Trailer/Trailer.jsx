import React from "react";
import { useSelector } from "react-redux";
import { ReactPlayerTrailer } from "../../../utils/ExportComponents";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
const Trailer = () => {
  const { trailer } = useSelector((state) => state.detailsReducer);

  const primaryTrailer = trailer?.slice(0, 1);
  const secondaryTrailer = trailer?.slice(1, 2);

  return (
    <>
      {primaryTrailer
        ? primaryTrailer?.map((trailer, i) => (
            <ReactPlayerTrailer key={trailer.key} trailer={trailer?.key} />
          ))
        : secondaryTrailer?.map((trailer) => (
            <ReactPlayerTrailer key={trailer.key} trailer={trailer?.key} />
          ))}
    </>
  );
};

export { Trailer };
