import React from "react";
import { DetailMenuBar } from "../../../utils/ExportComponents";
import { Outlet } from "react-router-dom";

const DetailsContainer = () => {
  return (
    <section className="h-screen bg-black sm:sticky sm:z-[4] sm:ml-[7rem]">
      <DetailMenuBar />
      <Outlet />
    </section>
  );
};

export { DetailsContainer };
