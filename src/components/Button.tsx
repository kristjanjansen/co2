import React, { ReactNode } from "react";
import { mergeClassLists as merge } from "tailwind-classlist";

export function Button(props: { children: ReactNode; className?: string }) {
  return (
    <button
      className={merge(
        "round inline-flex relative justify-center items-center py-2 px-4 text-sm font-medium text-center text-white align-middle whitespace-pre bg-blue-500 hover:bg-blue-600 transition-colors rounded border border-transparent border-solid cursor-pointer",
        props.className || ""
      )}
    >
      {props.children}
    </button>
  );
}
