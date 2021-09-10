import React, { useState } from "react";

export function Modes() {
  const [src, setSrc] = useState(import.meta.env.VITE_GOOGLE_DS_URL || "");
  return (
    <div className="p-4 grid gap-4 auto-rows-min">
      {/* <input
        className="border-gray-500 p-2 border text-sm"
        value={src as string}
        onChange={(e) => setSrc(e.target.value)}
      /> */}
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
