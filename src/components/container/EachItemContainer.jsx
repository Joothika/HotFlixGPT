import React from "react";
import { NavLink } from "react-router-dom";
import { TMDB_TEMPIMG_URL, TMDB_IMG_URL } from "../../utils/constants";

const EachItemContainer = ({ item, genreImages }) => {
  if (item.profile_path)
    return (
      <NavLink to={`/dashboard/details/${item?.id}`}>
        <img
          src={
            item?.profile_path
              ? `${TMDB_IMG_URL}${item?.profile_path}`
              : `${TMDB_TEMPIMG_URL}`
          }
          className="flex aspect-video h-[9rem] max-w-[7.2rem] rounded-sm object-cover shadow-sm shadow-white/20 sm:h-[13rem] sm:max-w-[9.5rem] lg:rounded-md xl:h-[16.2rem] xl:max-w-[12.7rem]"
        />
      </NavLink>
    );

  if (item.poster_path)
    return (
      <>
        <NavLink to={`/dashboard/details/${item?.id}`}>
          <img
            src={
              item?.poster_path
                ? `${TMDB_IMG_URL}${item?.poster_path}`
                : `${TMDB_TEMPIMG_URL}`
            }
            className="flex h-[9.2rem] w-[7.2rem] rounded-sm object-cover shadow-sm shadow-white/20 sm:h-[14rem] sm:w-[11rem] md:h-[17rem] md:w-[12.5rem] lg:h-[15rem] lg:w-[11rem] lg:rounded-md xl:h-[16.2rem] xl:w-[12.7rem]"
          />
        </NavLink>
      </>
    );

  return (
    <NavLink
      to={`/dashboard/details/${item?.id}`}
      className="h-[9rem] max-w-[7.2rem] bg-gradient-to-tr from-red-500 to-white/10 xl:h-[16.2rem] xl:w-[12.5rem]"
    >
      <h1 className="flex h-[9rem] max-w-[7.2rem] items-center justify-center rounded-sm bg-gradient-to-tr from-red-500 to-blue-500 object-cover text-lg tracking-wide shadow-sm shadow-white/20 sm:h-[13rem] sm:max-w-[9.5rem] lg:rounded-md xl:h-[16.2rem] xl:max-w-[12.5rem]">
        {item.name}
      </h1>
    </NavLink>
  );
};

export { EachItemContainer };
