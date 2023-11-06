import { MuiButton } from "components/common/Button";
import MUIDataGrid from "components/common/Datagrid";
import React, { memo } from "react";
import { useNavigate } from "react-router-dom";

const columns = [
  { field: "Chama", headerName: "Chama", width: 120 },
  {
    field: "Dashboard",
    headerName: "Dashboard",
    width: 120,
    renderCell: (params) => <ActionButton chama={params.row.Chama} />,
  },
];

const rows = [
  {
    id: 1,
    Chama: "Chama1",
  },
  {
    id: 2,
    Chama: "Chama2",
  },
  {
    id: 3,
    Chama: "Chama3",
  },
];

const ActionButton = memo(({ chama }) => {
  const navigate = useNavigate();

  return (
    <MuiButton
      variant="text"
      onClick={() => navigate(`/${chama}/dashboard`)}
      content="View"
    />
  );
});

const Memberships = () => {
  return (
    <MUIDataGrid
      title="Memberships"
      rows={rows}
      columns={columns}
      width={240}
      height="fit-content"
    />
  );
};

export default Memberships;
