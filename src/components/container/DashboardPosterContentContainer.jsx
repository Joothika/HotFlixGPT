import React from "react";
import {
  BG_IMG_URL,
  TMDB_IMG_URL,
  WATCH_MORE_BUTTON,
} from "../../utils/constants";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import Button from "../../utils/Button";

const DashboardPosterContentContainer = ({ eachItem }) => {
  function handleClickWatchMore() {
    return window.scrollTo({
      left: 0,
      top: window.innerHeight,
      behavior: "smooth",
    });
  }
  return (
    <div className="relative block sm:hidden">
      <div className="before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-[1] before:h-[100vh] before:bg-gradient-to-b before:from-white/5 before:from-5% before:to-black before:to-95%">
        <img
          src={`${TMDB_IMG_URL}${eachItem.poster_path}` || `${BG_IMG_URL}`}
          className="h-[100vh] w-screen object-cover"
        />
      </div>
      <div className="absolute bottom-28 left-[15%] right-[15%] z-[6] flex flex-col items-center justify-between">
        <h1 className="my-2 text-lg text-white">
          {eachItem.original_title || eachItem.original_name}
        </h1>

        {eachItem && (
          <small className="my-2 flex items-center text-yellow-500">
            <StarBorderOutlinedIcon sx={{ fontSize: { xs: "1.5rem" } }} />
            <span className="ml-1 mt-1 text-sm text-white">
              {eachItem.vote_average} / 10
            </span>
          </small>
        )}
        <Button
          type="dashboardwatchmore"
          onClick={() => handleClickWatchMore()}
        >
          {WATCH_MORE_BUTTON}
        </Button>
      </div>
    </div>
  );
};

export { DashboardPosterContentContainer };
