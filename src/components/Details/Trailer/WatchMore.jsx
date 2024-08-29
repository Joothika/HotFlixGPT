import React, { useEffect, useState } from "react";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { WATCH_MORE_BUTTON } from "../../../utils/constants";
import Button from "../../../utils/Button";
import DoneIcon from "@mui/icons-material/Done";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const WatchMore = () => {
  const [fav, setFav] = useState(false);
  const [watch, setWatch] = useState(false);
  const [makeSubscription, setMakeSubscription] = useState(false);
  const { content, tvContent } = useSelector((state) => state.detailsReducer);
  const { id, name } = useParams();
  const navigate = useNavigate();
  const req_token = localStorage.getItem("req_token");
  let favList = JSON.parse(localStorage.getItem("fav_list"));
  let watchList = JSON.parse(localStorage.getItem("watch_list"));
  if (favList == null && req_token) favList = [];
  if (watchList == null && req_token) watchList = [];
  const favFilter = favList?.find((eachfav) => eachfav.id == id);
  const watchFilter = watchList?.find((eachWatch) => eachWatch.id == id);

  useEffect(() => {
    if (req_token) setMakeSubscription(false);
    if (req_token && typeof favFilter == "undefined") setFav(false);
    if (req_token && typeof favFilter == "object") setFav(true);
    if (req_token && typeof watchFilter == "undefined") setWatch(false);
    if (req_token && typeof watchFilter == "object") setWatch(true);
  }, [req_token, favFilter, watchFilter]);

  function handleFavouriteClick() {
    console.log(favList);
    if (!req_token) setMakeSubscription(true);
    if (req_token && !fav) {
      setFav(true);
      if (content) favList.push(content);
      if (tvContent) favList.push(tvContent);
      console.log(favList);
      localStorage.setItem("fav_list", JSON.stringify(favList));
    } else {
      setFav(false);
      let findFavId = favList?.findIndex((eachfav) => eachfav.id == id);
      console.log(findFavId);
      favList?.splice(findFavId, 1);
      localStorage.setItem("fav_list", JSON.stringify(favList));
    }
  }

  function handleWatchClick() {
    if (!req_token) setMakeSubscription(true);
    if (req_token && !watch) {
      setWatch(true);
      if (content) watchList.push(content);
      if (tvContent) watchList.push(tvContent);
      localStorage.setItem("watch_list", JSON.stringify(watchList));
    } else {
      setWatch(false);
      let findWatchId = watchList?.findIndex((eachwatch) => eachwatch.id == id);
      console.log(findWatchId);
      watchList?.splice(findWatchId, 1);
      localStorage.setItem("watch_list", JSON.stringify(watchList));
    }
  }

  function handleClickWatchMore() {
    window.scrollTo({
      left: 0,
      top: window.innerHeight,
      behavior: "smooth",
    });
    navigate(`/dashboard/${name}/${id}/recommendations`);
  }
  return (
    <>
      {name === "movie" || name === "tv" ? (
        <div className="mt-6 flex w-[14.5rem] justify-between sm:mt-0 sm:w-[10rem] md:w-[13rem] lg:my-5 lg:w-[18rem] xl:w-[19rem]">
          <Button type="watchmore" onClick={() => handleClickWatchMore()}>
            {WATCH_MORE_BUTTON}
          </Button>
          <Button type="likeAndwatch" onClick={() => handleFavouriteClick()}>
            {fav ? (
              <FavoriteIcon
                fontSize="medium"
                sx={{ fontSize: "1.1rem", color: "red" }}
              />
            ) : (
              <FavoriteBorderRoundedIcon
                fontSize="medium"
                sx={{ fontSize: "1.1rem" }}
              />
            )}
          </Button>
          <Button type="likeAndwatch" onClick={() => handleWatchClick()}>
            {watch ? (
              <DoneIcon fontSize="medium" sx={{ fontSize: "1.1rem" }} />
            ) : (
              <AddRoundedIcon fontSize="medium" sx={{ fontSize: "1.1rem" }} />
            )}
          </Button>
        </div>
      ) : (
        ""
      )}
      {!req_token && makeSubscription && (
        <h1 className="mt-4 text-sm font-semibold tracking-wide text-red-500">
          Please subscribe to add your favourites or watchlist !!!
        </h1>
      )}
    </>
  );
};

export { WatchMore };
