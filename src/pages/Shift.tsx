import React, { useState } from "react";
import { Title } from "../components/Title";

export function Shift() {
  const src = import.meta.env.VITE_GOOGLE_DS_URL || "";
  const client = import.meta.env.VITE_CLIENT || "";
  return (
    <div className="p-4 grid gap-4 auto-rows-min">
      <Title>Vehicle type shift</Title>
      {/* <input
        className="border-gray-500 p-2 border text-sm"
        value={src as string}
        onChange={(e) => setSrc(e.target.value)}
      /> */}
      <img src={`/${client}-typeshift.png`} />
      <iframe
        width="1024"
        height="768"
        src={src as string}
        frameBorder={0}
        className="border-0"
      />
    </div>
  );
}
