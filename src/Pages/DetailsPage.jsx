import React from "react";
import { useParams } from "react-router-dom";
import {
  DetailsTrailer,
  useFetchMovieOrTvInfo,
} from "../utils/ExportComponents";

const DetailsPage = () => {
  const { id } = useParams();
  useFetchMovieOrTvInfo("/movie", `/${id}`);
  return (
    <main className="relative w-screen overflow-x-hidden bg-black">
      <section className="sm:mt-[-5rem]">
        <DetailsTrailer />
      </section>
    </main>
  );
};

export default DetailsPage;
