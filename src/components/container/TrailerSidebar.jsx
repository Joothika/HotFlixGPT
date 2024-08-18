import React from "react";
import { TMDB_IMG_URL } from "../../utils/constants";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
const TrailerSidebar = ({ combinedPoster, sliderRef }) => {
  return (
    <>
      <div className="hidden lg:absolute lg:bottom-36 lg:right-10 lg:z-10 lg:flex lg:text-white xl:bottom-52">
        <button
          className="opacity-60"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <KeyboardArrowLeftIcon fontSize="large" sx={{ fontSize: "2rem" }} />
        </button>
        {combinedPoster?.map((eachItem) => (
          <img
            key={eachItem.id}
            src={`${TMDB_IMG_URL}${eachItem.poster_path}`}
            className="mx-1 h-12 w-20 rounded-sm object-cover opacity-60 hover:scale-125 hover:transition-all hover:delay-150 hover:duration-200 hover:ease-out"
          />
        ))}
        <button
          className="opacity-60"
          onClick={() => sliderRef.current.slickNext()}
        >
          <KeyboardArrowRightIcon fontSize="large" sx={{ fontSize: "2rem" }} />
        </button>
      </div>
    </>
  );
};

export { TrailerSidebar };
