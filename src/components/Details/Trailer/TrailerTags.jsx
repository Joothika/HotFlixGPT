import React from "react";
import { useSelector } from "react-redux";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";

const TrailerTags = () => {
  const { content } = useSelector((state) => state.detailsReducer);

  return (
    <ul className="flex items-center justify-between text-stone-50/50 sm:my-4 sm:text-xs md:my-4 md:w-[15rem] md:text-xs lg:my-6 lg:w-[20rem] lg:text-sm xl:mt-0 xl:w-[23rem] xl:text-lg">
      <li className="flex items-center justify-evenly xl:px-3 xl:py-2">
        <VerifiedOutlinedIcon className="mr-2" />
        {content?.release_date?.split("-")[0]}
      </li>
      <li className="flex items-center justify-evenly xl:px-3 xl:py-2">
        <LanguageOutlinedIcon className="mr-2" />
        {content?.original_language?.charAt(0).toUpperCase() +
          content.original_language?.slice(1)}
      </li>
      <li className="flex items-center justify-evenly rounded-md lg:ml-3 xl:bg-gradient-to-tr xl:from-stone-400/50 xl:to-stone-300/20 xl:px-5 xl:py-2">
        <DirectionsRunIcon className="mr-2" />
        <span className="lg:text-sm">
          {Math.trunc((content?.runtime / 60) * 100) / 100} mins
        </span>
      </li>
    </ul>
  );
};

export { TrailerTags };
