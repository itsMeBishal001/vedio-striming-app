import React from "react";
import { Outlet } from "react-router-dom";
import { PermanentSideBar } from "./PermanentSideBar";

const Body = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-fit mt-20">
        <PermanentSideBar />
      </div>

      {/* Main Content */}
      <div className=" mt-20 w-11/12">
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
