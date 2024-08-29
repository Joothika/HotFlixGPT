import React from "react";
import { FavList, WatchList } from "../../utils/ExportComponents";
import { Outlet } from "react-router-dom";

const ProfileMenuList = () => {
  return (
    <div className="row-span-11">
      <Outlet />
    </div>
  );
};

export { ProfileMenuList };
