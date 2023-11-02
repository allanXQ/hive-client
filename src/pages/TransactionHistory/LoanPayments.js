import useUserData from "Hooks/useUserData";
import MainHistory from "./mainHistory";

const columns = [
  { field: "Gateway", headerName: "Gateway", width: 200 },
  { field: "LoanId", headerName: "LoanId", width: 200 },
  { field: "ReferenceNumber", headerName: "Reference Number", width: 200 },
  { field: "Amount", headerName: "Amount", width: 200 },

  { field: "Status", headerName: "Status", width: 200 },
  { field: "Date", headerName: "Date", width: 200 },
];

const LoanPayments = () => {
  const userData = useUserData();
  const buttons = [
    {
      name: "Request Loan",
      path: "/transact/request-loan",
    },
    {
      name: "Loan Payments",
      path: "/history/loan-payments",
    },
  ];

  const rows = Array.isArray(userData?.LoanPayments)
    ? userData.LoanPayments.map((request) => {
        return {
          Gateway: "Mpesa",
          LoanId: request.LoanId,
          ReferenceNumber: request._id,
          Amount: `KSH ${request.amount}`,
          Status: request.status,
          Date: request.created,
        };
      })
    : [];

  return (
    <MainHistory
      title="Loan Payments"
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

export default LoanPayments;
