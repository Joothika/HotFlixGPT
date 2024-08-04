import React, { useRef, useState } from "react";
import React from "react";
import Slider from "react-slick";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Button from "../../utils/Button";
import { EachItemContainer } from "../../utils/ExportComponents";
import { createReducer } from "@reduxjs/toolkit";
import { settings } from "../../utils/constants";

const EachContainer = ({ category, showButton }) => {
  const sliderRef = useRef(null);
  return (
    <>
      {showButton && (
        <>
          <Button
            type={"slide"}
            addCss={`bg-gradient-to-l from-white/0 to-black`}
            onClick={() => sliderRef.current.slickPrev()}
          >
            <KeyboardArrowLeftIcon
              fontSize="large"
              sx={{ fontSize: "2.4rem" }}
            />
          </Button>
          <Button
            type={"slide"}
            addCss={`bg-gradient-to-r from-white/0 from-10% to-black to-90% right-0 transition-all delay-150 duration-500 ease-in `}
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
        className={`relative mx-2 mb-8 scroll-smooth sm:mb-12`}
      >
        {category?.map((eachItem, i) => (
          <EachItemContainer key={eachItem.id} item={eachItem} />
        ))}
      </Slider>
    </>
  );
};

export { EachContainer };
