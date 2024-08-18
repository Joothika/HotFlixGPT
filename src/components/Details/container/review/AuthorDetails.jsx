import React, { useState } from "react";
import GradeIcon from "@mui/icons-material/Grade";

const AuthorDetails = ({ eachauthor, setIndex }) => {
  const dateFormat = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  function handleClick() {
    setIndex();
  }
  return (
    <ul className="ml-4">
      <li className="flex items-center">
        <h1 className="text-[0.6rem] tracking-wider text-white sm:text-xs lg:text-sm">
          {eachauthor.author}
        </h1>
        <small className="ml-2 flex items-center text-[0.5rem] text-yellow-500 sm:text-[0.7rem] lg:text-[0.9rem]">
          <GradeIcon sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }} />
          <span className="ml-[0.1rem]">
            {eachauthor?.author_details.rating}
          </span>
        </small>
      </li>
      <li className="mt-2 flex w-36 items-center justify-between text-[0.6rem] sm:w-40 sm:text-[0.7rem] lg:text-[0.9rem]">
        <span className="text-stone-200/40">
          {dateFormat.format(new Date(`${eachauthor.updated_at}`))}
        </span>
        <span className="flex items-center rounded-sm bg-green-500/80 px-2 py-[0.1rem] text-[0.5rem] tracking-wider sm:px-2 sm:text-[0.7rem]">
          <button onClick={handleClick}>view</button>
        </span>
      </li>
    </ul>
  );
};

export { AuthorDetails };
