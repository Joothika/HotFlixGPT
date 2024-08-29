import { MenuList } from "../../utils/ExportComponents";
import React from "react";

const FavList = () => {
  const favList = JSON.parse(localStorage.getItem("fav_list"));

  return (
    <ul className="my-10 text-white">
      {favList?.map((eachFavItem) => (
        <MenuList key={eachFavItem.id} item={eachFavItem} />
      ))}
    </ul>
  );
};

export { FavList };
