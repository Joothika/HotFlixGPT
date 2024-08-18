import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const AuthorContent = ({ eachauthor, showContent }) => {
  return (
    <>
      {showContent && (
        <div className="px-3 py-3">
          <p className="text-justify text-[0.5rem] font-light leading-[0.8rem] tracking-wide text-stone-200/70 sm:text-[0.7rem] sm:leading-4 lg:text-[0.8rem] lg:leading-5">
            {eachauthor.content}
          </p>
          <a
            href={eachauthor.url}
            className="flex items-center justify-end text-[0.5rem] text-sky-500 hover:underline hover:underline-offset-2 sm:text-[0.7rem] xl:text-[1rem] xl:tracking-wide"
            target="_blank"
          >
            <span> visit here</span>
            <ArrowRightAltIcon
              sx={{ fontSize: { xs: "0.8rem", sm: "1.2rem", xl: "1.7rem" } }}
            />
          </a>
        </div>
      )}
    </>
  );
};

export { AuthorContent };
