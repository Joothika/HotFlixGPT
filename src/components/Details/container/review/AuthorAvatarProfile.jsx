import React from "react";
import { PROFILE_DUMMY_IMG, TMDB_IMG_URL } from "../../../../utils/constants";

const AuthorAvatarProfile = ({ eachauthor }) => {
  return (
    <img
      src={
        eachauthor?.author_details?.avatar_path
          ? `${TMDB_IMG_URL}${eachauthor?.author_details?.avatar_path}`
          : PROFILE_DUMMY_IMG
      }
      className="h-10 w-10 rounded-full object-cover lg:h-12 lg:w-12"
    />
  );
};

export { AuthorAvatarProfile };
