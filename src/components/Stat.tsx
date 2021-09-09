import React from "react";
import { mergeClassLists as merge } from "tailwind-classlist";

export function Stat(props: { children: any; className?: string }) {
  return (
    <div
      className={merge(
        "font-bold text-3xl tracking-tight",
        props.className || ""
      )}
    >
      {props.children}
    </div>
  );
}
