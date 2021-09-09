import React from "react";
import useGoogleSheets from "use-google-sheets";
import * as Plot from "@observablehq/plot";
import { PlotGraph } from "../components/PlotGraph";
import { parseData, useData } from "../utils";
import { Spinner } from "../components/Spinner";
import { LinkExernal } from "../components/LinkExternal";
import { Stat } from "../components/Stat";

export function Data() {
  const { data, loading, error } = useData("long-term-targets", parseData);

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

  const plotTransports = {
    width: 500,
    y: {
      grid: true,
    },
    marks: [
      Plot.line(data, {
        x: (d) => new Date(`${d.Year}-01-01`),
        y: (d) => parseInt(d.Transports_tkm.replace(",", "").trim()),
        strokeWidth: 3,
      }),
    ],
  };

  const plotTargetReduction = {
    y: {
      grid: true,
    },
    marks: [
      Plot.line(data, {
        x: (d) => new Date(`${d.Year}-01-01`),
        y: (d) => parseInt(d.target_reduction.replace("%", "").trim()),
        strokeWidth: 3,
      }),
    ],
  };

  const plotTargetCO2Tkm = {
    y: {
      grid: true,
    },
    marks: [
      Plot.line(data, {
        x: (d) => new Date(`${d.Year}-01-01`),
        y: (d) => d.Target_co2tkm,
        strokeWidth: 3,
      }),
    ],
  };

  const totalCO2Kg = {
    y: {
      grid: true,
    },
    marks: [
      Plot.line(data, {
        x: (d) => new Date(`${d.Year}-01-01`),
        y: (d) => d.total_co2_kg,
        strokeWidth: 3,
      }),
    ],
  };

  return (
    <div className="p-4 grid gap-4 auto-rows-min">
      <Stat className="text-lg">Transports (tkm)</Stat>
      <PlotGraph options={plotTransports} />

      <Stat className="text-lg">Target reduction (%)</Stat>
      <p className="text-gray-500 text-sm">Zero by 2025, linear reduction</p>
      <PlotGraph options={plotTargetReduction} />

      <Stat className="text-lg">Target reduction (co2/tkm)</Stat>
      <PlotGraph options={plotTargetCO2Tkm} />

      <Stat className="text-lg">
        Total CO<sub>2</sub>(co2 kg)
      </Stat>
      <PlotGraph options={totalCO2Kg} />

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
