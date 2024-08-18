import Slider from "react-slick";
import {
  settingsForDashboard,
  settingsForDashboardTrailer,
} from "../../../utils/constants";
import {
  DashboardPosterContentContainer,
  ReactPlayerTrailer,
  usetFetchTrailer,
} from "../../../utils/ExportComponents";
import { useSelector } from "react-redux";

const TvDashboardTrailer = () => {
  const { airingTodayShows, airingTodayTrailer } = useSelector(
    (state) => state.TvShowReducer,
  );
  usetFetchTrailer("/tv", airingTodayShows, "airingTodayShows");
  const airingTrailer = airingTodayTrailer.filter(
    (eachtriler) => typeof eachtriler !== "undefined",
  );
  return (
    <>
      <section className="hidden overflow-y-hidden sm:block">
        <Slider {...settingsForDashboardTrailer}>
          {airingTrailer.map((trailer, i) => (
            <ReactPlayerTrailer trailer={trailer?.key} key={i} />
          ))}
        </Slider>
      </section>
      <Slider {...settingsForDashboard} className="block">
        {airingTodayShows?.slice(0, 5).map((eachmovie) => (
          <DashboardPosterContentContainer
            eachItem={eachmovie}
            key={eachmovie.id}
          />
        ))}
      </Slider>
    </>
  );
};

export default TvDashboardTrailer;
