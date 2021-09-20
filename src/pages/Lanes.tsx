import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import { useData } from "../utils";
import { Spinner } from "../components/Spinner";

const headerClassName =
  "border border-t-2 border-b-2 border-gray-300 bg-gray-100 p-0 font-semibold text-left  text-gray-700 uppercase cursor-pointer whitespace-no-wrap text-[10px]";
const cellClassName =
  "whitespace-pre px-4 py-2 border-r border-gray-300 text-sm  cursor-pointer";

export function Lanes() {
  const { data, loading, error } = useData(
    `${import.meta.env.VITE_CLIENT || ""}-lanes`
  );
  console.log(data);
  const rows = data ? data.map((d, id: number) => ({ ...d, id })) : [];
  const widths = [
    250, 200, 200, 50, 100, 200, 50, 100, 200, 50, 150, 150, 150, 150, 150, 150,
    150, 150, 150,
  ];
  const columns: GridColDef[] = rows.length
    ? Object.keys(rows[0]).map((key, index) => ({
        field: key,
        headerName: key
          .split("_")
          .map((w) => w[0].toUpperCase() + w.substr(1).toLowerCase())
          .join(" "),
        description: key,
        headerClassName,
        cellClassName,
        width: widths[index],
        hide: ["id"].includes(key),
        // renderCell: (cell) =>
        //   ["Postal_code_destination"].includes(key) ? (
        //     <span
        //       className="bg-blue-500 w-full"
        //       style={{
        //         width: `${parseInt(cell.value.replace(" ", "")) / 1000}px`,
        //       }}
        //     >
        //       {cell.value}
        //     </span>
        //   ) : (
        //     cell.value
        //   ),
      }))
    : [];

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
    <div className="w-full h-[84%]">
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
