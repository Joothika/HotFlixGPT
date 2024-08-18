import React from "react";

const Button = ({
  onClick,
  content,
  type,
  color,
  addCss,
  children,
  onhover,
  onleave,
  reference,
}) => {
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

  if (type === "menu") {
    return (
      <button onMouseEnter={onhover} onMouseLeave={onleave} ref={reference}>
        {children}
      </button>
    );
  }
  if (type === "slide") {
    return (
      <button
        className={`hidden lg:absolute lg:bottom-[3rem] lg:top-[2rem] lg:z-[11] lg:h-[17rem] lg:bg-gradient-to-l ${addCss} `}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  if (type === "watchmore") {
    return (
      <button
        className="rounded-md bg-gradient-to-tr from-stone-400/50 to-stone-300/20 px-8 py-3 text-[0.8rem] tracking-wide text-white sm:px-2 sm:py-0 sm:text-[0.6rem] md:px-3 md:py-1 md:text-xs lg:px-8 lg:py-2 lg:text-sm xl:px-12 xl:py-3"
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  if (type === "dashboardwatchmore") {
    return (
      <button
        className="mt-4 w-full rounded-md bg-gradient-to-tr from-stone-400/50 to-stone-300/20 py-3 text-[0.9rem] tracking-wide text-white"
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  if (type === "likeAndwatch") {
    return (
      <button
        className="rounded-md bg-gradient-to-tr from-stone-400/50 to-stone-300/20 px-3 py-1 text-lg tracking-wide text-white sm:px-2 sm:py-0 md:px-3 md:py-1 lg:px-4 lg:py-2 xl:px-4 xl:py-2"
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  return null;
};

export default Button;
