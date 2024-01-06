import { Box } from "@mui/material";
import useUserData from "Hooks/useUserData";
import { MuiButton } from "components/common/Button";
import GridOverview from "components/common/gridOverview";
import { useNavigate } from "react-router-dom";

const MembershipsHome = () => {
  const navigate = useNavigate();
  const columns = [
    { field: "Name", headerName: "Name", width: 150 },
    { field: "Admin", headerName: "Admin", width: 180 },
    { field: "Members", headerName: "Members", width: 150 },
    { field: "Assets", headerName: "Assets", width: 180 },
    { field: "Type", headerName: "Type", width: 150 },
    { field: "Event", headerName: "Next Event", width: 180 },
    {
      field: "Actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <MuiButton
          variant="contained"
          color="primary"
          content="View"
          onClick={() => navigate(`/memberships/${params.row.Name}/dashboard`)}
        />
      ),
    },
  ];
  const userData = useUserData();
  const buttons = [
    {
      name: "Create",
      path: "/memberships/create",
    },
    {
      name: "Leave",
      path: "/memberships/leave",
    },
  ];

  const rows =
    Array.isArray(userData?.chamas) &&
    userData.chamas.map((chama) => {
      return {
        id: chama.name,
        Name: chama.name,
        Type: chama.type,
        Admin: chama.admin,
        Members: chama.members,
        Assets: chama.assets,
        Event: chama.nextEvent,
      };
    });
  return (
    //reduce width on sx
    <Box sx={{}}>
      <GridOverview
        title="Memberships"
        columns={columns}
        rows={rows}
        userInfo={{
          accountBalance: userData?.accountBalance,
          name: "Total Contributions",
        }}
        buttons={buttons}
      />
    </Box>
  );
};

export default MembershipsHome;
