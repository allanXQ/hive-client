import { Box, Typography, Divider, Button, useTheme } from "@mui/material";
import { MuiButton } from "components/common/Button";
import { signInWithPopup } from "firebase/auth";
import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { apiCall } from "redux/async/asyncThunk";
import { loginSuccess } from "redux/features/user/userSlice";
import { firebaseAuth, firebaseAuthProvider } from "utils/firebase";
// import GoogleSignIn from "utils/googleAuth";

const GoogleSignup = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const GoogleSignIn = () => {
    signInWithPopup(firebaseAuth, firebaseAuthProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const providerId = result.providerId;
        const { accessToken, displayName, email, photoURL, phoneNumber } =
          result.user;

        const firstName = displayName.split(" ")[0];
        const lastName = displayName.split(" ")[1];

        dispatch(
          apiCall({
            endpoint: "auth/google",
            method: "POST",
            data: {
              providerId,
              accessToken,
              firstName,
              lastName,
              email,
              photoURL,
              phoneNumber,
            },
            slice: "userData",
          })
        ).then((res) => {
          dispatch(
            loginSuccess({
              ...res.payload.data,
            })
          );
        });
      })

      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;
        // ...

        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <Divider
        variant="middle"
        sx={{
          color: "white.main",
          fontSize: "0.8rem",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Typography variant="bodyRegularBold"> OR</Typography>
      </Divider>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <MuiButton
          variant="contained"
          color="primary"
          onClick={GoogleSignIn}
          sx={{
            position: "relative",
            width: "20rem",
            height: "3rem",
            borderRadius: "2rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <img
              src="img/google.png"
              alt="google logo"
              width={45}
              style={{
                position: "absolute",
                left: 2,
                backgroundColor: theme.palette.white.main,
                borderRadius: "2rem",
                padding: "0.5rem",
              }}
            />
          </Box>
          <Typography
            variant="bodyRegularBold"
            sx={{
              color: theme.palette.white.main,
              textTransform: "none",
            }}
          >
            Continue With Google
          </Typography>
        </MuiButton>
      </Box>
    </>
  );
};

export const Auth = ({ title, sublink, children, sx }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 1,
        height: "100vh",
        color: "white.main",
        overflowX: "hidden",
        ...sx,
      }}
    >
      <Typography variant="h4">{title}</Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
        }}
      >
        <Typography variant="bodyRegular">{sublink.text}</Typography>
        <Typography
          component={Link}
          to={sublink.pathname}
          variant="bodyRegularBold"
          sx={{ color: "blue.main" }}
        >
          {sublink.sublinkText}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 1,
        }}
      >
        {children}
        <GoogleSignup />
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "0.3rem",
        }}
      >
        <Typography variant="bodySmallBold">© 2023 Hive</Typography>
      </Box>
    </Box>
  );
};

export default Auth;
