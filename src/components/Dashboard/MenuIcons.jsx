import React from "react";
import {
  MENU_TEXT_HOME,
  MENU_TEXT_MOVIES,
  MENU_TEXT_PROFILE,
  MENU_TEXT_SEARCH,
  MENU_TEXT_TV,
  MENU_TEXT_VOICE,
} from "../../utils/constants";
import HomeIcon from "@mui/icons-material/Home";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import TheatersIcon from "@mui/icons-material/Theaters";
import TvIcon from "@mui/icons-material/Tv";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { MenuIcon } from "../../utils/ExportComponents";
import { NavLink, useParams } from "react-router-dom";

const MenuIcons = () => {
  const { profile } = useParams();
  return (
    <>
      <NavLink to={"/dashboard"} className="text-white/70">
        <MenuIcon icontext={MENU_TEXT_HOME}>
          <HomeIcon fontSize="medium" />
        </MenuIcon>
      </NavLink>
      <NavLink to={"/dashboard/search"} className="text-white/70">
        <MenuIcon icontext={MENU_TEXT_SEARCH}>
          <ManageSearchIcon fontSize="medium" />
        </MenuIcon>
      </NavLink>
      {/* <MenuIcon icontext={MENU_TEXT_VOICE}>
        <KeyboardVoiceIcon fontSize="medium" />
      </MenuIcon> */}
      <NavLink to={"/dashboard/movies"} className="text-white/70">
        <MenuIcon icontext={MENU_TEXT_MOVIES}>
          <TheatersIcon fontSize="small" />
        </MenuIcon>
      </NavLink>
      <NavLink to={"/dashboard/tvshows"} className="text-white/70">
        <MenuIcon icontext={MENU_TEXT_TV}>
          <TvIcon fontSize="small" />
        </MenuIcon>
      </NavLink>
      <NavLink to={"/dashboard/profile"} className="text-white/70">
        <MenuIcon icontext={MENU_TEXT_PROFILE}>
          <AccountBoxIcon fontSize="small" />
        </MenuIcon>
      </NavLink>
    </>
  );
};

export { MenuIcons };
