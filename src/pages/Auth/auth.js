import { Box, Typography, Divider, Button, useTheme } from "@mui/material";
import { MuiButton } from "components/common/Button";
import React from "react";
import { Link } from "react-router-dom";
import getGoogleOAuthUrl from "utils/googleOAuthUrl";

const GoogleSignup = () => {
  const theme = useTheme();
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
          href={getGoogleOAuthUrl()}
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
        <Typography variant="bodySmallBold">© 2023 Verdant</Typography>
      </Box>
    </Box>
  );
};

export default Auth;
