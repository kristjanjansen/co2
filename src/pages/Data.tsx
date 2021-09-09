import React from "react";
import useGoogleSheets from "use-google-sheets";
import * as Plot from "@observablehq/plot";
import { PlotGraph } from "../components/PlotGraph";
import { parseData } from "../utils";
import { Spinner } from "../components/Spinner";
import { LinkExernal } from "../components/LinkExternal";

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
    return (
      <div className="p-4 h-1/2 grid place-items-center">
        <Spinner />
      </div>
    );
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
    <div className="p-4 grid gap-4 auto-rows-min">
      <PlotGraph options={plot} />
      <div className="flex gap-4">
        <LinkExernal
          to={`https://docs.google.com/spreadsheets/d/${
            import.meta.env.VITE_GOOGLE_SHEETS_ID
          }/edit#gid=0`}
        >
          Google Sheets source
        </LinkExernal>
        <LinkExernal to="https://observablehq.com/d/c7fe2d92e05173b5">
          Observable source
        </LinkExernal>
      </div>
    </div>
  );
}
