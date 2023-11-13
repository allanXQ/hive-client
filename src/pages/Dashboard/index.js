import { Box } from "@mui/material";
import React from "react";
import Memberships from "./grids/memberships";
import Deposits from "./grids/deposits";
import Contributions from "./charts/contributions";
import Overview from "./overview";
import useResponsive from "Hooks/useResponsive";

const Dashboard = React.memo(() => {
  const { isSm, isXl } = useResponsive();
  const overviewWidth = isSm
    ? "100vw"
    : isXl
    ? `calc(100vw - 220px)`
    : `calc(100vw - 220px)`;
  const chartsWidth = `calc(100vw - ${overviewWidth})`;

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        paddingTop: 2,
        // width: {
        //   xs: "100vw",
        //   sm: overviewWidth,
        // },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          // flexGrow: 1,
          gap: 5,
          border: "0.5px solid gray",
          padding: 2,
          width: {
            xs: "100vw",
            sm: overviewWidth,
          },
        }}
      >
        <Overview />
        <Deposits />
      </Box>
      <Box
        sx={{
          width: 300, //chartsWidth,
          display: "flex",
          padding: 2,
        }}
      >
        <Memberships />

        {/* <Contributions /> */}
      </Box>
    </Box>
  );
});

export default Dashboard;
