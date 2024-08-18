import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { KNOWN_LANGUAGES, RELATED_WORDS } from "../../../../utils/constants";

const OverviewKeywords = () => {
  const { keywords } = useSelector((state) => state.detailsReducer);
  const { name } = useParams();
  if (!keywords) return;
  return (
    <>
      {keywords.length > 0 ? (
        <ul className="flex flex-wrap items-center">
          <h1 className="mr-2 text-xs tracking-wider text-yellow-500 md:text-sm lg:text-[1rem]">
            {name === "movie" || name === "tv" ? `${RELATED_WORDS}` : ""}
            {name === "person" && `${KNOWN_LANGUAGES}`}
          </h1>
          {keywords?.map((eachword) => (
            <li className="my-1 mr-2 flex" key={eachword.id}>
              <span className="rounded-md bg-gradient-to-tr from-stone-400/50 to-stone-300/20 px-3 py-1 text-center text-[0.7rem] tracking-wide text-stone-100/70 lg:mr-2 lg:px-4 lg:py-1 lg:text-[0.8rem] xl:text-[0.9rem]">
                {name === "movie" || name === "tv"
                  ? eachword.name
                  : eachword.english_name}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </>
  );
};

export { OverviewKeywords };
