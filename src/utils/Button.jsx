import React from "react";

const Button = ({ onClick, content, type, color, addCss, children }) => {
  const baseButton =
    "text-white px-6 py-2 uppercase tracking-wider font-bold xl:font-semibold text-xs  md:text-sm xl:text-md rounded-sm w-full sm:w-[320px] focus:border-none focus:outline-none flex items-center justify-center";
  const smallClass =
    "text-white px-6 py-2 uppercase tracking-wider font-bold xl:font-semibold text-xs  md:text-sm xl:text-md rounded-sm focus:border-none focus:outline-none flex items-center justify-center";
  const linkClass =
    "ml-2 bg-gradient-to-tr from-sky-400 to-blue-500 text-transparent bg-clip-text font-bold hover:border-b hover:border-sky-400 focus:border-none focus:outline-none";
  const smallButton = `${smallClass} ${color}`;
  const largeButton = `${baseButton} ${color} ${addCss}`;

  if (type === "link")
    return (
      <button className={linkClass} onClick={onClick}>
        {content}
      </button>
    );

  if (type === "small")
    return (
      <button className={smallButton} onClick={onClick}>
        {content}
        {children}
      </button>
    );
  if (type === "large")
    return (
      <button className={largeButton} onClick={onClick}>
        {children}
        {content}
      </button>
    );

  return null;
};

export default Button;
