import React from "react";
import { PRIMARY_LOGO } from "../../utils/ExportComponents";
import { Brightness4 } from "@mui/icons-material";
const AuthHeader = () => {
  return (
    <header className="relative z-10 px-6 py-10 max-[640px]:bg-black/60 max-[400px]:py-6 sm:bg-none sm:px-10 sm:py-6 xl:px-16">
      <nav>
        <ul className="flex items-center justify-between">
          <li>
            <img
              src={PRIMARY_LOGO}
              alt="no image found"
              className="w-32 md:w-36 xl:w-40"
            />
          </li>
          <li className="text-sky-900">
            <Brightness4 fontSize="large" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default AuthHeader;
