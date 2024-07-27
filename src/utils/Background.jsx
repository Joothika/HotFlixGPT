import React from "react";
const Background = ({ children }) => {
  return (
    <figure className="h-screen bg-[url('https://wallpaperaccess.com/full/6075860.jpg')] bg-cover bg-center md:bg-right-top">
      {children}
    </figure>
  );
};

export default Background;
