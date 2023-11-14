import { Avatar, Box, Card, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Memberships from "./grids/memberships";
import Deposits from "./grids/deposits";
import Contributions from "./charts/contributions";
import Overview from "./overview";
import useResponsive from "Hooks/useResponsive";
import { MuiButton } from "components/common/Button";
import { useSelector } from "react-redux";
import { selectTheme } from "redux/features/app/configSlice";
import { useTheme } from "@emotion/react";
import useUserData from "Hooks/useUserData";
import BarChart from "./charts/contributions";

const Dashboard = React.memo(() => {
  const { isSm, isXl } = useResponsive();
  const currentTheme = useSelector(selectTheme);
  const theme = useTheme();
  const userData = useUserData();
  const overviewWidth = isSm
    ? "100vw"
    : isXl
    ? `calc(100vw - 220px)`
    : `calc(100vw - 220px)`;
  const chartsWidth = `calc(100vw - ${overviewWidth})`;

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
    <Grid
      container
      sx={{
        width: overviewWidth,
        px: 4,
      }}
    >
      <Grid
        item
        sx={{
          display: "flex",
          gap: 5,
        }}
      >
        <Card
          sx={{
            width: 350,
            height: 300,
            border: "1px solid #e0e0e0",
            backgroundColor:
              currentTheme === "light"
                ? theme.palette.bgColor.light
                : theme.palette.bgColor.dark,
          }}
        >
          <Stack
            direction="row"
            spacing={4}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              // justifyContent: "center",
              p: 3,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                John Doe
              </Typography>
              <MuiButton
                variant="contained"
                content="Edit Profile"
                sx={{
                  width: 150,
                }}
              />
            </Box>
            <Avatar
              alt="userData?.username"
              src="https://mui.com/static/images/avatar/1.jpg" //{userData?.photoURL}
              sx={{
                width: 80,
                height: 80,
              }}
            />
          </Stack>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: { xs: 2, sm: 4 },
              flexWrap: "wrap",
              flexGrow: 1,
              flexFlow: "row wrap",
              p: 3,
            }}
          >
            {stats.map((stat) => (
              <Box
                key={stat.name}
                sx={{
                  width: 100,
                }}
              >
                <Typography variant="body2">{stat.value}</Typography>
                <Typography variant="body1">{stat.name}</Typography>
              </Box>
            ))}
          </Box>
        </Card>
        <Card
          sx={{
            width: 350,
            height: 300,
            border: "1px solid #e0e0e0",
            backgroundColor:
              currentTheme === "light"
                ? theme.palette.bgColor.light
                : theme.palette.bgColor.dark,
          }}
        >
          <BarChart />
        </Card>
      </Grid>
    </Grid>
  );
});

export default Dashboard;
