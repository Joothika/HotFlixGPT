import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  EachAuthorHeaderBox,
  NoOverviewDisplay,
} from "../../../../utils/ExportComponents";

const ReviewContainer = () => {
  const [index, setIndex] = useState(null);
  const { reviews } = useSelector((state) => state.detailsReducer);
  return (
    <>
      <section className="p-6 pb-20 text-white sm:p-0 sm:py-6 sm:pr-10 xl:w-[60%]">
        {reviews?.map((eachauthor, i) => (
          <div
            className="my-6 rounded-md border border-stone-200/40 px-3 py-3 lg:px-4 lg:py-5"
            key={eachauthor.id}
          >
            <EachAuthorHeaderBox
              eachauthor={eachauthor}
              showContent={i === index ? true : false}
              setIndex={() => setIndex(i)}
            />
          </div>
        ))}

        {reviews?.length === 0 && (
          <NoOverviewDisplay>
            It seems like no reviews were given !
          </NoOverviewDisplay>
        )}
      </section>
    </>
  );
};

export { ReviewContainer };
