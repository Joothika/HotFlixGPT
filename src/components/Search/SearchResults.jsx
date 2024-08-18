import React from "react";
import { useSelector } from "react-redux";
import { SearchAnimation } from "../../utils/ExportComponents";
import { EachItemContainer } from "../container/EachItemContainer";

const SearchResults = () => {
  const { movieSearchResults, tvSearchResults, personSearchResults } =
    useSelector((state) => state.searchReducer);
  if (
    movieSearchResults.length === 0 ||
    tvSearchResults.length === 0 ||
    personSearchResults.length === 0
  ) {
    return <SearchAnimation />;
  }
  console.log(movieSearchResults.length, "movietest");
  return (
    <main className="mt-[3rem] grid grid-cols-2 justify-items-center gap-x-1 gap-y-6 bg-black sm:grid-cols-3 md:mt-[5rem] md:gap-x-2 md:gap-y-10 lg:grid-cols-4 xl:grid-cols-5">
      {movieSearchResults?.map((eachmovie) => (
        <EachItemContainer searchItem={eachmovie} />
      ))}
      {tvSearchResults?.map((eachmovie) => (
        <EachItemContainer searchItem={eachmovie} />
      ))}
      {personSearchResults?.map((eachmovie) => (
        <EachItemContainer searchItem={eachmovie} />
      ))}
    </main>
  );
};

export { SearchResults };
