import { TMDB_IMG_URL } from "../../../utils/constants";
import {
  ReactPlayerTrailer,
  useFetchMoviesOrTvDashboardShow,
  usetFetchTrailer,
} from "../../../utils/ExportComponents";
import { useSelector } from "react-redux";

const TvDashboardTrailer = () => {
  useFetchMoviesOrTvDashboardShow("/movie/now_playing");
  usetFetchTrailer("/movie/now_playing");
  const { nowplayingMovies, nowplayingTrailer } = useSelector(
    (state) => state.dashboardReducer,
  );
  return (
    <>
      <section className="hidden overflow-y-hidden before:absolute before:top-0 before:z-[1] before:w-full before:overflow-x-hidden before:bg-gradient-to-bl before:from-white/20 before:to-black sm:block before:lg:h-[130vh]">
        {nowplayingTrailer?.slice(0, 1).map((trailer, i) => (
          <ReactPlayerTrailer key={"768"} trailer={trailer?.key} />
        ))}
        {/* { {nowplayingMovies?.slice(0, 1).map((movie, i) => (
            <TrailerContent key={movie.id} movie={movie} />
          ))} */}
      </section>
      <section className="block before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-[1] before:h-[50vh] before:bg-gradient-to-b before:from-white/5 before:from-5% before:to-black/50 before:to-95% sm:hidden">
        {nowplayingMovies?.slice(0, 1).map((eachmovie) => {
          return (
            <img
              src={`${TMDB_IMG_URL}${eachmovie.backdrop_path}`}
              className="h-[50vh] w-screen object-cover"
              key={eachmovie.id}
            />
          );
        })}
      </section>
    </>
  );
};

export default TvDashboardTrailer;
