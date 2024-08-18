import React from "react";

const TrailerVideoContent = ({ eachtrailer }) => {
  const dateFormat = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <h1 className="ml-4 text-[0.7rem] tracking-wide text-stone-200/80 sm:ml-6 sm:text-sm md:text-[1rem] xl:text-[1.2rem] xl:font-semibold">
      {eachtrailer.name}
      <div className="flex w-44 justify-between text-[0.6rem] sm:w-72 sm:text-xs md:text-[1rem]">
        <h3 className="mt-4 text-stone-200/40 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12">
          {dateFormat.format(new Date(`${eachtrailer.published_at}`))}
        </h3>
        <a
          href={`https://www.youtube.com/watch?v=${eachtrailer.key}`}
          className="mt-4 cursor-pointer text-red-500 hover:underline hover:underline-offset-[3px] sm:mt-6 md:mt-8 lg:mt-10 xl:mt-12"
          target="_blank"
        >
          watch now
        </a>
      </div>
    </h1>
  );
};

export { TrailerVideoContent };
