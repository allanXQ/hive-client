import { useSelector } from "react-redux";
import { selectUser } from "redux/features/user/userSlice";

const useUserData = () => {
  const user = useSelector(selectUser);
  if (!user) return {};
  const {
    userId,
    firstname,
    lastname,
    username,
    googlename,
    email,
    phone,
    status,
    accountType,
    portfolio,
    trades,
    mpesaDeposits,
    stripeDeposits,
    withdrawals,
    transfers,
    accountBalance,
    referrer,
    referrals,
  } = user;

  const deposits = mpesaDeposits; //[...mpesaDeposits, ...stripeDeposits];

  const portfolioValue = Array.isArray(portfolio)
    ? portfolio.reduce((acc, asset) => {
        const { price, amount } = asset;
        return acc + price * amount;
      }, 0)
    : 0;

  const totalDeposits = Array.isArray(deposits)
    ? deposits.reduce((acc, deposit) => {
        const { amount } = deposit;
        return acc + amount;
      }, 0)
    : 0;

  const totalWithdrawals = Array.isArray(withdrawals)
    ? withdrawals.reduce((acc, withdrawal) => {
        const { amount } = withdrawal;
        return acc + amount;
      }, 0)
    : 0;
  return {
    userId,
    firstname,
    lastname,
    username,
    googlename,
    email,
    phone,
    status,
    accountType,
    portfolio,
    portfolioValue,
    trades,
    deposits,
    totalDeposits,
    withdrawals,
    totalWithdrawals,
    transfers,
    accountBalance: accountBalance || 0,
    referrer,
    referrals,
  };
};

export default useUserData;
