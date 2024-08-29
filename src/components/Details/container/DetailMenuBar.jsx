import React, { useState } from "react";
import { NavLink, useParams } from "react-router-dom";

const DetailMenuBar = () => {
  const { id, name } = useParams();

  return (
    <ul
      className={`lg: flex h-10 items-center justify-start px-2 text-xs tracking-wide text-white sm:my-4 sm:overflow-x-hidden sm:bg-transparent sm:bg-none sm:px-0 sm:pr-4 sm:text-sm md:w-3/4 md:text-[0.95rem] lg:w-4/6 lg:text-[1.1rem] xl:w-2/4 xl:text-lg`}
    >
      <NavLink
        to={`/dashboard/${name}/${id}/overview`}
        style={({ isActive }) => ({
          borderBottom: isActive ? "2px solid red" : "",
        })}
        className="ml-2 py-1 sm:ml-0"
      >
        <li>Overview</li>
      </NavLink>
      {name === "person" ? (
        ""
      ) : (
        <>
          <NavLink
            to={`/dashboard/${name}/${id}/reviews`}
            style={({ isActive }) => ({
              borderBottom: isActive ? "2px solid red" : "",
            })}
            className="ml-6 py-1 sm:ml-10 md:ml-20 lg:ml-16"
          >
            <li>Reviews</li>
          </NavLink>
          <NavLink
            to={`/dashboard/${name}/${id}/trailer`}
            style={({ isActive }) => ({
              borderBottom: isActive ? "2px solid red" : "",
            })}
            className="ml-6 py-1 sm:ml-10 md:ml-20 lg:ml-16"
          >
            <li>Trailers</li>
          </NavLink>
        </>
      )}
      <NavLink
        to={`/dashboard/${name}/${id}/recommendations`}
        style={({ isActive }) => ({
          borderBottom: isActive ? "2px solid red" : "",
        })}
        className="ml-6 py-1 sm:ml-12 md:ml-20 lg:ml-16"
      >
        <li>Recommendations</li>
      </NavLink>
    </ul>
  );
};

export { DetailMenuBar };
