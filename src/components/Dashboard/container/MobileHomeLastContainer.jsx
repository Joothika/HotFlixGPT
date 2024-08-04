import React from "react";

const MobileHomeLastContainer = () => {
  return (
    <div className="mx-20 mt-10 block rounded-full bg-white/20 px-4 py-3 sm:hidden">
      <ul className="flex justify-between text-xs tracking-wider text-white">
        <li>Movies</li>
        <span>|</span>
        <li>Tv Shows</li>
        <span>|</span>
        <li>More</li>
      </ul>
    </div>
  );
};

export { MobileHomeLastContainer };
