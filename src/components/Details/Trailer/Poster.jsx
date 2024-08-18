import React from "react";
import { useSelector } from "react-redux";
import { TMDB_IMG_URL, TMDB_TEMPIMG_URL } from "../../../utils/constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Poster = () => {
  const { posters } = useSelector((state) => state.detailsReducer);

  return (
    <>
      <section className="block before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:z-[1] before:h-[60vh] before:bg-gradient-to-b before:from-white/5 before:from-5% before:to-black before:to-95% sm:hidden before:sm:h-[50vh]">
        {posters &&
          posters?.slice(0, 1).map((eachposter, i) => {
            return (
              <div key={i}>
                <img
                  src={
                    `${TMDB_IMG_URL}${eachposter.file_path}` ||
                    `${TMDB_IMG_URL}${eachposter.poster_path}` ||
                    `${TMDB_IMG_URL}${eachposter.profile_path}`
                  }
                  className="flex h-[60vh] w-screen justify-center overflow-y-hidden object-cover sm:h-[50vh]"
                />
              </div>
            );
          })}

        {posters?.length === 0 && (
          <div>
            <img
              src={`${TMDB_TEMPIMG_URL}`}
              className="flex h-[60vh] w-screen justify-center overflow-y-hidden object-cover sm:h-[50vh]"
            />
          </div>
        )}
      </section>
    </>
  );
};

export { Poster };
