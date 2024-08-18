import React, { useRef, useState } from "react";
import React from "react";
import Slider from "react-slick";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Button from "../../utils/Button";
import { EachItemContainer } from "../../utils/ExportComponents";
import { settings } from "../../utils/constants";

const EachContainer = ({ category, showButton }) => {
  const sliderRef = useRef(null);
  return (
    <>
      {showButton && (
        <>
          <Button
            type={"slide"}
            addCss={`lg:bg-gradient-to-l lg:from-white/0 lg:to-black lg:left-[7rem]`}
            onClick={() => sliderRef.current.slickPrev()}
          >
            <KeyboardArrowLeftIcon
              fontSize="large"
              sx={{ fontSize: "2.4rem" }}
            />
          </Button>
          <Button
            type={"slide"}
            addCss={`lg:bg-gradient-to-r lg:from-white/0 lg:from-10% lg:to-black lg:to-90% lg:right-0 transition-all delay-150 duration-500 ease-in `}
            onClick={() => sliderRef.current.slickNext()}
          >
            <KeyboardArrowRightIcon
              fontSize="large"
              sx={{ fontSize: "2.4rem" }}
            />
          </Button>
        </>
      )}

      <Slider
        {...settings}
        ref={sliderRef}
        className={`relative mx-2 mb-8 scroll-smooth sm:mb-10 sm:ml-[7rem]`}
      >
        {category?.map((eachItem, i) => (
          <EachItemContainer key={eachItem.id} item={eachItem} />
        ))}
      </Slider>
    </>
  );
};

export { EachContainer };
