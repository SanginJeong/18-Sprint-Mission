import React from "react";
import { Outlet } from "react-router";
import Navbar from "../common/Navbar/Navbar";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="wrap">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
