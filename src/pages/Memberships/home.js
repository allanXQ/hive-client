import { Box, Card, Grid, Typography } from "@mui/material";
import useResponsive from "Hooks/useResponsive";
import useUserData from "Hooks/useUserData";
import { MuiButton } from "components/common/Button";
import MUIDataGrid from "components/common/Datagrid";
import GridOverview from "components/common/gridOverview";
import { Outlet, useLocation } from "react-router-dom";

const rows = [
  {
    id: 1,
    name: "Chui",
    admin: "Admin Admin",
    assets: 1000,
    members: 10,
    upcoming: Date.now(),
    obligations: 1000,
  },
  {
    id: 2,
    name: "Chui",
    admin: "Admin Admin",
    assets: 1000,
    members: 10,
    upcoming: Date.now(),
    obligations: 1000,
  },
  {
    id: 3,
    name: "Chui",
    admin: "Admin Admin",
    assets: 1000,
    members: 10,
    upcoming: Date.now(),
    obligations: 1000,
  },
];

const MembershipsHome = () => {
  const columns = [
    { field: "Gateway", headerName: "Gateway", width: 200 },
    { field: "ReferenceNumber", headerName: "Reference Number", width: 200 },
    { field: "AccountNumber", headerName: "Account Number", width: 200 },
    { field: "Amount", headerName: "Amount", width: 150 },
    { field: "Status", headerName: "Status", width: 150 },
    { field: "Date", headerName: "Date", width: 200 },
  ];
  const userData = useUserData();
  const buttons = [
    {
      name: "Deposit",
      path: "/transact/deposit",
    },
    {
      name: "Withdraw",
      path: "/transact/withdraw",
    },
  ];

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

  return (
    <Box sx={{}}>
      <GridOverview
        title="Memberships"
        columns={columns}
        rows={rows}
        userInfo={{
          accountBalance: userData?.accountBalance,
          name: "Total Contributions",
        }}
        buttons={buttons}
      />
    </Box>
  );
};

export default MembershipsHome;
