import React, { useState } from "react";

export function Embed() {
  const [src, setSrc] = useState(import.meta.env.VITE_GOOGLE_DS_URL || "");
  return (
    <>
      <input
        className="border-gray-500 p-2 border text-sm"
        value={src as string}
        onChange={(e) => setSrc(e.target.value)}
      />
      <iframe
        width="800"
        height="600"
        src={src as string}
        frameBorder={0}
        style={{ border: 0 }}
      />
    </>
  );
}
