import { Grid } from "@mui/material";
import MUIDataGrid from "components/common/Datagrid";
import React from "react";
import { Overview } from "./overview";

const GridOverview = ({ title, userInfo, columns, rows, buttons }) => {
  return (
    <Grid container spacing={5} sx={{}}>
      <Grid item xs={12} sx={{}}>
        <Overview userData={userInfo} buttons={buttons} />
      </Grid>
      <Grid item xs={12}>
        <MUIDataGrid title={title} columns={columns} rows={rows} />
      </Grid>
    </Grid>
  );
};

export default GridOverview;
