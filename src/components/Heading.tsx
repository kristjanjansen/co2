import React from "react";

export function Heading(props: { children: any }) {
  return (
    <h1 className="font-sans text-lg font-semibold text-left text-gray-800">
      {props.children}
    </h1>
  );
}
