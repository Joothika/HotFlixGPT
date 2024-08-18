import React from "react";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { WATCH_MORE_BUTTON } from "../../../utils/constants";
import Button from "../../../utils/Button";
import { useNavigate, useParams } from "react-router-dom";

const WatchMore = () => {
  const { id, name } = useParams();
  const navigate = useNavigate();
  function handleClickWatchMore() {
    window.scrollTo({
      left: 0,
      top: window.innerHeight,
      behavior: "smooth",
    });
    navigate(`/dashboard/details/${id}/recommendations`);
  }
  return (
    <>
      {name === "movie" ||
        (name === "tv" && (
          <div className="mt-6 flex w-[14.5rem] justify-between sm:mt-0 sm:w-[10rem] md:w-[13rem] lg:my-5 lg:w-[18rem] xl:w-[19rem]">
            <Button type="watchmore" onClick={() => handleClickWatchMore()}>
              {WATCH_MORE_BUTTON}
            </Button>
            <Button type="likeAndwatch">
              <FavoriteBorderRoundedIcon
                fontSize="medium"
                sx={{ fontSize: "1rem" }}
              />
            </Button>
            <Button type="likeAndwatch">
              <AddRoundedIcon fontSize="medium" sx={{ fontSize: "1rem" }} />
            </Button>
          </div>
        ))}
    </>
  );
};

export { WatchMore };
