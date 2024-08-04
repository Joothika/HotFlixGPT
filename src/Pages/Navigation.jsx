import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {
  DashboardPage,
  AuthenticationPage,
  MoviesPage,
  HomePage,
  TvShowsPage,
  SearchPage,
  ProfilePage,
} from "../utils/ExportComponents";

const LoginNavigation = ({ children }) => {
  const { userActive } = useSelector((state) => state.userReducer);
  if (userActive) return <Navigate to={"/dashboard"} replace />;
  else return children;
};

export default LoginNavigation;

export const DashBoardNavigation = () => {
  const { userActive } = useSelector((state) => state.userReducer);
  if (userActive) return <DashboardPage />;
  else return <Navigate to={"/auth"} />;
};

export const HomePageNavigation = () => {
  const { userActive } = useSelector((state) => state.userReducer);
  if (userActive) return <HomePage />;
  else return <Navigate to={"/auth"} />;
};

export const SearchPageNavigation = () => {
  const { userActive } = useSelector((state) => state.userReducer);
  if (userActive) return <SearchPage />;
  else return <Navigate to={"/auth"} />;
};

export const MoviePageNavigation = () => {
  const { userActive } = useSelector((state) => state.userReducer);
  if (userActive) return <MoviesPage />;
  else return <Navigate to={"/auth"} />;
};

export const TvShowsPageNavigation = () => {
  const { userActive } = useSelector((state) => state.userReducer);
  if (userActive) return <TvShowsPage />;
  else return <Navigate to={"/auth"} />;
};

export const ProfilePageNavigation = () => {
  const { userActive } = useSelector((state) => state.userReducer);
  if (userActive) return <ProfilePage />;
  else return <Navigate to={"/auth"} />;
};
