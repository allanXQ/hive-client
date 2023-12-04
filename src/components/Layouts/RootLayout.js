import React, { useEffect } from "react";
import ResponsiveDrawer from "../Navigation/Navbar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "redux/features/user/userSlice";
import { apiCall } from "redux/async/asyncThunk";
import { Box } from "@mui/material";

const RootLayout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const location = useLocation();
  const navigate = useNavigate();

  const currentPath = location.pathname;
  useEffect(() => {
    if (!isLoggedIn) return navigate("/login");
    dispatch(
      apiCall({
        endpoint: "user/user-info",
        method: "post",
        data: {
          userId: user.userId,
        },
        slice: "userData",
      })
    );
  }, [currentPath]);

  return (
    <>
      {isLoggedIn && (
        <ResponsiveDrawer>
          <Outlet />
        </ResponsiveDrawer>
      )}
    </>
  );
};

export default RootLayout;
