import { Avatar, Box, Card, Grid, Stack, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { MuiButton } from "components/common/Button";
import { useSelector } from "react-redux";
import { selectTheme } from "redux/features/app/configSlice";
import { useTheme } from "@emotion/react";
import useUserData from "Hooks/useUserData";
import { DoughnutChart, BarChart } from "./components/charts/contributions";
import { useNavigate } from "react-router-dom";
import { AssessmentOutlined, AttachMoneyOutlined } from "@mui/icons-material";

const Dashboard = React.memo(() => {
  const currentTheme = useSelector(selectTheme);
  const theme = useTheme();
  const userData = useUserData();
  const navigate = useNavigate();

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
      // border: "0.5px solid #3f51b5",
      elevation: 5,
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.5)",
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
                {userData?.firstname} {userData?.lastname}
              </Typography>
              <MuiButton
                variant="contained"
                content="Edit Profile"
                onClick={() => navigate("/profile")}
                sx={{
                  width: "100%",
                  maxHeight: "90%",
                }}
              />
            </Grid>
            <Grid item>
              <Avatar
                alt={userData?.username || "profile_pic"}
                src={
                  "https://mui.com/static/images/avatar/1.jpg" ||
                  userData?.photoURL
                }
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
      <Grid item>
        <Card>
          <Typography variant="h6">Quick Actions</Typography>
          <Stack>
            <Box>
              <AttachMoneyOutlined />
              <Typography variant="bodySmallBold">Deposit</Typography>
            </Box>
            <Box></Box>
          </Stack>
        </Card>
        <Card
          sx={{
            ...cardStyle,
            display: "grid",
            gap: 2,
          }}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography>Reports</Typography>

            <Typography variant="bodySmallBold">View Reports</Typography>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <AssessmentOutlined color="primary.main" />
            <Box>
              <Typography variant="bodySmallBold">Yearly Reports</Typography>
              <Typography>2022-2023</Typography>
            </Box>
            <MuiButton
              variant="outlined"
              content="Download"
              sx={{
                maxWidth: 120,
                borderRadius: 10,
              }}
            />{" "}
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <AssessmentOutlined />
            <Box>
              <Typography variant="bodySmallBold">Monthly Reports</Typography>
              <Typography>Oct-Nov</Typography>
            </Box>

            <MuiButton
              variant="outlined"
              content="Download"
              sx={{
                maxWidth: 120,
                borderRadius: 10,
              }}
            />
          </Stack>
        </Card>
      </Grid>
      <Grid item>
        <Card
          sx={{
            ...cardStyle,
            display: "grid",
            gap: 2,
            alignItems: "center",
          }}
        >
          <Typography>Cashflow</Typography>

          <DoughnutChart />
        </Card>
      </Grid>
    </Grid>
  );
});

export default Dashboard;
