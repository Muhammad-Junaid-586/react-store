import React from "react";
import Headers from "./Headers";
import NavbarT from "./NavbarT";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div>
      <Headers />
      <NavbarT />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
