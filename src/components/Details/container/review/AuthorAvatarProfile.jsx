import React from "react";
import { TMDB_IMG_URL } from "../../../../utils/constants";

const AuthorAvatarProfile = ({ eachauthor }) => {
  return (
    <img
      src={
        eachauthor?.author_details?.avatar_path
          ? `${TMDB_IMG_URL}${eachauthor?.author_details?.avatar_path}`
          : `https://walnuteducation.com/static/core/images/icon-profile.png`
      }
      className="h-10 w-10 rounded-full object-cover lg:h-12 lg:w-12"
    />
  );
};

export { AuthorAvatarProfile };
