import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid,
  Input,
  Typography,
} from "@mui/material";
import useUserData from "Hooks/useUserData";
import ProfileForm from "components/forms/models/profile";
import React from "react";

const Profile = () => {
  const userData = useUserData();
  const {
    firstname,
    lastname,
    username,
    googlename,
    accountType,
    email,
    phone,
    status,
  } = userData;
  const userAttributes = [
    {
      name: "First Name",
      value: firstname,
    },
    {
      name: "Last Name",
      value: lastname,
    },
    {
      name: "Account Status",
      value: status,
    },
    {
      name: "Account Type",
      value: accountType,
    },
  ];

  const profileModel = [{}];

  return (
    <Grid container>
      <Grid item xs={12} md={6} lg={4}>
        <Card>
          <CardHeader
            title="Account Details"
            subheader="View and edit your account details"
          />
          <CardContent>
            <Avatar
              sx={{
                width: 100,
                height: 100,
                margin: "auto",
                marginBottom: "1rem",
              }}
              alt="Remy Sharp"
              src="https://mui.com/static/images/avatar/1.jpg"
            />
            <ProfileForm></ProfileForm>
          </CardContent>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
              }}
            >
              {userAttributes.map((attribute, index) => (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 2,
                  }}
                  key={index}
                >
                  <Typography variant="subtitle2">{attribute.name}</Typography>
                  <Input
                    value={attribute.value}
                    disabled
                    sx={{
                      "& .MuiInput-input": {
                        color: "#fff",
                      },
                    }}
                  />
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Profile;
