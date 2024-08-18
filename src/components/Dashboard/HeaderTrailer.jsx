import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import {
  settingsForDashboard,
  settingsForDashboardTrailer,
} from "../../utils/constants";
import {
  DashboardPosterContentContainer,
  ReactPlayerTrailer,
  TrailerSidebar,
  useFetchTrending,
  usetFetchTrailer,
} from "../../utils/ExportComponents";

const HeaderTrailer = () => {
  const sliderRef = useRef(null);
  useFetchTrending("/trending/movie");
  useFetchTrending("/trending/tv");
  const {
    trendingMoviesTrailer,
    trendingShowsTrailer,
    trendingMovies,
    trendingShows,
  } = useSelector((state) => state.dashboardReducer);
  usetFetchTrailer("/movie", trendingMovies, "trendingMovies");
  usetFetchTrailer("/tv", trendingShows, "trendingShows");

  const trendMoviesPoster = trendingMovies
    ?.slice(0, 3)
    .map((eachmovie) => eachmovie);
  const trendShowsPoster = trendingShows
    ?.slice(0, 3)
    .map((eachshow) => eachshow);
  const combineTrendsPoster = [...trendMoviesPoster, ...trendShowsPoster];
  const trendMovieFiler = trendingMoviesTrailer
    ?.slice(0, 3)
    .map((eachmovie) => eachmovie);
  const trendShowsFiler = trendingShowsTrailer
    ?.slice(0, 3)
    .map((eachshow) => eachshow);
  const combinedTrends = [...trendMovieFiler, ...trendShowsFiler];

  return (
    <>
      <section className="relative hidden overflow-y-hidden sm:block">
        <TrailerSidebar
          combinedPoster={combineTrendsPoster}
          sliderRef={sliderRef}
        />
        <Slider {...settingsForDashboardTrailer} ref={sliderRef}>
          {combinedTrends?.map((trailer, i) => (
            <ReactPlayerTrailer trailer={trailer?.key} key={i} />
          ))}
        </Slider>
      </section>
      <Slider {...settingsForDashboard}>
        {combineTrendsPoster?.map((eachItem) => {
          return (
            <DashboardPosterContentContainer
              key={eachItem.id}
              eachItem={eachItem}
            />
          );
        })}
      </Slider>
    </>
  );
};

export { HeaderTrailer };
