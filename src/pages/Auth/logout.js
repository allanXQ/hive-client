import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectIsLoggedIn } from "redux/features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { apiCall } from "redux/async/asyncThunk";
import useUserData from "Hooks/useUserData";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userData = useUserData();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(
        apiCall({
          endpoint: "auth/logout",
          method: "post",
          data: { userId: userData.userId },
          slice: "userData",
        })
      );
      dispatch(logout());
    }
    localStorage.removeItem("persist:root");
    navigate("/login");
  }, [dispatch, navigate, isLoggedIn, userData.userId]);

  return <div>Logout</div>;
};

export default Logout;
