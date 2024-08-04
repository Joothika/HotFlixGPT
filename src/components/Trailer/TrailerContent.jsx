import React from "react";
import StarBorderPurple500OutlinedIcon from "@mui/icons-material/StarBorderPurple500Outlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";

const TrailerContent = ({ movie }) => {
  return (
    <>
      <section className="absolute left-[7rem] top-20 z-[2] w-[35%]">
        <div className="before:absolute before:h-40 before:w-40 before:rounded-full before:bg-black/40">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`}
            className="h-40 w-40 rounded-full object-cover shadow-lg shadow-white/10"
          />
        </div>
        <h1 className="my-6 text-3xl font-semibold text-white">
          {movie.original_title}
        </h1>
        <ul className="my-4 flex w-80 items-center justify-between text-lg text-stone-50/50 hover:text-stone-200">
          <li className="flex items-center justify-evenly px-3 py-2">
            <VerifiedOutlinedIcon className="mr-2" />
            {movie?.release_date.split("-")[0]}
          </li>
          <li className="flex items-center justify-evenly px-3 py-2">
            <LanguageOutlinedIcon className="mr-2" />
            {movie?.original_language.charAt(0).toUpperCase() +
              movie.original_language.slice(1)}
          </li>
          <li className="ml-3 flex items-center justify-evenly rounded-md bg-gradient-to-tr from-stone-400/50 to-stone-300/20 px-3 py-2">
            <StarBorderPurple500OutlinedIcon className="mr-2" />
            <span>{Math.trunc((movie?.vote_average / 2) * 100) / 100}</span>
          </li>
        </ul>
        <p className="my-8 text-justify tracking-tight text-stone-50/50 hover:text-stone-200">
          {movie?.overview}
        </p>
      </section>
    </>
  );
};

export default TrailerContent;
