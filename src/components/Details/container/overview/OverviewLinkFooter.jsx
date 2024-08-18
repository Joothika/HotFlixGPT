import React from "react";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import { NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const OverviewLinkFooter = () => {
  const { content, tvContent, actorContent } = useSelector(
    (state) => state.detailsReducer,
  );
  const { name } = useParams();

  return (
    <div className="my-4 flex justify-between">
      <NavLink
        className="text-xs text-sky-500 hover:underline hover:underline-offset-4 lg:text-lg"
        to={
          name === "movie"
            ? `${"/dashboard/movies"}`
            : `${"/dashboard/tvshows"}`
        }
      >
        <ArrowLeftIcon sx={{ fontSize: { lg: "2.5rem" } }} />
        back
      </NavLink>
      {name === "movie" ||
        (name === "tv" && (
          <a
            href={
              name === "movie"
                ? ` ${content?.homepage}`
                : `${tvContent?.homepage}`
            }
            target="_blank"
            className="text-xs text-sky-500 hover:underline hover:underline-offset-4 lg:text-lg"
          >
            click here to know more
            <ArrowRightIcon sx={{ fontSize: { lg: "2.5rem" } }} />
          </a>
        ))}
      {name === "person" && actorContent?.homepage ? (
        <a
          href={actorContent?.homepage}
          target="_blank"
          className="text-xs text-sky-500 hover:underline hover:underline-offset-4 lg:text-lg"
        >
          click here to know more
          <ArrowRightIcon sx={{ fontSize: { lg: "2.5rem" } }} />
        </a>
      ) : (
        ""
      )}
    </div>
  );
};

export { OverviewLinkFooter };
