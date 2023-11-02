import { Box, Typography } from "@mui/material";
import DepositForm from "components/forms/models/deposit";

const Deposit = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <DepositForm />
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "0.3rem",
        }}
      >
        <Typography variant="bodySmallBold">© 2023 Verdant</Typography>
      </Box>
    </Box>
  );
};

export default Deposit;
