import React, { useState } from "react";
import {
  useFetchMovieSearch,
  useFetchPersonSearch,
  useFetchTvSearch,
} from "../../utils/ExportComponents";
const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  useFetchMovieSearch(searchQuery);
  useFetchTvSearch(searchQuery);
  useFetchPersonSearch(searchQuery);
  return (
    <section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 102 102"
        fill="none"
        className="absolute left-[2.3rem] top-[2.3rem] h-10 w-3 sm:left-[8rem] md:left-[8.6rem] lg:top-[2.8rem] lg:w-6"
      >
        <path
          d="M73.76 73.76L96.68 96.68"
          stroke="#c0c0c0"
          strokeWidth="9.82286"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5 44.2914C5 65.9914 22.5914 83.5829 44.2914 83.5829C55.1601 83.5829 64.9987 79.1698 72.1117 72.0377C79.2005 64.9306 83.5829 55.1228 83.5829 44.2914C83.5829 22.5914 65.9914 5 44.2914 5C22.5914 5 5 22.5914 5 44.2914Z"
          stroke="#c0c0c0"
          strokeWidth="9.82286"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search for Movies, Tvshows and more"
        className="h-12 w-full rounded-lg border-none bg-gray-500/50 indent-10 text-white outline-none placeholder:text-xs placeholder:tracking-wide placeholder:sm:text-sm placeholder:sm:font-semibold lg:h-16 lg:indent-[4.5rem] placeholder:lg:text-lg"
        value={searchQuery}
        onChange={(e) => {
          e.preventDefault();
          setSearchQuery(e.target.value);
        }}
      />
    </section>
  );
};

export { SearchBar };
