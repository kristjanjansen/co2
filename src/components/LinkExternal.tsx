import React, { ReactNode } from "react";
import { mergeClassLists as merge } from "tailwind-classlist";

export function LinkExternal(props: {
  to: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <a className={props.className || ""} href={props.to} target="_blank">
      {props.children}
    </a>
  );
}
