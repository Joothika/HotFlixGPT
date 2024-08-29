import React from "react";
import {
  formatLanguage,
  TMDB_IMG_URL,
  TMDB_TEMPIMG_URL,
} from "../../utils/constants";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import GridOnIcon from "@mui/icons-material/GridOn";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import { Link, useParams } from "react-router-dom";

const MenuList = ({ item }) => {
  const { watchlist } = useParams();
  const favList = JSON.parse(localStorage.getItem("fav_list"));
  const watchList = JSON.parse(localStorage.getItem("watch_list"));

  function handleRemoveClick() {
    if (watchlist) {
      let findWatchId = watchList?.findIndex(
        (eachwatch) => eachwatch.id == item?.id,
      );
      console.log(findWatchId);
      watchList?.splice(findWatchId, 1);
      localStorage.setItem("watch_list", JSON.stringify(watchList));
    }
    let findFavId = favList?.findIndex((eachfav) => eachfav.id == item?.id);
    console.log(findFavId);
    favList?.splice(findFavId, 1);
    localStorage.setItem("fav_list", JSON.stringify(favList));
  }
  return (
    <>
      <li className="mb-6 flex w-full items-center">
        <img
          src={
            item?.poster_path
              ? `${TMDB_IMG_URL}${item?.poster_path}`
              : `${TMDB_TEMPIMG_URL}`
          }
          className="mr-5 h-24 w-24 object-cover sm:h-32 sm:w-32"
        />
        <div>
          <div className="flex justify-between">
            <h1 className="text-xs tracking-wide lg:text-sm">
              {item?.original_title || item?.original_name}
            </h1>
            <div className="ml-6">
              <Link
                to={
                  item?.original_title
                    ? `/dashboard/movie/${item?.id}`
                    : `/dashboard/tv/${item?.id}`
                }
              >
                <GridOnIcon
                  sx={{ fontSize: { xs: "17px", sm: "20px" }, color: "green" }}
                />
              </Link>
              <button onClick={() => handleRemoveClick()}>
                <DeleteOutlineIcon
                  sx={{
                    fontSize: { xs: "19px", sm: "24px" },
                    color: "#dc143c ",
                    marginLeft: { lg: "10px" },
                  }}
                />
              </button>
            </div>
          </div>
          <ul className="mt-4 flex text-xs sm:mt-8 sm:text-sm">
            <li className="tracking-wide">
              <VerifiedOutlinedIcon
                className="mr-2"
                sx={{ fontSize: { xs: "15px", sm: "20px" } }}
              />
              {item?.release_date?.split("-")?.at(0) ||
                item?.last_air_date?.split("-")?.at(0)}
            </li>
            <li className="ml-2 tracking-wide sm:ml-6">
              <LanguageOutlinedIcon
                className="mr-2"
                sx={{ fontSize: { xs: "15px", sm: "20px" } }}
              />
              {item?.original_language}
            </li>
            <li className="ml-2 tracking-wide sm:ml-6">
              {item?.runtime ? (
                <DirectionsRunIcon
                  className="mr-2"
                  sx={{ fontSize: { xs: "15px", sm: "20px" } }}
                />
              ) : (
                <SmartDisplayIcon
                  className="mr-2"
                  sx={{ fontSize: { xs: "15px", sm: "20px" } }}
                />
              )}
              {item?.runtime && `${item?.runtime} minutes`}
              {item?.number_of_episodes &&
                `${item?.number_of_episodes} episodes`}
            </li>
          </ul>
        </div>
      </li>
      <hr className="mb-4 opacity-30" />
    </>
  );
};

export { MenuList };
