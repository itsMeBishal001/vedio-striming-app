import React from "react";
import { Outlet } from "react-router-dom";
import { PermanentSideBar } from "./PermanentSideBar";

const Body = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-fit">
        <PermanentSideBar />
      </div>

      {/* Main Content */}
      <div className="w-11/12">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
