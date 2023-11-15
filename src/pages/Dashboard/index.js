import { Avatar, Box, Card, Grid, Stack, Typography } from "@mui/material";
import React, { useMemo } from "react";
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
  const currentTheme = useSelector(selectTheme);
  const theme = useTheme();
  const userData = useUserData();

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

  const cardStyle = useMemo(
    () => ({
      p: 2,
      border: "1px solid #e0e0e0",
      display: "grid",
      backgroundColor:
        currentTheme === "light"
          ? theme.palette.bgColor.light
          : theme.palette.bgColor.dark,
    }),
    [currentTheme, theme.palette.bgColor]
  );

  const cardStats = [
    {
      name: "Recent Transactions",
      value: [
        {
          name: "Deposit",
          value: 4000,
        },
        {
          name: "Amount",
          value: 4000,
        },
        {
          name: "Status",
          value: "Failed",
        },
        {
          name: "Date",
          value: "12/12/2021",
        },
      ],
    },
    {
      name: "Upcoming Obligations",
      value: [
        {
          name: "Chama",
          value: "Chama 1",
        },
        {
          name: "Type",
          value: "Wellfare",
        },
        {
          name: "Amount",
          value: 100,
        },
        {
          name: "Due",
          value: "12/12/2021",
        },
      ],
    },
    {
      name: "Active Loans",
      value: [
        {
          name: "Chama",
          value: "Chama 1",
        },
        {
          name: "Amount",
          value: 4000,
        },
        {
          name: "Interest",
          value: 200,
        },
        {
          name: "Due",
          value: "12/12/2021",
        },
      ],
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
        gap: 2,
      }}
    >
      <Grid item>
        <Card
          sx={{
            ...cardStyle,
            gap: 5,
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
              sx={{
                display: "grid",
                gap: 2,
                gridTemplateColumns: "repeat(1, 1fr)",
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 600 }}>
                John Doe
              </Typography>
              <MuiButton
                variant="contained"
                content="Edit Profile"
                sx={{
                  width: "100%",
                  maxHeight: "90%",
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
                  justifyContent: "center",
                }}
              >
                <Typography variant="h3" color="primary.main">
                  {stat.value}
                </Typography>

                <Typography variant="h6">{stat.name}</Typography>
              </Grid>
            ))}
          </Grid>
        </Card>
      </Grid>
      <Grid item>
        <Card
          sx={{
            ...cardStyle,
            maxHeight: 328,
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
          gridTemplateRows: "repeat(3, 1fr)",
          gap: 2,
        }}
      >
        {cardStats.map((card, index) => (
          <Card
            key={index}
            sx={{
              ...cardStyle,
              p: 1,
              display: "grid",
              gap: 1,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography variant="bodySmallBold">{card.name}</Typography>
              <MuiButton
                variant="text"
                content="See All"
                sx={{
                  margin: 0,
                  padding: 0,
                }}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              {card.value.map((value, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="bodySmallBold">{value.name}</Typography>
                  <Typography variant="bodySmallBold">{value.value}</Typography>
                </Box>
              ))}
            </Box>
          </Card>
        ))}
      </Grid>
    </Grid>
  );
});

export default Dashboard;
