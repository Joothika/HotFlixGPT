import React, { useState } from "react";
import { useSelector } from "react-redux";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import CakeIcon from "@mui/icons-material/Cake";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import PlaceIcon from "@mui/icons-material/Place";
import { useParams } from "react-router-dom";
const TrailerTags = () => {
  const { content, tvContent, actorContent } = useSelector(
    (state) => state.detailsReducer,
  );
  const { name } = useParams();
  const dateFormatActor = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return (
    <ul className="flex w-full items-center justify-start text-[0.8rem] text-stone-200 sm:hidden md:justify-between lg:mb-4 lg:flex lg:w-[20rem] lg:text-sm lg:text-stone-50/50 xl:w-[23rem] xl:text-lg">
      {content?.release_date === "" || tvContent?.last_air_date === "" ? (
        ""
      ) : (
        <li className="flex items-center justify-evenly">
          {name === "movie" || name === "tv" ? (
            <VerifiedOutlinedIcon
              className="mr-2"
              sx={{ fontSize: { xs: "15px", sm: "20px" } }}
            />
          ) : (
            ""
          )}
          {name === "person" && (
            <CakeIcon
              className="mr-2"
              sx={{ fontSize: { xs: "15px", sm: "20px" } }}
            />
          )}
          {name === "movie" && content?.release_date?.split("-")[0]}
          {name === "tv" && tvContent?.last_air_date?.split("-")[0]}
          {name === "person" &&
            actorContent?.birthday &&
            dateFormatActor?.format(new Date(actorContent?.birthday))}
        </li>
      )}
      <li className="ml-6 flex items-center justify-evenly md:ml-0">
        {name === "movie" || name === "tv" ? (
          <LanguageOutlinedIcon
            className="mr-2"
            sx={{ fontSize: { xs: "15px", sm: "20px" } }}
          />
        ) : (
          ""
        )}
        {name === "person" && (
          <WorkspacePremiumIcon
            className="mr-2"
            sx={{ fontSize: { xs: "15px", sm: "20px" } }}
          />
        )}
        <span className="capitalize">
          {name === "movie" && content?.original_language}
          {name === "tv" && tvContent?.original_language}
          {name === "person" && actorContent?.known_for_department}
        </span>
      </li>
      {content?.runtime === 0 || tvContent?.number_of_episodes === 0 ? (
        ""
      ) : (
        <li className="ml-6 flex items-center justify-evenly rounded-md md:ml-0 lg:ml-3 xl:bg-gradient-to-tr xl:from-stone-400/50 xl:to-stone-300/20 xl:px-5 xl:py-2">
          {name === "movie" && (
            <>
              <DirectionsRunIcon
                className="mr-2"
                sx={{ fontSize: { xs: "15px", sm: "20px" } }}
              />
              <span className="lg:text-sm">
                {`${Math.trunc((content?.runtime / 60) * 100) / 100} mins`}
              </span>
            </>
          )}
          {name === "tv" && (
            <>
              <SmartDisplayIcon
                className="mr-2"
                sx={{ fontSize: { xs: "15px", sm: "20px" } }}
              />
              <span className="lg:text-sm">
                {`${tvContent?.number_of_episodes} episodes`}
              </span>
            </>
          )}
          {name === "person" && actorContent?.place_of_birth && (
            <>
              <PlaceIcon
                className="mr-2"
                sx={{ fontSize: { xs: "15px", sm: "20px" } }}
              />
              <span className="lg:text-sm">
                {`${actorContent?.place_of_birth?.split(",").at(1)}`}
              </span>
            </>
          )}
        </li>
      )}
    </ul>
  );
};

export { TrailerTags };
