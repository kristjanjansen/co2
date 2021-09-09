import React, { ReactNode } from "react";
import { mergeClassLists as merge } from "tailwind-classlist";

export function LinkExernal(props: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a
      className={merge(
        "text-sm text-gray-500 hover:text-blue-500",
        props.className || ""
      )}
      href={props.to}
      target="_blank"
    >
      {props.children} →
    </a>
  );
}
