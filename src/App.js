import { Navigate, Route, Routes } from "react-router-dom";
import RootLayout from "components/Layouts/RootLayout";
import Dashboard from "pages/Dashboard";
import DepositHistory from "pages/TransactionHistory/DepositHistory";
import Login from "pages/Auth/login";
import GoogleCallback from "pages/Auth/googleCallback";
import Logout from "pages/Auth/logout";
import Register from "pages/Auth/register";
import ForgotPassword from "pages/Auth/forgotPassword";
import Deposit from "pages/Transact/deposit";
import Withdrawal from "pages/Transact/withdraw";
import WithdrawalHistory from "pages/TransactionHistory/WithdrawalHistory";
import MessageModal from "components/messages";
import Home from "pages/Home";
import HomeLayout from "components/Layouts/HomeLayout";
import LoanRequests from "pages/TransactionHistory/LoanRequests";
import LoanPayments from "pages/TransactionHistory/LoanPayments";
import Profile from "pages/Profile";
import { ThemeProvider } from "@mui/material";
import useStyledTheme from "./Hooks/useStyledTheme";
import AboutUs from "pages/Home/Abouts";
import Terms from "pages/Home/Terms";
import PrivacyPolicy from "pages/Home/Privacy";

function App() {
  const theme = useStyledTheme();
  return (
    <ThemeProvider theme={theme}>
      <MessageModal />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route element={<HomeLayout />}>
          <Route path="home" element={<div>Home</div>} />
          <Route path="about" element={<div>Home</div>} />
          <Route path="terms" element={<div>Home</div>} />
          <Route path="privacy" element={<div>Home</div>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Route>

        <Route path="logout" element={<Logout />} />
        <Route path="google-callback" element={<GoogleCallback />} />

        <Route element={<RootLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
          <Route path="history">
            <Route path="deposits" element={<DepositHistory />} />
            <Route path="withdrawals" element={<WithdrawalHistory />} />
            <Route path="loan-requests" element={<LoanRequests />} />
            <Route path="loan-payments" element={<LoanPayments />} />
          </Route>
          <Route path="transact">
            <Route path="deposit" element={<Deposit />} />
            <Route path="withdraw" element={<Withdrawal />} />
          </Route>
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
