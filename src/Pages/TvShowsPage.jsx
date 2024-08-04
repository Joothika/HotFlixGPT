import React from "react";
import { TvDashboardTrailer, TvPageContainer } from "../utils/ExportComponents";

const TvShowsPage = () => {
  return (
    <main className="relative w-screen overflow-x-hidden bg-black">
      <section className="mb-24 sm:mt-[-5rem]">
        <TvDashboardTrailer />
        <TvPageContainer />
      </section>
    </main>
  );
};

export default TvShowsPage;
