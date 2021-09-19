import React from "react";
import { Title } from "../components/Title";

export function Emissions() {
  const client = import.meta.env.VITE_CLIENT;
  return (
    <div className="p-4 grid gap-4 auto-rows-min">
      <Title>Transport emissions insight</Title>
      <img src={`/${client}-emissions.png`} />
    </div>
  );
}
