import React from "react";
import { MenuList } from "../../utils/ExportComponents";

const WatchList = () => {
  const watchList = JSON.parse(localStorage.getItem("watch_list"));

  return (
    <ul className="my-10 text-white">
      {watchList?.map((eachWatchListItem) => (
        <MenuList key={eachWatchListItem.id} item={eachWatchListItem} />
      ))}
    </ul>
  );
};

export { WatchList };
