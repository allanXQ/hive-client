import { Box, Typography } from "@mui/material";
import useUserData from "Hooks/useUserData";
import React from "react";

const Overview = () => {
  const userData = useUserData();

  const stats = [
    {
      name: "Balance",
      value: userData?.accountBalance || 0,
    },
    {
      name: "Contributions",
      value: userData?.totalContributions || 0,
    },
    {
      name: "Loans",
      value: userData?.activeLoans || 0,
    },
    {
      name: "Memberships",
      value: userData?.totalWithdrawals || 0,
    },
  ];
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        // maxWidth: 700,
      }}
    >
      <Typography variant="h6">Account Overview</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: { xs: 2, sm: 4 },
          flexWrap: "wrap",
          flexGrow: 1,
          flexFlow: "row wrap",
        }}
      >
        {stats.map((stat) => (
          <Box key={stat.name}>
            <Typography variant="body1">{stat.name}</Typography>
            <Typography variant="body2">{stat.value}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Overview;
