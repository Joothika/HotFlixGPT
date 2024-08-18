import React from "react";
import { TrailerVideoContent } from "../../../../utils/ExportComponents";
import ReactPlayer from "react-player";
import * as styles from "./styles.module.css";

const TrailerVideo = ({ eachtrailer }) => {
  return (
    <li
      className="relative my-6 box-content flex items-center rounded-md bg-white/20 px-4 py-3 md:border-b-[1px] md:border-stone-200/40 md:bg-transparent md:py-0 md:pb-6"
      key={eachtrailer.id}
    >
      <a
        href={`https://www.youtube.com/watch?v=${eachtrailer.key}`}
        target="_blank"
      >
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${eachtrailer.key}`}
          controls={true}
          pip={true}
          stopOnUnmount={false}
          light={true}
          className={styles.eachTrailer}
        />
      </a>
      <TrailerVideoContent eachtrailer={eachtrailer} />
    </li>
  );
};

export { TrailerVideo };
