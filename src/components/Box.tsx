import React, { ReactNode } from "react";

export function Box(props: { children: ReactNode; className?: string }) {
  return (
    <div
      className={[
        "py-4 px-4 text-sm bg-orange-100 rounded border border-gray-300 border-solid shadow-sm",
        props.className || "",
      ].join(" ")}
    >
      {props.children}
    </div>
  );
}
