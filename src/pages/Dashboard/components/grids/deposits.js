import { Box, Typography } from "@mui/material";
import useResponsive from "Hooks/useResponsive";
import useUserData from "Hooks/useUserData";
import MUIDataGrid from "components/common/Datagrid";
import React, { useMemo } from "react";

const Deposits = () => {
  const userData = useUserData();
  const { isXs, isSm, isMd, isLg, isXl } = useResponsive();

  const columns = useMemo(() => [
    { field: "Gateway", headerName: "Gateway", width: 100 },
    { field: "ReferenceNumber", headerName: "Reference Number", width: 150 },
    { field: "AccountNumber", headerName: "Account Number", width: 150 },
    { field: "Amount", headerName: "Amount", width: 150 },
    { field: "Status", headerName: "Status", width: 150 },
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
        overflow: "auto",
        width: 800,
      }}
    >
      <Typography variant="h6">Recent Deposits</Typography>
      <MUIDataGrid
        rows={rows}
        columns={columns}
        width={
          isSm
            ? "98vw"
            : isLg
            ? `calc(100vw - 220px)`
            : isXl
            ? `calc(100vw - 520px)`
            : `calc(100vw - 520px)`
        }
      />
    </Box>
  );
};

export default Deposits;
