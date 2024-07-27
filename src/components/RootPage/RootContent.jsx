import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FORM_BUTTON_TYPE_SMALL,
  ROOT,
  ROOT_AI_TEXT,
  ROOT_BUTTON,
  ROOT_TEXT,
} from "../../utils/constants";
import { Button } from "../../utils/ExportComponents";
import { ArrowRightAlt } from "@mui/icons-material";

const RootContent = () => {
  const navigate = useNavigate();
  function handleOnClick() {
    navigate("/auth");
  }
  return (
    <section className="grid  justify-items-center">
      <div className="grid gap-0 justify-items-center items-center h-[0%] w-screen my-auto px-8">
        <h1 className=" font-bold text-white  tracking-wider text-3xl sm:text-4xl xl:text-5xl sm:leading-[3.5rem] leading-[3rem] text-center">
          {ROOT_TEXT}
        </h1>

        <h3 className="text-red-200 text-xl self-start mt-6">{ROOT_AI_TEXT}</h3>
        <h1 className="tracking-wider text-transparent bg-gradient-to-tr from-red-600 to-red-400 bg-clip-text my-6 mb-10  text-4xl sm:text-5xl text-center font-bold animate-typing ">
          {ROOT}
        </h1>
        <Button
          content={ROOT_BUTTON}
          onClick={handleOnClick}
          type={FORM_BUTTON_TYPE_SMALL}
          color={"bg-red-500"}
        >
          <ArrowRightAlt fontSize="large" className="ml-2" />
        </Button>
      </div>
    </section>
  );
};

export default RootContent;
