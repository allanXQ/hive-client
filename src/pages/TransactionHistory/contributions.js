import useUserData from "Hooks/useUserData";
import React from "react";
import GridOverview from "../../components/common/gridOverview";

const columns = [
  { field: "id", headerName: "id", width: 200 },
  { field: "Chama", headerName: "Chama", width: 150 },
  { field: "Amount", headerName: "Amount", width: 150 },
  { field: "Month", headerName: "Month", width: 150 },
  { field: "Description", headerName: "Description", width: 250 },
  { field: "Date", headerName: "Date", width: 200 },
];

const Contributions = () => {
  const userData = useUserData();
  const buttons = [
    {
      name: "Contribute",
      path: "/transact/contribute",
    },
    {
      name: "Deposit",
      path: "/transact/deposit",
    },
  ];

  const rows =
    Array.isArray(userData?.contributions) &&
    userData.contributions.map((contribution) => {
      return {
        id: contribution._id,
        Chama: "Mpesa",
        Amount: `KSH ${contribution.amount}`,
        Month: "January",
        Date: contribution.contributionDate,
      };
    });

  return (
    <GridOverview
      title="Contributions"
      columns={columns}
      rows={rows}
      userInfo={{
        accountBalance: userData?.totalContributions,
        name: "Total Contributions",
      }}
      buttons={buttons}
    />
  );
};

export default Contributions;
