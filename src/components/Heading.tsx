import React from "react";
import { mergeClassLists as merge } from "tailwind-classlist";

export function Heading(props: { children: any; className?: string }) {
  return (
    <h1
      className={merge(
        "leading-6 font-sans text-lg font-semibold text-left text-gray-800",
        props.className || ""
      )}
    >
      {props.children}
    </h1>
  );
}
