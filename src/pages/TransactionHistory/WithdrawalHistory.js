import useUserData from "Hooks/useUserData";
import MainHistory from "./mainHistory";

const columns = [
  { field: "Gateway", headerName: "Gateway", width: 200 },
  { field: "ReferenceNumber", headerName: "Reference Number", width: 200 },
  { field: "AccountNumber", headerName: "Account Number", width: 200 },
  { field: "Amount", headerName: "Amount", width: 200 },
  { field: "Status", headerName: "Status", width: 150 },
  { field: "Date", headerName: "Date", width: 200 },
];

const WithdrawalHistory = () => {
  const userData = useUserData();
  const buttons = [
    {
      name: "Deposit",
      path: "/transact/deposit",
    },
    {
      name: "Withdraw",
      path: "/transact/withdraw",
    },
  ];

  const rows =
    Array.isArray(userData?.withdrawals) &&
    userData.withdrawals.map((withdrawal) => {
      return {
        id: withdrawal._id,
        Gateway: "Mpesa",
        ReferenceNumber: withdrawal._id,
        AccountNumber: withdrawal.phone,
        Amount: `KSH ${withdrawal.amount}`,
        Status: withdrawal.status,
        Date: withdrawal.created,
      };
    });

  return (
    <MainHistory
      title="Withdrawal History"
      columns={columns}
      rows={rows}
      userInfo={{
        accountBalance: userData?.accountBalance,
        name: "Account Balance",
      }}
      buttons={buttons}
    />
  );
};

export default WithdrawalHistory;
