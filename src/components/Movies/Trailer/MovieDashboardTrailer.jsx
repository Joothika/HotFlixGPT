import Slider from "react-slick";
import {
  settingsForDashboard,
  settingsForDashboardTrailer,
  TMDB_IMG_URL,
} from "../../../utils/constants";
import {
  DashboardPosterContentContainer,
  ReactPlayerTrailer,
  TrailerSidebar,
  useFetchMoviesOrTvDashboardShow,
  usetFetchTrailer,
} from "../../../utils/ExportComponents";
import { useSelector } from "react-redux";

const MovieDashboardTrailer = () => {
  useFetchMoviesOrTvDashboardShow("/movie/now_playing");
  const { nowplayingMovies, nowplayingTrailer } = useSelector(
    (state) => state.movieReducer,
  );
  usetFetchTrailer("/movie", nowplayingMovies, "nowplayingMovies");

  return (
    <>
      <section className="relative hidden overflow-y-hidden sm:block">
        <Slider {...settingsForDashboardTrailer}>
          {nowplayingTrailer?.slice(0, 5).map((trailer, i) => (
            <ReactPlayerTrailer trailer={trailer?.key} key={i} />
          ))}
        </Slider>
      </section>
      <Slider {...settingsForDashboard} className="block sm:hidden">
        {nowplayingMovies?.slice(0, 5).map((eachmovie) => {
          console.log(eachmovie);
          return (
            <DashboardPosterContentContainer
              key={eachmovie.id}
              eachItem={eachmovie}
            />
          );
        })}
      </Slider>
    </>
  );
};

export default MovieDashboardTrailer;
