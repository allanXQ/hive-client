import { Box, Stack, Typography } from "@mui/material";
import useResponsive from "Hooks/useResponsive";
import DepositForm from "components/forms/models/deposit";

const Deposit = () => {
  const { isSm, isMd, isXl } = useResponsive();
  const overviewWidth = isSm
    ? "100vw"
    : isXl
    ? `calc(100vw - 220px)`
    : `calc(100vw - 220px)`;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        height: "89vh",
        width: overviewWidth,
      }}
    >
      <Stack direction={isMd ? "column" : "row"} spacing={4}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            width: 400,
          }}
        >
          <Typography variant="h6">Instructions</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography variant="bodySmall">
              1. Input your mpesa phone number
            </Typography>
            <Typography variant="bodySmall">
              2. Input amount you wish to deposit(10 minimum)
            </Typography>
            <Typography variant="bodySmall">
              3. Submit the form and wait for a prompt from Mpesa.
            </Typography>
            <Typography variant="bodySmall">
              4. You will receive a prompt from Mpesa(Organisation: tinypesa)
            </Typography>
            <Typography variant="bodySmall">
              5. Enter your Mpesa pin and submit
            </Typography>
            <Typography variant="bodySmall">
              6. You will receive a confirmation message from Mpesa and Hive
            </Typography>
          </Box>
        </Box>
        <DepositForm />
      </Stack>
      {/* <Typography variant="bodySmallBold">© 2023 Hive</Typography> */}
    </Box>
  );
};

export default Deposit;
