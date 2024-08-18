import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchAnimation = () => {
  return (
    <>
      <div className="absolute bottom-[40%] left-[32%] right-[30%] top-[45%] rotate-[-22deg] animate-pulse sm:left-[45%] sm:right-[50%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 101 130"
          fill="none"
          className="h-16 w-40 skew-y-[3rem]"
        >
          <path
            d="M39.38 16.46H16.46C10.1308 16.46 5 21.5908 5 27.92V113.87C5 120.199 10.1308 125.33 16.46 125.33H85.22C91.5494 125.33 96.68 120.199 96.68 113.87V27.92C96.68 21.5908 91.5494 16.46 85.22 16.46H65.165M39.38 16.46V5M39.38 16.46V27.92"
            stroke="#808080 "
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="absolute left-[46%] right-[51%] top-[48%] animate-rotate sm:bottom-[44%] sm:left-[52%] sm:top-[46%] lg:left-[49%]">
        <SearchIcon
          sx={{
            color: "#808080",
            fontSize: { xl: "1.5rem" },
          }}
        />
      </div>
    </>
  );
};

export { SearchAnimation };
