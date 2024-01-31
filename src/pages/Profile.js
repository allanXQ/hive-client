import { Avatar, Box } from "@mui/material";
import ProfileForm from "components/forms/models/profile";
import React from "react";

const Profile = () => {
  return (
    <Box>
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
