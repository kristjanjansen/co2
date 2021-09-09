import React, { ReactNode } from "react";
import { mergeClassLists as merge } from "tailwind-classlist";

export function Box(props: { children: ReactNode; className?: string }) {
  return (
    <div
      className={merge(
        "py-4 px-4 text-sm bg-orange-100 rounded border border-gray-300 border-solid shadow-sm",
        props.className || ""
      )}
    >
      {props.children}
    </div>
  );
}
