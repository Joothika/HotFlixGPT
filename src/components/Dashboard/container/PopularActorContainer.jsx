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
  console.log(popularActors);
  return (
    <section
      className="text-white sm:sticky sm:z-10"
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
