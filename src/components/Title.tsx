import React from "react";

export function Title(props: { children: any; className?: string }) {
  return (
    <h1 className={["font-title text-2xl", props.className || ""].join(" ")}>
      {props.children}
    </h1>
  );
}
