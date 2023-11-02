import { Box } from "@mui/material";
import useUserData from "Hooks/useUserData";
import MUIDataGrid from "components/common/Datagrid";
import { Overview } from "./overview";
import MainHistory from "./mainHistory";

const columns = [
  { field: "Gateway", headerName: "Gateway", width: 200 },
  { field: "ReferenceNumber", headerName: "Reference Number", width: 200 },
  { field: "Amount", headerName: "Amount", width: 200 },
  { field: "Interest", headerName: "Interest", width: 200 },
  { field: "Status", headerName: "Status", width: 200 },
  { field: "RepaymentDate", headerName: "Repayment Date", width: 200 },
  { field: "Created", headerName: "Created", width: 200 },
];

const LoanRequests = () => {
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

  const rows = Array.isArray(userData?.loanRequests)
    ? userData.loanRequests.map((request) => {
        return {
          id: request._id,
          Gateway: "Mpesa",
          ReferenceNumber: request._id,
          Amount: `KSH ${request.amount}`,
          Interest: `${request.interest}%`,
          Status: request.status,
          RepaymentDate:
            request.status === "Fulfilled" ? request.repaymentDate : "N/A",
          Created: request.created,
        };
      })
    : [];

  return (
    <MainHistory
      title="Loan Requests"
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

export default LoanRequests;
