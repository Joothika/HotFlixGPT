import React, { useState } from "react";
import {
  EachContainer,
  EachHeaderContainer,
  useFetchActors,
} from "../../../utils/ExportComponents";
import { useSelector } from "react-redux";
import { FAMOUS_ACTOR_HEADER } from "../../../utils/constants";

const PopularActorContainer = () => {
  const [showButton, setShowButton] = useState(false);

  const { popularActors } = useSelector((state) => state.actorReducer);
  useFetchActors("/person/popular");
  return (
    <section
      className="text-white lg:sticky lg:z-10 lg:ml-[7rem]"
      onMouseEnter={() => {
        setShowButton(true);
      }}
      onMouseLeave={() => {
        setTimeout(() => {
          setShowButton(false);
        }, 3000);
      }}
    >
      <EachHeaderContainer name={FAMOUS_ACTOR_HEADER} />
      <EachContainer category={popularActors} showButton={showButton} />
    </section>
  );
};

export { PopularActorContainer };
