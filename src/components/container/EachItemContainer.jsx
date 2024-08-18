import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { TMDB_TEMPIMG_URL, TMDB_IMG_URL } from "../../utils/constants";

const EachItemContainer = ({ item, searchItem, type, recommendation }) => {
  const { name } = useParams();
  const movie = "movie";
  const tv = "tv";
  const person = "person";
  let languageNames = new Intl.DisplayNames(["en"], { type: "language" });

  if (searchItem) {
    if (!searchItem?.poster_path) return;
    return (
      <NavLink
        to={
          searchItem?.original_title
            ? `/dashboard/${movie}/${searchItem?.id}`
            : `/dashboard/${tv}/${searchItem?.id}`
        }
      >
        <img
          src={
            searchItem?.poster_path
              ? `${TMDB_IMG_URL}${searchItem?.poster_path}`
              : `${TMDB_TEMPIMG_URL}`
          }
          className="rounded- flex aspect-video h-[7rem] w-[15rem] rounded-sm object-cover object-left-top shadow-sm shadow-white/20 md:h-[9.5rem] md:w-[17.5rem] md:rounded-md lg:h-[10.5rem] xl:h-[10rem] xl:px-0"
        />
        <h1 className="ml-2 mr-2 mt-2 text-[0.6rem] tracking-wide text-white/90 md:mt-4 md:text-xs lg:text-sm">
          {searchItem?.original_title ||
            searchItem?.original_name ||
            searchItem?.name}
        </h1>
        <ul className="ml-2 mt-1 flex text-[0.5rem] text-stone-400 md:mt-2 md:text-xs">
          <li className="capitalize tracking-wide">
            {searchItem?.release_date?.split("-").at(0) ||
              searchItem?.first_air_date?.split("-").at(0) ||
              searchItem?.known_for_department}
          </li>
          <li className="ml-4 capitalize tracking-wide">
            {languageNames?.of(searchItem?.original_language)}
          </li>
        </ul>
      </NavLink>
    );
  }

  if (recommendation) {
    return (
      <NavLink
        to={
          recommendation?.original_title
            ? `/dashboard/${movie}/${recommendation?.id}`
            : `/dashboard/${tv}/${recommendation?.id}`
        }
      >
        <img
          src={
            recommendation?.poster_path
              ? `${TMDB_IMG_URL}${recommendation?.poster_path}`
              : `${TMDB_TEMPIMG_URL}`
          }
          className="aspect-video h-[11rem] max-w-[8.5rem] rounded-sm object-cover shadow-sm shadow-white/20 sm:h-[9.2rem] sm:max-w-[7.2rem] md:h-[10rem] md:max-w-[7.9rem] lg:h-[11.5rem] lg:max-w-[8.5rem] lg:rounded-md xl:h-[15rem] xl:max-w-[10rem]"
        />
      </NavLink>
    );
  }

  if (item?.profile_path)
    return (
      <NavLink to={`/dashboard/${person}/${item?.id}`}>
        <img
          src={
            item?.profile_path
              ? `${TMDB_IMG_URL}${item?.profile_path}`
              : `${TMDB_TEMPIMG_URL}`
          }
          className="flex h-[9.4rem] w-[9rem] rounded-sm object-cover px-[2px] shadow-sm shadow-white/20 sm:h-[9.5rem] sm:w-[7.5rem] sm:px-1 md:h-[11rem] md:w-[9rem] lg:h-[12rem] lg:w-[10rem] lg:rounded-md xl:h-[13rem] xl:w-[10rem] xl:px-0"
        />
      </NavLink>
    );

  if (item.poster_path) {
    return (
      <>
        <NavLink
          to={
            item?.original_title
              ? `/dashboard/${movie}/${item?.id}`
              : `/dashboard/${tv}/${item?.id}`
          }
        >
          <img
            src={
              item?.poster_path
                ? `${TMDB_IMG_URL}${item?.poster_path}`
                : `${TMDB_TEMPIMG_URL}`
            }
            className="flex h-[9.4rem] w-[9rem] rounded-sm object-cover px-[2px] shadow-sm shadow-white/20 sm:h-[9.5rem] sm:w-[7.5rem] sm:px-1 md:h-[11rem] md:w-[9rem] lg:h-[12rem] lg:w-[10rem] lg:rounded-md xl:h-[13rem] xl:w-[10rem] xl:px-0"
          />
        </NavLink>
      </>
    );
  }

  return (
    <NavLink
      to={
        item?.original_title
          ? `/dashboard/${movie}/${item?.id}`
          : `/dashboard/${tv}/${item?.id}`
      }
      className="h-[9.4rem] max-w-[9rem] bg-gradient-to-tr from-red-500 to-white/10 px-[2px] sm:px-1 xl:h-[13rem] xl:w-[10rem] xl:px-0"
    >
      <h1 className="flex h-[9.4rem] max-w-[9rem] items-center justify-center rounded-sm bg-gradient-to-tr from-red-500 to-blue-500 object-cover px-[2px] text-lg tracking-wide shadow-sm shadow-white/20 sm:h-[9.5rem] sm:max-w-[7.5rem] sm:px-1 md:h-[11rem] md:max-w-[9rem] lg:h-[12rem] lg:max-w-[10rem] lg:rounded-md xl:h-[13rem] xl:max-w-[10rem] xl:px-0">
        {item.name}
      </h1>
    </NavLink>
  );
};

export { EachItemContainer };
