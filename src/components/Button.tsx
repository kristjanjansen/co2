import React, { ReactNode } from "react";
import { mergeClassLists as merge } from "tailwind-classlist";

export function Button(props: { children: ReactNode; className?: string }) {
  return (
    <button
      className={merge(
        "px-2 py-1 bg-white border hover:bg-gray-200 transition-colors border-gray-500 rounded font-semibold text-gray-800 text-sm",
        props.className || ""
      )}
    >
      {props.children}
    </button>
  );
}
