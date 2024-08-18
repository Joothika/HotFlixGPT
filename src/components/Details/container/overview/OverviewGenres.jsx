import React from "react";
import { useSelector } from "react-redux";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useParams } from "react-router-dom";

const OverviewGenres = () => {
  const { genres, actordifferentnames } = useSelector(
    (state) => state.detailsReducer,
  );
  const { name } = useParams();
  return (
    <ul className="my-2 flex flex-wrap items-center">
      {(genres && name === "movie") || name === "tv"
        ? genres?.map((eachword, i) => (
            <li className="my-1 flex items-center" key={eachword.id}>
              {i === 0 ? (
                ""
              ) : (
                <FiberManualRecordIcon
                  sx={{
                    fontSize: { xs: "0.7rem", lg: "0.9rem" },
                    color: { xs: "#D22C2C" },
                    marginRight: { xs: "0.5rem" },
                  }}
                />
              )}
              <span className="rounded-md py-1 pr-3 text-center text-[0.7rem] text-stone-100/70 lg:py-3 lg:text-sm">
                {eachword.name}
              </span>
            </li>
          ))
        : ""}
      {actordifferentnames &&
        name === "person" &&
        actordifferentnames?.map((eachname, i) => (
          <li className="my-1 flex items-center" key={`name-${i}`}>
            {i === 0 ? (
              ""
            ) : (
              <FiberManualRecordIcon
                sx={{
                  fontSize: { xs: "0.7rem", lg: "0.9rem" },
                  color: { xs: "#D22C2C" },
                  marginRight: { xs: "0.5rem" },
                }}
              />
            )}
            <span className="rounded-md py-1 pr-3 text-center text-[0.7rem] text-stone-100/70 lg:py-3 lg:text-sm">
              {eachname}
            </span>
          </li>
        ))}
    </ul>
  );
};

export { OverviewGenres };
