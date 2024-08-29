import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, onhoverMenu } from "../../utils/ExportComponents";

const MenuIcon = ({ children, icontext }) => {
  const dispatch = useDispatch();
  const { hoverMenu } = useSelector((state) => state.dashboardReducer);
  const refMenu = useRef();
  function onMouseEnter() {
    dispatch(onhoverMenu(true));
  }
  function onMouseLeave() {
    dispatch(onhoverMenu(false));
  }
  return (
    <Button
      type="menu"
      onhover={onMouseEnter}
      onleave={onMouseLeave}
      reference={refMenu}
    >
      {
        <div
          className={`${hoverMenu ? "text-white/80 transition-transform delay-100 lg:scale-[1.1]" : "delay-400 transition-transform duration-500"} relative rounded-sm text-white/70`}
        >
          {children}
          {/* <span
            className={`${hoverMenu ? "z[1] absolute left-2 top-0 text-xs tracking-wider text-stone-200/50" : "hidden"}`}
          >
            {icontext}
          </span> */}
        </div>
      }
    </Button>
  );
};

export { MenuIcon };
