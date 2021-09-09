import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const headerClassName =
  "border border-t-2 border-b-2 border-gray-300 bg-gray-100 p-0 font-semibold text-left  text-gray-700 uppercase cursor-pointer whitespace-no-wrap text-[10px]";
const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    headerClassName,
    width: 130,
  },
  {
    field: "firstName",
    headerName: "First name",
    headerClassName,
    width: 130,
  },
  {
    field: "lastName",
    headerName: "Last name",
    headerClassName,
    width: 130,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    headerClassName,
    renderCell: (cell) => (
      <div className="bg-blue-500 w-full">{cell.value}</div>
    ),
    width: 130,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function Table() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={100}
        rowsPerPageOptions={[5]}
        disableSelectionOnClick
        headerHeight={32}
        rowHeight={32}
        hideFooter
        hideFooterPagination
        isCellEditable={() => false}
      />
    </div>
  );
}
