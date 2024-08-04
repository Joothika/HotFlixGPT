import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

import {
  HomePage,
  MoviesPage,
  ProfilePage,
  RootPage,
  SearchPage,
  TvShowsPage,
  useUserActiveStatus,
  RootPage,
  AuthenticationPage,
  DashboardPage,
  DetailsPage,
} from "./utils/ExportComponents";
import LoginNavigation, {
  HomePageNavigation,
  MoviePageNavigation,
  ProfilePageNavigation,
  SearchPageNavigation,
  TvShowsPageNavigation,
} from "./Pages/Navigation.jsx";

// let RootPage = lazy(() => import("./Pages/RootPage.js"));
// let AuthenticationPage = lazy(() => import("./Pages/AuthenticationPage.js"));
// let DashboardPage = lazy(() => import("./Pages/DashboardPage.js"));

function App() {
  useUserActiveStatus();
  const route = createBrowserRouter([
    {
      path: "/",
      element: (
        <LoginNavigation>
          {/* <Suspense fallback={"loading.."}> */}
          <RootPage />
          {/* </Suspense> */}
        </LoginNavigation>
      ),
    },
    {
      path: "/auth",
      element: (
        <LoginNavigation>
          {/* <Suspense fallback={"loading.."}> */}
          <AuthenticationPage />
          {/* </Suspense> */}
        </LoginNavigation>
      ),
    },
    {
      path: "/dashboard",
      element: (
        // <Suspense fallback={"loading dashboard...."}>
        <DashboardPage />
        // </Suspense>
      ),
      children: [
        {
          path: "/dashboard/details/:id",
          element: <DetailsPage />,
        },
        {
          path: "/dashboard",
          element: (
            <HomePageNavigation>
              <HomePage />
            </HomePageNavigation>
          ),
        },
        {
          path: "/dashboard/search",
          element: (
            <SearchPageNavigation>
              <SearchPage />
            </SearchPageNavigation>
          ),
        },
        {
          path: "/dashboard/movies",
          element: (
            <MoviePageNavigation>
              <MoviesPage />
            </MoviePageNavigation>
          ),
        },
        {
          path: "/dashboard/tvshows",
          element: (
            <TvShowsPageNavigation>
              <TvShowsPage />
            </TvShowsPageNavigation>
          ),
        },
        {
          path: "/dashboard/profile",
          element: (
            <ProfilePageNavigation>
              <ProfilePage />
            </ProfilePageNavigation>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={route}></RouterProvider>;
}

export default App;
