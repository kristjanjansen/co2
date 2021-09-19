import React from "react";
import { Title } from "../components/Title";

export function Summary() {
  const client = import.meta.env.VITE_CLIENT;
  return (
    <div className="p-4 grid gap-4 auto-rows-min">
      <Title>Management summary</Title>
      <img src={`/${client}-summary.png`} />
    </div>
  );
}
