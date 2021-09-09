import React from "react";
import useGoogleSheets from "use-google-sheets";
import * as Plot from "@observablehq/plot";
import { PlotGraph } from "../components/PlotGraph";
import { parseData } from "../utils";

export function Data() {
  const {
    data: sheetsData,
    loading,
    error,
  } = useGoogleSheets({
    apiKey: import.meta.env.VITE_GOOGLE_API_KEY,
    sheetId: import.meta.env.VITE_GOOGLE_SHEETS_ID,
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }

  //@ts-ignore
  const data = sheetsData.find(({ id }) => id === "data").data.map(parseData);

  const plot = {
    y: {
      grid: true,
    },
    marks: [
      Plot.line(data, {
        x: "date",
        y: "current",
        sort: "date",
        stroke: "orange",
        strokeWidth: 3,
      }),
      Plot.line(data, {
        x: "date",
        y: "estimated",
        sort: "date",
        stroke: "royalblue",
        strokeWidth: 3,
      }),
      //Plot.ruleY([50], { stroke: "red" }),
    ],
  };

  return (
    <>
      <a
        href={`https://docs.google.com/spreadsheets/d/${
          import.meta.env.VITE_GOOGLE_SHEETS_ID
        }/edit#gid=0`}
        target="_blank"
        className="text-sm text-gray-500 hover:text-blue-500"
      >
        Google Sheets source →
      </a>
      <PlotGraph options={plot} />
    </>
  );
}
