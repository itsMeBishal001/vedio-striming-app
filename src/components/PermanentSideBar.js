// PermanentSideBar.js
import React from "react";

export const PermanentSideBar = () => {
  return (
    <div className="flex flex-col items-center justify-center">
       <a href="/">
      <img
        className="p-2 m-1 w-11"
        alt="home"
        src="https://www.svgrepo.com/show/96177/home-button.svg"
      />
      </a>
      <img
        className="p-2 m-1 w-11"
        alt="shorts"
        src="https://svgsilh.com/svg/468292.svg"
      />
    </div>
  );
};

