import React from "react";
import { useParams } from "react-router-dom";
import {
  DetailsContainer,
  DetailsTrailer,
  useFetchActorsShow,
  useFetchImdbShow,
  useFetchMovieOrTvInfo,
} from "../utils/ExportComponents";

const DetailsPage = () => {
  const { id, name } = useParams();
  console.log(name);
  if (name === "movie") {
    useFetchMovieOrTvInfo("/movie", `/${id}`);
  }
  if (name === "tv") {
    useFetchMovieOrTvInfo("/tv", `/${id}`);
  }
  if (name === "person") {
    useFetchActorsShow("/person", `/${id}`);
  }
  return (
    <main className="relative w-screen overflow-x-hidden bg-black">
      <section className="sm:mt-[-5rem]">
        <DetailsTrailer />
        <DetailsContainer />
      </section>
    </main>
  );
};

export default DetailsPage;
