import React, { useMemo } from "react";
import { useTable } from "react-table";
import { Button } from "../components/Button";
import { IconDownload } from "../components/IconDownload";

export function Table() {
  const data = useMemo(
    () => [
      {
        col1: "Hello",
        col2: "World",
      },
      {
        col1: "react-table",
        col2: "rocks",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "Column 1",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Column 2",
        accessor: "col2",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <>
      <div className="p-4 bg-gray-100 flex justify-end">
        <Button>
          <div className="flex align-top gap-1">
            <IconDownload className="text-gray-800 w-4 h-4 translate-y-[0.1rem]" />
            Download XLS
          </div>
        </Button>
      </div>
      <table {...getTableProps()} className="w-full">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="border border-t-2 border-b-2 border-gray-300 bg-gray-100 px-4 py-[5px] font-semibold text-left  text-gray-700 uppercase cursor-pointer whitespace-no-wrap text-[10px]"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="px-4 py-2 text-sm border border-gray-300"
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
