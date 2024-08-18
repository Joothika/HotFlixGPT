import React from "react";
import {
  SearchAnimation,
  SearchBar,
  SearchResults,
} from "../../utils/ExportComponents";
const SearchContainer = () => {
  return (
    <div className="mt-[2rem] bg-black pb-[6rem] pl-[1.5rem] pr-[1.5rem] sm:pl-[7rem] sm:pr-[2.5rem] md:pb-[4rem] md:pl-[7.5rem] md:pr-[4rem]">
      <SearchBar />
      <SearchResults />
    </div>
  );
};

export { SearchContainer };
