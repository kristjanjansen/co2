import React, { ReactNode } from "react";
import { mergeClassLists as merge } from "tailwind-classlist";

export function Box(props: { children: ReactNode; className?: string }) {
  return (
    <div
      className={merge(
        "p-4 text-sm rounded border border-gray-300 border-solid shadow-sm",
        props.className || ""
      )}
    >
      {props.children}
    </div>
  );
}
