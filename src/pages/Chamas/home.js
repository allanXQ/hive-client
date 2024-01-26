import { Box } from "@mui/material";
import useUserData from "Hooks/useUserData";
import { MuiButton } from "components/common/Button";
import GridOverview from "components/common/gridOverview";
import { useNavigate } from "react-router-dom";

const MembershipsHome = () => {
  const navigate = useNavigate();
  const columns = [
    { field: "id", headerName: "id", width: 200 },
    { field: "Name", headerName: "Name", width: 150 },
    { field: "Type", headerName: "Type", width: 150 },
    { field: "Admin", headerName: "Admin", width: 180 },
    { field: "Assets", headerName: "Assets", width: 180 },
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
    Array.isArray(userData?.memberships) &&
    userData.memberships.map((chama) => {
      return {
        id: chama._id,
        Name: chama.name,
        Type: chama.type,
        Admin: chama.admin,
        Assets: chama.assets,
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
          accountBalance: userData?.totalContributions,
          name: "Total Contributions",
        }}
        buttons={buttons}
      />
    </Box>
  );
};

export default MembershipsHome;
