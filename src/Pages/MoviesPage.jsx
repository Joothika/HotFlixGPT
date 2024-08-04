import React from "react";
import {
  MovieDashboardTrailer,
  MoviePageContainer,
} from "../utils/ExportComponents";

const MoviesPage = () => {
  return (
    <main className="relative w-screen overflow-x-hidden bg-black">
      <section className="mb-24 sm:mt-[-5rem]">
        <MovieDashboardTrailer />
        <MoviePageContainer />
      </section>
    </main>
  );
};

export default MoviesPage;
