import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "redux/features/user/userSlice";
import { useNavigate } from "react-router-dom";
import { apiCall } from "redux/async/asyncThunk";
import useUserData from "Hooks/useUserData";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userData = useUserData();

  useEffect(() => {
    const logoutAsync = () => {
      try {
        isLoggedIn &&
          dispatch(
            apiCall({
              endpoint: "auth/logout",
              method: "post",
              data: { userId: userData.userId },
              slice: "userData",
            })
          );
        localStorage.removeItem("persist:root");
        !isLoggedIn && navigate("/login");
      } catch (error) {
        localStorage.removeItem("persist:root");
      }
    };

    logoutAsync();
  }, [dispatch, navigate, isLoggedIn, userData.userId]);

  return <div>Logout</div>;
};

export default Logout;
