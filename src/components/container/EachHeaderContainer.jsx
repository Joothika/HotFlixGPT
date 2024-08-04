import React from "react";

const EachHeaderContainer = ({ name, type }) => {
  if (type === "genre movies")
    return (
      <h1 className="mx-2 mb-2 text-sm font-semibold tracking-wide text-stone-50/70 sm:text-lg md:text-xl lg:mb-3 lg:text-[1.3rem]">
        <span> {"Popular in "}</span>
        {name}
      </h1>
    );
  if (type === "genre shows")
    return (
      <h1 className="mx-2 mb-2 font-semibold tracking-wide text-stone-50/70 sm:text-lg md:text-xl lg:mb-3 lg:text-[1.3rem]">
        <span> {"Popular Shows in "}</span>
        {name}
      </h1>
    );

  return (
    <h1 className="mx-2 mb-2 text-sm font-semibold tracking-wide text-stone-50/70 sm:text-lg md:text-xl lg:mb-3 lg:text-[1.3rem]">
      {name}
    </h1>
  );
};

export { EachHeaderContainer };
