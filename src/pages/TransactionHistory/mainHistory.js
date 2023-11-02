import { Grid } from "@mui/material";
import MUIDataGrid from "components/common/Datagrid";
import React from "react";
import { Overview } from "./overview";

const MainHistory = ({ title, userInfo, columns, rows, buttons }) => {
  return (
    <Grid
      container
      sx={{
        height: "100vh",
        px: 1,
      }}
    >
      <Grid
        item
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Overview userData={userInfo} buttons={buttons} />
      </Grid>
      <Grid
        item
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MUIDataGrid title={title} columns={columns} rows={rows} />
      </Grid>
    </Grid>
  );
};

export default MainHistory;
