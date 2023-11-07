import { Box } from "@mui/material";
import React from "react";
import Memberships from "./grids/memberships";
import Deposits from "./grids/deposits";
import Contributions from "./charts/contributions";
import Overview from "./overview";

const overviewWidth = `calc(100vw - 205px)`;
const chartsWidth = `calc(100vw - ${overviewWidth})`;

const Dashboard = React.memo(() => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        paddingTop: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 5,
          width: {
            xs: "100vw",
            sm: overviewWidth,
          },
          border: "0.5px solid gray",
          padding: 2,
        }}
      >
        <Overview />
        <Deposits />
      </Box>
      {/* <Box
        sx={{
          width: chartsWidth,
          display: "flex",
          padding: 2,
        }}
      >
        <Memberships /> 

        <Contributions />
      </Box>
      */}
    </Box>
  );
});

export default Dashboard;
