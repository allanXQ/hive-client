import { Box, Typography } from "@mui/material";
import { MuiButton } from "components/common/Button";
import MUIDataGrid from "components/common/Datagrid";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

const ActionButton = memo(({ chama }) => {
  const navigate = useNavigate();

  return (
    <MuiButton
      variant="text"
      onClick={() => navigate(`/${chama}/dashboard`)}
      content="View"
    />
  );
});

const Memberships = () => {
  const columns = [
    { field: "Chama", headerName: "Chama", width: 110 },
    { field: "Members", headerName: "Members", width: 110 },
    { field: "Assets", headerName: "Assets", width: 110 },
    {
      field: "Dashboard",
      headerName: "Dashboard",
      width: 110,
      renderCell: (params) => <ActionButton chama={params.row.Chama} />,
    },
  ];

  const rows = [
    {
      id: 1,
      Chama: "Chama1",
      Members: "KSH 1000",
      Assets: "KSH 1000",
    },
    {
      id: 2,
      Chama: "Chama2",
      Members: "KSH 1000",
      Assets: "KSH 1000",
    },
    {
      id: 3,
      Chama: "Chama3",
      Members: "KSH 1000",
      Assets: "KSH 1000",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // justifyContent: "center",
        alignItems: "center",
        // gap: 2,
      }}
    >
      <MUIDataGrid rows={rows} columns={columns} />
    </Box>
  );
};

export default Memberships;
