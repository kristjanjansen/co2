import React from "react";
import { Title } from "../components/Title";

export function Pricing() {
  const client = import.meta.env.VITE_CLIENT;
  return (
    <div className="p-4 grid gap-4 auto-rows-min">
      <Title>Cost of emissions</Title>
      <img src={`/${client}-pricing.png`} />
    </div>
  );
}
