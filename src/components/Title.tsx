import React from "react";
import { mergeClassLists as merge } from "tailwind-classlist";

export function Title(props: { children: any; className?: string }) {
  return (
    <h1 className={merge("font-title text-2xl", props.className || "")}>
      {props.children}
    </h1>
  );
}
