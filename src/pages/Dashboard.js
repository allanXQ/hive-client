import {
  KeyboardArrowDownOutlined,
  KeyboardArrowUpOutlined,
} from "@mui/icons-material";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import useAssetsData from "Hooks/useAssets";
import useUserData from "Hooks/useUserData";
import { MuiButton } from "components/common/Button";
import MUIDataGrid from "components/common/Datagrid";
import React from "react";
import { useNavigate } from "react-router-dom";

const stats = [
  {
    name: "Balance",
    value: "100",
    percentageChange: 10,
  },
  {
    name: "Portfolio",
    value: "1000",
    percentageChange: 10,
  },
  {
    name: "Trades",
    value: "1000",
    percentageChange: 10,
  },
  {
    name: "Total Profit",
    value: "750",
    percentageChange: -10,
  },
];

const columns = [
  { field: "Gateway", headerName: "Gateway", width: 200 },
  { field: "ReferenceNumber", headerName: "Reference Number", width: 200 },
  { field: "AccountNumber", headerName: "Accout Number", width: 200 },
  { field: "Amount", headerName: "Amount", width: 200 },
  { field: "Status", headerName: "Status", width: 150 },
  { field: "Date", headerName: "Date", width: 200 },
];

const overviewWidth = `calc(100vw - 200px)`;

const Dashboard = React.memo(() => {
  const userData = useUserData();

  const rows =
    Array.isArray(userData?.deposits) &&
    userData.deposits.map((deposit) => {
      return {
        id: deposit._id,
        Gateway: "Mpesa",
        ReferenceNumber: deposit.mpesaRef,
        AccountNumber: deposit.phone,
        Amount: `KSH ${deposit.amount}`,
        Status: deposit.status,
        Date: deposit.createdAt,
      };
    });
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
    <Grid
      container
      spacing="0.5rem"
      sx={{
        display: "flex",
        flexDirection: { sm: "column", lg: "row" },
        gap: 1,
        flexGrow: 1,
        flexBasis: 0,
        flexWrap: "wrap",
        mt: 2,
      }}
    >
      <Grid item sx={{}}>
        <Card sx={{ ...cardStyle, gap: { sm: 2 } }}>
          <CardContent
            sx={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              flexGrow: 1,
              justifyContent: { xs: "center", sm: "space-between" },
              gap: 1,
              maxHeight: { lg: "60px" },
            }}
          >
            <Typography variant="bodyLarge">Account Overview</Typography>
            <CardActionArea
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                maxWidth: { sm: "250px" },
                pl: 2,
                gap: 2,
                flexGrow: 1,
              }}
            >
              <MuiButton variant="contained" content="Withdraw" />
              <MuiButton variant="contained" content="Deposit" />
            </CardActionArea>
          </CardContent>
          <CardContent
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: { xs: 2, sm: 4 },
              flexWrap: "wrap",
              flexGrow: 1,
              flexFlow: "row wrap",
            }}
          >
            {stats.map((stat, index) => (
              <Box key={index}>
                <Box
                  sx={{
                    display: "flex",
                    gap: 1,
                    width: "150px",
                  }}
                >
                  <Typography variant="bodyRegular">{stat.name}</Typography>
                  <Box>
                    {stat.percentageChange > 0 ? (
                      <Typography
                        variant="bodySmall"
                        color="green.main"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.1rem",
                        }}
                      >
                        <KeyboardArrowUpOutlined
                          sx={{
                            fontSize: "1rem",
                          }}
                        />
                        +{stat.percentageChange}%
                      </Typography>
                    ) : (
                      <Typography
                        variant="bodySmall"
                        color="red.main"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.1rem",
                        }}
                      >
                        <KeyboardArrowDownOutlined
                          sx={{
                            fontSize: "1rem",
                          }}
                        />
                        -{stat.percentageChange}%
                      </Typography>
                    )}
                  </Box>
                </Box>
                <Typography variant="h6" fontWeight="bold">
                  KSH {stat.value}
                </Typography>
              </Box>
            ))}
          </CardContent>
        </Card>
      </Grid>
      <Grid
        item
        sx={{
          height: "100%",
        }}
      >
        <Card sx={cardStyle}>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                maxHeight: "20px",
              }}
            >
              <Typography variant="bodyLarge">Assets</Typography>
              <MuiButton
                variant="text"
                sx={{
                  fontWeight: "bold",
                }}
                content="View All"
              />
            </Box>
            <MUIDataGrid columns={columns} rows={rows} height={370} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
});

export default Dashboard;
