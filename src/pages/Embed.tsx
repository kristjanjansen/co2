import React, { useState } from "react";

export function Embed() {
  const [src, setSrc] = useState(
    "https://datastudio.google.com/embed/reporting/d3c44f85-000c-424a-aba9-35efb421d530/page/c8rZC"
  );
  return (
    <>
      <input
        className="border-gray-500 p-2 border text-sm"
        value={src}
        onChange={(e) => setSrc(e.target.value)}
      />
      <iframe
        width="800"
        height="600"
        src={src}
        frameBorder={0}
        style={{ border: 0 }}
      />
    </>
  );
}
