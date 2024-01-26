import styled from "@emotion/styled";
import { Box, useMediaQuery } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";
import { useSelector } from "react-redux";
import { selectTheme } from "redux/features/app";

const StyledDataGrid = styled(DataGrid)(({ theme, currentTheme }) => ({
  "& .MuiDataGrid-root": {},

  border: "none",
  "& .MuiDataGrid-withBorderColor": {
    borderColor: "transparent",
  },
  "& .MuiDataGrid-footerContainer": {
    display: "none",
  },
  "& .MuiDataGrid-columnHeaderTitle": {
    ...theme.typography.bodySmallBold,
    color:
      currentTheme === "light"
        ? theme.palette.bgColor.dark
        : theme.palette.bgColor.light,
  },

  "& .MuiDataGrid-cell": {
    ...theme.typography.bodySmall,
    color:
      currentTheme === "light"
        ? theme.palette.bgColor.dark
        : theme.palette.bgColor.light,
    display: "flex",
    alignItems: "center",
    height: "20px",
  },
}));

const MUIDataGrid = ({ rows, columns, height, width }) => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  if (isSmallScreen) {
    columns.forEach((column) => {
      column.width = 120;
    });
  }
  const currentTheme = useSelector(selectTheme);
  const overviewWidth = `calc(100vw - 200px)`;
  const calculatedWidth = isSmallScreen ? "100vw" : `calc(${overviewWidth}`;

  return (
    <Box>
      <Box
        sx={{
          //100vw/100vh on small screens
          height: "fit-content", //height || 390,
          width: width || calculatedWidth,
        }}
      >
        <StyledDataGrid
          rows={rows}
          columns={columns}
          disableSelectionOnClick
          currentTheme={currentTheme}
        />
      </Box>
    </Box>
  );
};

export default MUIDataGrid;
