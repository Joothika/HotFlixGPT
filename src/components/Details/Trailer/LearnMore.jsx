import React from "react";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";

const LearnMore = () => {
  return (
    <div className="flex justify-between sm:w-[10rem] md:my-4 md:w-[13rem] lg:my-6 lg:w-[18rem] xl:my-0 xl:w-[17rem]">
      <button className="xl:text-md rounded-md bg-gradient-to-tr from-stone-400/50 to-stone-300/20 tracking-wide text-white sm:px-2 sm:py-0 sm:text-[0.6rem] md:px-3 md:py-1 md:text-xs lg:px-8 lg:py-2 lg:text-sm xl:px-10 xl:py-2">
        Learn More
      </button>
      <button className="rounded-md bg-gradient-to-tr from-stone-400/50 to-stone-300/20 text-lg tracking-wide text-white sm:px-2 sm:py-0 md:px-3 md:py-1 lg:px-4 lg:py-2 xl:px-3 xl:py-2">
        <FavoriteBorderRoundedIcon
          fontSize="medium"
          sx={{ fontSize: "1rem" }}
        />
      </button>
      <button className="rounded-md bg-gradient-to-tr from-stone-400/50 to-stone-300/20 text-lg tracking-wide text-white sm:px-2 sm:py-0 md:px-3 md:py-1 lg:px-4 lg:py-2 xl:px-3 xl:py-2">
        <AddRoundedIcon fontSize="medium" sx={{ fontSize: "1rem" }} />
      </button>
    </div>
  );
};

export { LearnMore };
