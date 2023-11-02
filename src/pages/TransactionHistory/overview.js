import { Box, Typography, useMediaQuery } from "@mui/material";
import { MuiButton } from "components/common/Button";
import { useNavigate } from "react-router-dom";

export const Overview = ({ userData, buttons }) => {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const overviewWidth = `calc(100vw - 215px)`;
  const calculatedWidth = isSmallScreen ? "100vw" : overviewWidth;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: calculatedWidth,
      }}
    >
      <Box>
        <Typography variant="bodyRegular">{userData?.name}</Typography>
        <Typography variant="h6">KSH {userData?.accountBalance}</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MuiButton
          variant="contained"
          onClick={() => navigate(buttons[0].path)}
          content={buttons[0].name}
        />
        <MuiButton
          variant="contained"
          onClick={() => navigate(buttons[1].path)}
          content={buttons[1].name}
        />
      </Box>
    </Box>
  );
};
