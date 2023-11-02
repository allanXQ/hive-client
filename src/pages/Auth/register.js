import RegisterForm from "components/forms/models/register";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectIsLoggedIn,
  selectIsRegistered,
} from "redux/features/user/userSlice";
import Auth from "./auth";

const Register = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRegistered = useSelector(selectIsRegistered);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/dashboard");
    }
    // else if (isRegistered) {
    //   navigate("/login");
    // }
  }, [isLoggedIn, navigate]);
  const sublink = {
    text: "Already have an account? ",
    pathname: "/login",
    sublinkText: "Log in",
  };
  return (
    <Auth
      title="Sign Up"
      sublink={sublink}
      sx={{
        mt: 8,
      }}
    >
      <RegisterForm />
    </Auth>
  );
};

export default Register;
