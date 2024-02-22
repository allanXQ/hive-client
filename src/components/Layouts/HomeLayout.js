import React, { useEffect } from "react";
import ResponsiveDrawer from "../Navigation/Navbar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const RootLayout = () => {
  return (
    <ResponsiveDrawer isHome={true}>
      <Outlet />
    </ResponsiveDrawer>
  );
};

export default RootLayout;
