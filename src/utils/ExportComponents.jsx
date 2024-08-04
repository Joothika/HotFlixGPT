export { default as AuthHeader } from "../components/authentication/AuthHeader";
export { default as SignInOrSignOut } from "../components/authentication/SignInOrSignOut";
export { default as RootContent } from "../components/RootPage/RootContent";
export { default as FormInput } from "../components/authentication/FormInput";
export { default as FormButton } from "../components/authentication/FormButton";
export { default as FormHeader } from "../components/authentication/FormHeader";
export { default as FormFooter } from "../components/authentication/FormFooter";
export { default as Error } from "../components/authentication/Error";

/**** DASHBOARD SHOW ****/

export { MenuBar } from "../components/Dashboard/MenuBar";
export { HomePage } from "../Pages/HomePage";
export { MenuIcons } from "../components/Dashboard/MenuIcons";
export { MenuIcon } from "../components/Dashboard/MenuIcon";
export { HeaderTrailer } from "../components/Dashboard/HeaderTrailer";
export { HomePageContainer } from "../components/Dashboard/container/HomePageContainer";
export { GenreMovieContainer } from "../components/Dashboard/container/GenreMovieContainer";
export { GenreTvContainer } from "../components/Dashboard/container/GenreTvContainer";
export { TrendingAllContainer } from "../components/Dashboard/container/TrendingAllContainer";
export { ComingSoonContainer } from "../components/Dashboard/container/ComingSoonContainer";
export { TopRatedContainer } from "../components/Dashboard/container/TopRatedContainer";
export { PopularActorContainer } from "../components/Dashboard/container/PopularActorContainer";
export { MobileHomeLastContainer } from "../components/Dashboard/container/MobileHomeLastContainer";

// export { PopularGenreContainer } from "../components/Dashboard/container/PopularGenreContainer";

/****** MOVIE DASHBOARD SHOW ******/
export { default as MovieDashboardTrailer } from "../components/Movies/Trailer/MovieDashboardTrailer";
export { default as MoviePageContainer } from "../components/Movies/container/MoviePageContainer";
export { NowPlayingContainer } from "../components/Movies/container/NowPlayingContainer";
export { PopularMovieContainer } from "../components/Movies/container/PopularMovieContainer";
export { TopRatedMovieContainer } from "../components/Movies/container/TopRatedMovieContainer";
export { TrendyMovieContainer } from "../components/Movies/container/TrendyMovieContainer";
export { UpcomingMovieContainer } from "../components/Movies/container/UpcomingMovieContainer";

/****** TV DASHBOARD SHOW *****/
export { default as TvDashboardTrailer } from "../components/TvShows/Trailer/TvDashboardTrailer";
export { default as TvPageContainer } from "../components/TvShows/container/TvPageContainer";
export { AiringTodayContainer } from "../components/TvShows/container/AiringTodayContainer";
export { OnTheAirContainer } from "../components/TvShows/container/OnTheAirContainer";
export { PopularTvContainer } from "../components/TvShows/container/PopularTvContainer";
export { TopRatedTvContainer } from "../components/TvShows/container/TopRatedTvContainer";
export { TrendingTvContainer } from "../components/TvShows/container/TrendingTvContainer";

/****** DETAILS CONTAINER ******/
export { default as DetailsTrailer } from "../components/Details/Trailer/DetailsTrailer";
export { Trailer } from "../components/Details/Trailer/Trailer";
export { Poster } from "../components/Details/Trailer/Poster";
export { TrailerOrPosterContent } from "../components/Details/Trailer/TrailerOrPosterContent";
export { TrailerLogo } from "../components/Details/Trailer/TrailerLogo";
export { TrailerTitle } from "../components/Details/Trailer/TrailerTitle";
export { TrailerTags } from "../components/Details/Trailer/TrailerTags";
export { TrailerOverview } from "../components/Details/Trailer/TrailerOverview";
export { LearnMore } from "../components/Details/Trailer/LearnMore";

/******* COMMON CONTAINER ******/
export { default as ReactPlayerTrailer } from "../components/Trailer/ReactPlayerTrailer";
export { default as TrailerContent } from "../components/Trailer/TrailerContent";
export { EachContainer } from "../components/container/EachContainer";
export { EachHeaderContainer } from "../components/container/EachHeaderContainer";
export { EachItemContainer } from "../components/container/EachItemContainer";

export { notifySignIn } from "../components/authentication/Error";
export { notifySignUp } from "../components/authentication/Error";
export { notifySuccessSignIn } from "../components/authentication/SuccessToast";
export { notifySuccessSignUp } from "../components/authentication/SuccessToast";

/****** REUSABLE UI COMPONENTS *****/
export { default as Background } from "./Background";
export { default as Button } from "./Button";
export { default as InputBox } from "./InputBox";

/****** ALL IMAGES *****/
export { default as PRIMARY_LOGO } from "../../public/images/SECONDARY LOGO.png";
export { DASHBOARD_LOGO } from "../../public/images/DASHBOARD LOGO.png";

/****** ALL PAGES *****/
export { default as RootPage } from "../Pages/RootPage";
export { default as AuthenticationPage } from "../Pages/AuthenticationPage";
export { default as DashboardPage } from "../Pages/DashboardPage";
export { default as SearchPage } from "../Pages/SearchPage";
export { default as MoviesPage } from "../Pages/MoviesPage";
export { default as TvShowsPage } from "../Pages/TvShowsPage";
export { default as ProfilePage } from "../Pages/ProfilePage";
export { default as DetailsPage } from "../Pages/DetailsPage";

/****** ALL CUSTOM HOOKS *****/
export { default as useToggleSignInForm } from "../hooks/useToggleSignInForm";
export { default as useReferenceAndDispatchSignUp } from "../hooks/useReferenceAndDispatchSignUp";
export { default as useValidateAuthentication } from "../hooks/useValidateAuthentication";
export { default as useSignUpWithFirebase } from "../services/useSignUpWithFirebase";
export { default as useSignInWithFirebase } from "../services/useSignInWithFirebase";
export { default as useGoogleSignInWithFirebase } from "../services/useGoogleSignInWithFirebase";
export { default as useUserActiveStatus } from "../hooks/useUserActiveStatus";

/****** ALL API HOOKS *****/

export { usetFetchTrailer } from "../services/useFetchDashboardShow";
export { useFetchConfiguration } from "../services/useFetchDashboardShow";
export { useFetchDiscover } from "../services/useFetchDashboardShow";
export { useFetchTrending } from "../services/useFetchDashboardShow";
export { useFetchGenre } from "../services/useFetchDashboardShow";
export { useFetchMovieOrTvInfo } from "../services/useFetchMoviesOrTvShows";
export { useFetchMoviesOrTvDashboardShow } from "../services/useFetchMoviesOrTvShows";
export { useFetchActors } from "../services/useFetchActors";

/****** ALL REDUX STORE *****/
export { getUserEmail } from "../store/userSlice";
export { getUserName } from "../store/userSlice";
export { getUserPassword } from "../store/userSlice";
export { getUserPhoneNumber } from "../store/userSlice";
export { setErrorSignIn } from "../store/userSlice";
export { setErrorSignUp } from "../store/userSlice";
export { UserActiveStatus } from "../store/userSlice";

export { onhoverMenu } from "../store/dashboardSlice";
export { onShowNowPlayingMovies } from "../store/dashboardSlice";
export { onShowNowPlayingTrailer } from "../store/dashboardSlice";
export { onDispayTrailer } from "../store/dashboardSlice";
export { onTrendingAll } from "../store/dashboardSlice";
export { onShowTrendingAllTrailer } from "../store/dashboardSlice";
export { onGetGenreMovieList } from "../store/dashboardSlice";
export { onGetGenreTvList } from "../store/dashboardSlice";
export { onShowGenreMovies } from "../store/dashboardSlice";
export { onShowGenreTv } from "../store/dashboardSlice";

export { onShowUpcomingMovies } from "../store/movieSlice";
export { onShowPopularMovies } from "../store/movieSlice";
export { onShowTopRatedMovies } from "../store/movieSlice";
export { onShowTrendingMovies } from "../store/movieSlice";

export { onShowTopRatedShows } from "../store/TvShowSlice";
export { onShowAiringTodayShows } from "../store/TvShowSlice";
export { onShowOnTheAirShows } from "../store/TvShowSlice";
export { onShowPopularShows } from "../store/TvShowSlice";
export { onShowTrendingShows } from "../store/TvShowSlice";
export { onShowUpcomingShows } from "../store/TvShowSlice";

export { onShowPopularActors } from "../store/actorSlice";

export { onDisplayTrailer } from "../store/detailsDisplaySlice";
export { onDisplayPoster } from "../store/detailsDisplaySlice";
export { onDisplayTrailerOrPosterContent } from "../store/detailsDisplaySlice";
