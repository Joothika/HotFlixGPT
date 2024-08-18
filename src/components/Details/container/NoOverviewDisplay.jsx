import React from "react";
import NotInterestedIcon from "@mui/icons-material/NotInterested";

const NoOverviewDisplay = ({children}) => {
  return (
    <>
      <h1 className="lg:my-42 my-20 flex justify-center text-stone-500 sm:my-[12rem] sm:w-[30rem] md:my-40 md:h-0 md:w-[35rem] lg:w-4/6 xl:w-[50%]">
        <div className="flex items-center">
          <NotInterestedIcon
            sx={{ fontSize: { xs: "1rem", sm: "1.1rem", xl: "1.2rem" } }}
          />
          <span className="ml-2 text-sm font-medium tracking-wide sm:text-[1rem] xl:text-lg">
            {children}
          </span>
        </div>
      </h1>
    </>
  );
};

export { NoOverviewDisplay };
