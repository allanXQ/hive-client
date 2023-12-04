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

    mpesaDeposits,
    withdrawals,
    transfers,
    accountBalance,
    referrer,
    referrals,
    chamas,
  } = user;

  const deposits = mpesaDeposits; //[...mpesaDeposits, ...stripeDeposits];

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

    deposits,
    totalDeposits,
    withdrawals,
    totalWithdrawals,
    transfers,
    accountBalance: accountBalance || 0,
    referrer,
    referrals,
    chamas,
  };
};

export default useUserData;
