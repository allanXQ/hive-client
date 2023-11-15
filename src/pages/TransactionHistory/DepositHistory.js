import useUserData from "Hooks/useUserData";
import React from "react";
import MainHistory from "./mainHistory";

const columns = [
  { field: "Gateway", headerName: "Gateway", width: 200 },
  { field: "ReferenceNumber", headerName: "Reference Number", width: 200 },
  { field: "AccountNumber", headerName: "Account Number", width: 200 },
  { field: "Amount", headerName: "Amount", width: 150 },
  { field: "Status", headerName: "Status", width: 150 },
  { field: "Date", headerName: "Date", width: 200 },
];

const DepositHistory = () => {
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
    Array.isArray(userData?.deposits) &&
    userData.deposits.map((deposit) => {
      return {
        id: deposit._id,
        Gateway: "Mpesa",
        ReferenceNumber: deposit.mpesaRef,
        AccountNumber: deposit.phone,
        Amount: `KSH ${deposit.amount}`,
        Status: deposit.status,
        Date: deposit.createdAt,
      };
    });

  return (
    <MainHistory
      title="Deposit History"
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

export default DepositHistory;
