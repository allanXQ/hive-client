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
        gap: 2,
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
            // maxWidth: 350,
            maxHeight: 328,
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
          gridTemplateRows: "repeat(3, 1fr)",
          gap: 2,
        }}
      >
        <Card
          sx={{
            p: 1,
            border: "1px solid #e0e0e0",
            backgroundColor:
              currentTheme === "light"
                ? theme.palette.bgColor.light
                : theme.palette.bgColor.dark,
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
            <Typography
              variant="bodySmallBold"
              sx={
                {
                  // fontWeight: 600,
                }
              }
            >
              RECENT TRANSACTIONS
            </Typography>
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="bodySmallBold">Type</Typography>
              <Typography variant="bodySmallBold">Deposit</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="bodySmallBold">Amount</Typography>
              <Typography variant="bodySmallBold">4000</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="bodySmallBold">Status</Typography>
              <Typography variant="bodySmallBold">Failed</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="bodySmallBold">Date</Typography>
              <Typography variant="bodySmallBold">12/12/2021</Typography>
            </Box>
          </Box>
        </Card>
        <Card
          sx={{
            p: 1,
            border: "1px solid #e0e0e0",
            backgroundColor:
              currentTheme === "light"
                ? theme.palette.bgColor.light
                : theme.palette.bgColor.dark,
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
            <Typography
              variant="bodySmallBold"
              sx={
                {
                  // fontWeight: 600,
                }
              }
            >
              UPCOMING OBLIGATIONS
            </Typography>
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="bodySmallBold">Chama</Typography>
              <Typography variant="bodySmallBold">Chama 1</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="bodySmallBold">Type</Typography>
              <Typography variant="bodySmallBold">Wellfare</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="bodySmallBold">Amount</Typography>
              <Typography variant="bodySmallBold">100</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="bodySmallBold">Due</Typography>
              <Typography variant="bodySmallBold">12/12/2021</Typography>
            </Box>
          </Box>
        </Card>
        <Card
          sx={{
            p: 1,
            border: "1px solid #e0e0e0",
            backgroundColor:
              currentTheme === "light"
                ? theme.palette.bgColor.light
                : theme.palette.bgColor.dark,
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
            <Typography
              variant="bodySmallBold"
              sx={
                {
                  // fontWeight: 600,
                }
              }
            >
              ACTIVE LOANS
            </Typography>
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
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="bodySmallBold">Chama</Typography>
              <Typography variant="bodySmallBold">Chama 1</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="bodySmallBold">Amount</Typography>
              <Typography variant="bodySmallBold">4000</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="bodySmallBold">Interest</Typography>
              <Typography variant="bodySmallBold">200</Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography variant="bodySmallBold">Due</Typography>
              <Typography variant="bodySmallBold">12/12/2021</Typography>
            </Box>
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
});

export default Dashboard;
