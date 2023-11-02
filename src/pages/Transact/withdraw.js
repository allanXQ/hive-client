import { Box, Typography } from "@mui/material";
import WithdrawalForm from "components/forms/models/withdrawal";

const Withdrawal = () => {
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
        <WithdrawalForm />
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "0.3rem",
        }}
      >
        <Typography variant="caption">© 2023 Verdant</Typography>
      </Box>
    </Box>
  );
};

export default Withdrawal;
