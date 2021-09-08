import React from "react";
import useGoogleSheets from "use-google-sheets";
import * as Plot from "@observablehq/plot";
import { PlotGraph } from "../components/PlotGraph";
import { parseData } from "../utils";

// export function Data() {
//   return (
//     <div>
//       <h2>Data</h2>
//     </div>
//   );
// }

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

  let data: any[] = [];

  if (sheetsData) {
    data = sheetsData[0].data.map(parseData);
  }

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
      Plot.ruleY([50], { stroke: "red" }),
    ],
  };

  return (
    <div>
      <PlotGraph options={plot} />
    </div>
  );
}
