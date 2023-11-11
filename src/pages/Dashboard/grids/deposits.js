import { Box, Typography } from "@mui/material";
import useUserData from "Hooks/useUserData";
import MUIDataGrid from "components/common/Datagrid";
import React, { useMemo } from "react";

const overviewWidth = `calc(100vw - 320px)`;

const Deposits = () => {
  const userData = useUserData();

  const columns = useMemo(() => [
    { field: "Gateway", headerName: "Gateway", width: 100 },
    { field: "ReferenceNumber", headerName: "Reference Number", width: 150 },
    { field: "AccountNumber", headerName: "Accout Number", width: 150 },
    { field: "Amount", headerName: "Amount", width: 100 },
    { field: "Status", headerName: "Status", width: 100 },
    { field: "Date", headerName: "Date", width: 200 },
  ]);

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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        overflow: "auto",
      }}
    >
      <Typography variant="h6">Recent Deposits</Typography>
      <MUIDataGrid rows={rows} columns={columns} width={overviewWidth} />
    </Box>
  );
};

export default Deposits;
