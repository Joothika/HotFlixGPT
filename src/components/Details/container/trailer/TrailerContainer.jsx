import React from "react";
import { useSelector } from "react-redux";
import {
  NoOverviewDisplay,
  TrailerVideo,
} from "../../../../utils/ExportComponents";
import React from "react";

const TrailerContainer = () => {
  const { trailer } = useSelector((state) => state.detailsReducer);

  return (
    <section className="p-6 pb-20 text-white sm:p-0 sm:py-6 sm:pr-10 xl:w-[90%]">
      {trailer && (
        <ul>
          {trailer?.map((eachtrailer) => (
            <TrailerVideo eachtrailer={eachtrailer} key={eachtrailer.id} />
          ))}
        </ul>
      )}
      {trailer.length === 0 && (
        <NoOverviewDisplay>
          It seems like no trailer yet Released !
        </NoOverviewDisplay>
      )}
    </section>
  );
};

export { TrailerContainer };
