import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

import { BrowserRouter } from "react-router-dom";
import Sidebar from "./Sidebar";
import { cacheResults } from "../utils/searchSlice";
import { YOUTUBE_SEARCH_API } from "../utils/contants";

const Head = () => {
  //here i will write code for the suggessions on search bar
  const [searchQuery, setSearchQuery] = useState("");
  const [suggessions, setSuggessions] = useState([]);
  const [showSuggessions, setShowSuggessions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();
  /**
   *  searchCache = {
   *     "iphone": ["iphone 11", "iphone 14"]
   *  }
   *  searchQuery = iphone
   */

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggessions(searchCache[searchQuery]);
      } else {
        getSearchSugsestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSugsestions = async () => {
    const data = await fetch(
      "https://cors-anywhere-axpo.onrender.com/" +
        YOUTUBE_SEARCH_API +
        searchQuery
    );
    const json = await data.json();
    setSuggessions(json[1]);
    //update cahe

    dispatch(
      cacheResults(
        cacheResults({
          [searchQuery]: json[1],
        })
      )
    );
  };

  // for the menu toggle => drawer feature
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (

      <div className="grid grid-flow-col    shadow-lg items-center fixed top-0 left-0 w-full z-10 bg-white ">
        <div className="flex">
          <button>
            <img
              onClick={() => toggleMenuHandler()}
              className="w-6 ml-3 cursor-pointer"
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
        <div className="">
          <div className="px-10">
            <input
              className="w-4/5 border border-gray-400 p-2 rounded-l-full"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggessions(true)}
              onBlur={() => setShowSuggessions(false)}
            />
            <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
              🔍
            </button>
          </div>
          <div className="relative pr-8 ml-6">
            {showSuggessions && (
              <div className="absolute top-0 left-0 py-2 px-4 bg-white">
                <ul>
                  {suggessions.map((s) => (
                    <li
                      key={s}
                      className="py-2 px-3 shadow-sm hover:bg-gray-100"
                    >
                      🔍 {s}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-row-reverse ">
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
