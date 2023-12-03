import useUserData from "Hooks/useUserData";
import React from "react";
import GridOverview from "../../components/common/gridOverview";

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
    <GridOverview
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
