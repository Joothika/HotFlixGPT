import React from "react";
import { HeaderTrailer, HomePageContainer } from "../utils/ExportComponents";

const HomePage = () => {
  return (
    <main className="relative w-screen overflow-x-hidden bg-black">
      <section className="md:mt-[-5rem]">
        <HeaderTrailer />
        <HomePageContainer />
      </section>
    </main>
  );
};

export { HomePage };
