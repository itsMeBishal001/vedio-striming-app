import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

import { BrowserRouter } from "react-router-dom";
import Sidebar from "./Sidebar";

const Head = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-3 m-1 shadow-lg items-center">
      <div className="flex">
        <button>
          <img
            onClick={() => toggleMenuHandler()}
            className="w-6  cursor-pointer"
            alt="menu"
            src="https://www.svgrepo.com/show/506800/burger-menu.svg"
          />
        </button>
        <Drawer
          open={isMenuOpen}
          onClose={() => toggleMenuHandler()}
          direction="left"
        >
          <BrowserRouter>
            <div className="flex p-3 m-1">
              <button>
                <img
                  onClick={() => toggleMenuHandler()}
                  className="w-6   cursor-pointer"
                  alt="menu"
                  src="https://www.svgrepo.com/show/506800/burger-menu.svg"
                />
              </button>

              <a href="/">
                <img
                  className="h-20"
                  alt="youtube-logo"
                  src="https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg"
                />
              </a>
            </div>
            <Sidebar />
          </BrowserRouter>
        </Drawer>

        <div>
          <a href="/">
            <img
              className="h-20"
              alt="youtube-logo"
              src="https://www.logo.wine/a/logo/YouTube/YouTube-Logo.wine.svg"
            />
          </a>
        </div>
      </div>
      <div className="col-span-10 px-10">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
