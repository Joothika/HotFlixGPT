import React from "react";
import { useSelector } from "react-redux";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import { useParams } from "react-router-dom";

const RatingAndOverview = () => {
  const { content, tvContent, posters, actorContent } = useSelector(
    (state) => state.detailsReducer,
  );
  const { name } = useParams();
  return (
    <>
      {content?.vote_average === 0 ||
      tvContent?.vote_average === 0 ||
      posters[0]?.vote_average === 0 ? (
        ""
      ) : (
        <h2 className="my-2 flex items-center text-xs sm:my-3 lg:text-sm">
          <StarBorderPurple500OutlinedIcon
            sx={{ fontSize: { xs: "1.2rem" }, color: { xs: "yellow" } }}
          />

          <span className="ml-1">
            {name === "movie" && `${content?.vote_average?.toFixed(1)} / 10`}
            {name === "tv" && `${tvContent?.vote_average?.toFixed(1)} / 10`}
            {name === "person" &&
              `${posters[0]?.vote_average?.toFixed(1)} / 10`}
          </span>
        </h2>
      )}

      {content?.overview === " " ||
      tvContent?.overview === " " ||
      actorContent?.biography === " " ? (
        ""
      ) : (
        <p className="my-4 text-xs leading-[1.1rem] tracking-wide text-stone-500 sm:my-4 lg:my-6 lg:text-[1rem] lg:leading-6">
          {name === "movie" && `${content.overview}`}
          {name === "tv" && `${tvContent.overview}`}
          {name === "person" && `${actorContent.biography}`}
        </p>
      )}
    </>
  );
};

export { RatingAndOverview };
