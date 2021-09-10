import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useData } from "../utils";
import { Spinner } from "../components/Spinner";

const headerClassName =
  "border border-t-2 border-b-2 border-gray-300 bg-gray-100 p-0 font-semibold text-left  text-gray-700 uppercase cursor-pointer whitespace-no-wrap text-[10px]";
const cellClassName =
  "whitespace-pre px-4 py-2 border-r border-gray-300 text-sm  cursor-pointer";

/*
const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "ID",
    headerClassName,
    cellClassName,
    width: 200,
  },
  {
    field: "firstName",
    headerName: "First name",
    headerClassName,
    cellClassName,
    width: 200,
  },
  {
    field: "lastName",
    headerName: "Last name",
    headerClassName,
    cellClassName,
    width: 200,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    headerClassName,
    cellClassName,
    renderCell: (cell) => (
      <div className="bg-blue-500 w-full">{cell.value}</div>
    ),
    width: 200,
  },
];
*/
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
  const { data, loading, error } = useData("knauf-insulation");

  const rows = data ? data.map((d, id: number) => ({ ...d, id })) : [];

  const columns: GridColDef[] = rows.length
    ? Object.keys(rows[0]).map((key) => ({
        field: key,
        headerName: key
          .split("_")
          .map((w) => w[0].toUpperCase() + w.substr(1).toLowerCase())
          .join(" "),
        description: key,
        headerClassName,
        cellClassName,
        width: 150,
        hide: ["id"].includes(key),
      }))
    : [];

  //console.log(columns2);

  if (loading) {
    return (
      <div className="p-4 h-1/2 grid place-items-center">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }

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
