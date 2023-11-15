import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { MuiButton } from "components/common/Button";
import { useNavigate } from "react-router-dom";

export const Overview = ({ userData, buttons }) => {
  const navigate = useNavigate();

  return (
    <Grid
      container
      sx={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr",
        //media query
        "@media (max-width: 425px)": {
          gridTemplateColumns: "1fr",
        },
        gap: 2,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Grid
        item
        sx={{
          "@media (max-width: 425px)": {
            display: "flex",
            gap: 1,
            alignItems: "center",
            justifyContent: "space-between",
          },
        }}
      >
        <Typography variant="bodyRegular">{userData?.name}</Typography>
        <Typography variant="h6">KSH {userData?.accountBalance}</Typography>
      </Grid>

      <Grid
        item
        sx={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "flex-end",
          "@media (max-width: 425px)": {
            justifyContent: "space-between",
          },
        }}
      >
        <MuiButton
          variant="contained"
          onClick={() => navigate(buttons[0].path)}
          content={buttons[0].name}
          sx={{
            px: 2,
            minWidth: "120px",
          }}
        />
        <MuiButton
          variant="contained"
          onClick={() => navigate(buttons[1].path)}
          content={buttons[1].name}
          sx={{
            px: 2,
            minWidth: "120px",
          }}
        />
      </Grid>
    </Grid>
  );
};
