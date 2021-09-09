import React, { ReactNode } from "react";
import { mergeClassLists as merge } from "tailwind-classlist";

export function LinkExternal(props: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a href={props.to} target="_blank">
      {props.children}
    </a>
  );
}

/*
className={merge(
        "text-sm text-gray-500 hover:text-blue-500",
        props.className || ""
      )}*/
