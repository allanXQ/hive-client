import { Grid } from "@mui/material";
import useUserData from "Hooks/useUserData";
import React from "react";
import Memberships from "./grids/memberships";
import Deposits from "./grids/deposits";

const overviewWidth = `calc(100vw - 200px)`;

const Dashboard = React.memo(() => {
  const userData = useUserData();

  const stats = [
    {
      name: "Balance",
      value: userData?.accountBalance,
    },
  ];

  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    width: {
      xs: "100vw",
      sm: `calc(${overviewWidth})`,
    },
    border: "none",
    boxShadow: "none",
    backgroundColor: "transparent",
  };
  return (
    <Grid container spacing={1}>
      <Grid item>
        <Memberships />
        <Deposits />
      </Grid>
    </Grid>
  );
});

export default Dashboard;
