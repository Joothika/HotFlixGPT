import React, { useRef, useState } from "react";
import { MenuIcons } from "../../utils/ExportComponents";
import DASHBOARD_LOGO from "../../../public/images/DASHBOARD LOGO.png";

const MenuBar = () => {
  return (
    <aside className="absolute z-[2] w-screen lg:fixed lg:h-screen lg:w-24 lg:bg-transparent">
      <nav>
        <div className="flex h-16 w-screen items-center rounded-sm px-4 sm:h-24">
          <img src={DASHBOARD_LOGO} className="w-16 sm:w-20 sm:px-2" />
        </div>
        <section className="min-w-[1024px]:bg-none fixed bottom-0 flex w-screen justify-around rounded-sm bg-black py-6 lg:fixed lg:top-24 lg:flex lg:h-[29rem] lg:w-24 lg:flex-col lg:items-center lg:justify-around lg:bg-black/0">
          <MenuIcons />
        </section>
      </nav>
    </aside>
  );
};

export { MenuBar };

// fixed bottom-0 flex w-screen justify-around rounded-sm bg-black py-6 text-white lg:absolute lg:bottom-32 lg:mt-2 lg:h-[29rem] lg:w-24 lg:flex-col lg:items-center lg:justify-around lg:bg-transparent lg:text-white/70

// lg:fixed lg:h-screen lg:w-24
