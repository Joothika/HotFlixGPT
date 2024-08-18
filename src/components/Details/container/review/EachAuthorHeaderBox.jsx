import React, { useState } from "react";
import {
  AuthorAvatarProfile,
  AuthorDetails,
  AuthorContent,
} from "../../../../utils/ExportComponents";

const EachAuthorHeaderBox = ({ eachauthor, showContent, setIndex }) => {
  // const [showContent, setShowContent] = useState(false);

  return (
    <>
      <div key={eachauthor.id} className="items-cente flex">
        <AuthorAvatarProfile eachauthor={eachauthor} />
        <AuthorDetails eachauthor={eachauthor} setIndex={setIndex} />
      </div>
      <AuthorContent eachauthor={eachauthor} showContent={showContent} />
    </>
  );
};

export { EachAuthorHeaderBox };
