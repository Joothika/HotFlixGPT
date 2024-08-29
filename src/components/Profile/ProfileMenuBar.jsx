import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

const ProfileMenuBar = () => {
  const navigate = useNavigate();
  return (
    <ul className="row-span-1 flex items-center text-white">
      <NavLink to={"/dashboard/profile/favourites"}>
        <li
          className="rounded-md bg-red-500/30 px-4 py-3 tracking-wider lg:px-8 lg:py-4"
          onClick={() => navigate(`/dashboard/profile/favourites`)}
        >
          <span className="text-xs lg:text-sm">Favourite</span>
        </li>
      </NavLink>

      <NavLink to={`/dashboard/profile/watchlist`}>
        <li className="ml-6 rounded-md bg-red-500/30 px-4 py-3 text-xs tracking-wide lg:ml-8 lg:px-8 lg:py-4">
          <span className="text-xs lg:text-sm">Watchlist</span>
        </li>
      </NavLink>
    </ul>
  );
};

export { ProfileMenuBar };
