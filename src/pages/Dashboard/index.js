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
  // const overviewWidth = isSm
  //   ? "100vw"
  //   : isXl
  //   ? `calc(100vw - 245px)`
  //   : `calc(100vw - 245px)`;
  // const chartsWidth = `calc(100vw - ${overviewWidth})`;

  const stats = [
    {
      name: "Balance",
      value: userData?.accountBalance || 0,
    },

    {
      name: "Loans",
      value: userData?.activeLoans || 0,
    },
    {
      name: "Contributions",
      value: userData?.totalContributions || 0,
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
        display: "grid",
        gridTemplateColumns: {
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        },
        gap: 5,
      }}
    >
      <Grid item>
        <Card
          sx={{
            p: 2,
            display: "grid",
            gap: 5,
            border: "1px solid #e0e0e0",
            backgroundColor:
              currentTheme === "light"
                ? theme.palette.bgColor.light
                : theme.palette.bgColor.dark,
          }}
        >
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Grid
              item
              sx={{ display: "grid", gridTemplateColumns: "repeat(1, 1fr)" }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                John Doe
              </Typography>
              <MuiButton
                variant="contained"
                content="Edit Profile"
                sx={{
                  width: "100%",
                }}
              />
            </Grid>
            <Grid item>
              <Avatar
                alt="userData?.username"
                src="https://mui.com/static/images/avatar/1.jpg" //{userData?.photoURL}
                sx={{
                  width: 80,
                  height: 80,
                }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              alignContent: "center",
              gap: 5,
            }}
          >
            {stats.map((stat, index) => (
              <Grid
                item
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  alignItems: "center",
                }}
              >
                <Typography variant="h6">{stat.value}</Typography>

                <Typography variant="h6">{stat.name}</Typography>
              </Grid>
            ))}
          </Grid>
        </Card>
      </Grid>
      <Grid item>
        <Card
          sx={{
            // maxWidth: 350,
            maxHeight: 313,
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
      <Grid
        item
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)",
          gridTemplateRows: "repeat(2, 1fr)",
          gap: 5,
        }}
      >
        <Card
          sx={{
            // width: "100%",
            // height: 300,
            border: "1px solid #e0e0e0",
            backgroundColor:
              currentTheme === "light"
                ? theme.palette.bgColor.light
                : theme.palette.bgColor.dark,
          }}
        >
          <Grid container>
            <Grid
              item
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                John Doe
              </Typography>
              <MuiButton
                variant="contained"
                content="Edit Profile"
                sx={{
                  width: "100%",
                }}
              />
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "column" }}>
              <Avatar
                alt="userData?.username"
                src="https://mui.com/static/images/avatar/1.jpg" //{userData?.photoURL}
                sx={{
                  width: 80,
                  height: 80,
                }}
              />
            </Grid>
          </Grid>
        </Card>
        <Card
          sx={{
            // width: "100%",
            // height: 300,
            border: "1px solid #e0e0e0",
            backgroundColor:
              currentTheme === "light"
                ? theme.palette.bgColor.light
                : theme.palette.bgColor.dark,
          }}
        >
          <Grid container>
            <Grid
              item
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                John Doe
              </Typography>
              <MuiButton
                variant="contained"
                content="Edit Profile"
                sx={{
                  width: "100%",
                }}
              />
            </Grid>
            <Grid item sx={{ display: "flex", flexDirection: "column" }}>
              <Avatar
                alt="userData?.username"
                src="https://mui.com/static/images/avatar/1.jpg" //{userData?.photoURL}
                sx={{
                  width: 80,
                  height: 80,
                }}
              />
            </Grid>
          </Grid>
        </Card>
      </Grid>
    </Grid>
  );
});

export default Dashboard;
