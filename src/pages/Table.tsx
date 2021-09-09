import React, { useMemo, useState } from "react";
import { useTable } from "react-table";
import { Button } from "../components/Button";
import { IconClose } from "../components/IconClose";
import { IconDownload } from "../components/IconDownload";
import { Sidebar } from "../components/Sidebar";
import { Spinner } from "../components/Spinner";
import { useData } from "../utils";

export function Table() {
  const { data, loading, error } = useData("data");

  const columns = useMemo(
    () =>
      data
        ? Object.keys(data[0]).map((key) => ({ Header: key, accessor: key }))
        : [],
    []
  );

  const [rowIndex, setRowIndex] = useState(-1);

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
    <>
      <div className="p-4 bg-gray-100 flex justify-end">
        <Button>
          <div className="flex align-top gap-1">
            <IconDownload className="text-gray-800 w-4 h-4 translate-y-[0.1rem]" />
            Download XLS
          </div>
        </Button>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            {columns.map((column, i) => (
              <th
                key={i}
                className="border border-t-2 border-b-2 border-gray-300 bg-gray-100 px-4 py-[5px] font-semibold text-left  text-gray-700 uppercase cursor-pointer whitespace-no-wrap text-[10px]"
              >
                {column.Header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {(data || []).map((row, i) => {
            return (
              <tr key={i} onClick={() => setRowIndex(i)} className="group">
                {Object.values(row).map((cell, i) => {
                  return (
                    <td
                      key={i}
                      className="px-4 py-2 text-sm border border-gray-300 group-hover:bg-gray-50 cursor-pointer"
                    >
                      {cell as string}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      {rowIndex > -1 && data && (
        <Sidebar>
          <div className="py-2 px-4 flex justify-between border-gray-200 border-b">
            <div className="font-bold text-lg">{data[rowIndex].date}</div>
            <button onClick={() => setRowIndex(-1)}>
              <IconClose className="w-6 h-6 p-1 hover:bg-gray-200 rounded" />
            </button>
          </div>
        </Sidebar>
      )}
    </>
  );
}
