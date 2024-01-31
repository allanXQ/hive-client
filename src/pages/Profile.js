import { Avatar, Box } from "@mui/material";
import useResponsive from "Hooks/useResponsive";
import ProfileForm from "components/forms/models/profile";
import React from "react";

const Profile = () => {
  const { isSm, isMd, isXl } = useResponsive();
  const overviewWidth = isSm
    ? "100vw"
    : isXl
    ? `calc(100vw - 220px)`
    : `calc(100vw - 220px)`;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        height: "70vh",
        width: overviewWidth,
      }}
    >
      <Box>
        <Avatar
          sx={{
            width: 80,
            height: 80,
            margin: "auto",
            marginBottom: "1rem",
          }}
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/1.jpg"
        />
        <ProfileForm />
      </Box>
    </Box>
  );
};

export default Profile;
